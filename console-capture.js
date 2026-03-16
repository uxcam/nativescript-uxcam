/**
 * Shared JS console capture for NativeScript (iOS + Android).
 *
 * Safe serialization with depth limit (3 levels), circular ref protection,
 * 512 char per-arg cap. Adaptive flush (immediate for errors), batched transport.
 *
 * @param {function(level, message, source, timestamp)} transportFn
 *        Platform-specific function to deliver a single log entry to native SDK.
 */
let __uxcamNSConsolePatched = false;

function patchNSConsole(transportFn) {
    if (__uxcamNSConsolePatched) return;
    __uxcamNSConsolePatched = true;

    const MAX_MSG_LEN = 2048;
    const MAX_BUFFER = 20;
    const FLUSH_MS = 1000;
    let buffer = [];
    let timer = null;

    function safeStringify(obj, maxDepth) {
        const seen = new WeakSet();
        const depthMap = new WeakMap();
        depthMap.set(obj, 0);
        return JSON.stringify(obj, function (key, value) {
            if (typeof value === 'object' && value !== null) {
                if (seen.has(value)) return '[Circular]';
                seen.add(value);
                const parentDepth = (this && typeof this === 'object') ? (depthMap.get(this) || 0) : 0;
                const currentDepth = parentDepth + (key === '' ? 0 : 1);
                depthMap.set(value, currentDepth);
                if (currentDepth >= maxDepth) return Array.isArray(value) ? '[Array]' : '[Object]';
            }
            return value;
        });
    }

    function fmt(arg) {
        if (arg === undefined) return 'undefined';
        if (arg === null) return 'null';
        const t = typeof arg;
        if (t === 'string') return arg;
        if (t === 'number' || t === 'boolean') return '' + arg;
        if (t === 'function') return '[Function]';
        try {
            const s = safeStringify(arg, 3);
            return s.length > 512 ? s.slice(0, 512) + '...' : s;
        } catch (e) {
            return '[Object]';
        }
    }

    function flush() {
        if (timer) { clearTimeout(timer); timer = null; }
        if (buffer.length === 0) return;
        const batch = buffer;
        buffer = [];
        for (const entry of batch) {
            try {
                transportFn(entry.l, entry.m, 'nativescript', entry.t);
            } catch (e) { /* SDK not ready */ }
        }
    }

    ['log', 'info', 'warn', 'error', 'debug'].forEach(level => {
        const original = console[level];
        if (typeof original !== 'function') return;
        console[level] = function(...args) {
            original.apply(console, args);
            const parts = args.map(fmt);
            let msg = parts.join(' ');
            if (msg.length > MAX_MSG_LEN) msg = msg.slice(0, MAX_MSG_LEN);
            buffer.push({ l: level, m: msg, t: Date.now() });
            if (level === 'error') { flush(); return; }
            if (buffer.length >= MAX_BUFFER) { flush(); return; }
            if (!timer) timer = setTimeout(flush, FLUSH_MS);
        };
    });
}

module.exports = { patchNSConsole };
