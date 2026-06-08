# NativeScript UXCam

## Installation

`tns plugin add nativescript-uxcam`

NB: UXCam on iOS needs a minimum version of iOS 12.0

### iOS native dependency (Swift Package Manager)

As of `1.0.6`, the iOS UXCam SDK is integrated via **Swift Package Manager (SPM)**
instead of CocoaPods, which is being deprecated. The plugin ships an
`ios.SPMPackages` entry in [`nativescript.config.ts`](nativescript.config.ts) that
NativeScript merges into your app automatically at build time — no extra steps
required.

- SPM is used on **NativeScript 8.9.0 or newer** (the version that added
  plugin-level SPM config merging).
- SPM package: [`uxcam/uxcam-ios-sdk`](https://github.com/uxcam/uxcam-ios-sdk) — pinned to `3.8.2`.

**Automatic CocoaPods fallback:** you don't need to choose. Plugin-level SPM
config merging is performed by the **NativeScript CLI** (since CLI `8.9.0`), so
the plugin's [`platforms/ios/Podfile`](platforms/ios/Podfile) detects the CLI
version at build time (via `ns --version`, falling back to `@nativescript/core`)
and only adds the UXCam pod when the CLI is older than `8.9.0`. On `8.9.0+` it
adds nothing and SPM owns the dependency, so UXCam is never linked twice — even
if your app pins an older `@nativescript/core` than the CLI.

## Usage

### Setup

```javascript
import { NSUXCam } from 'nativescript-uxcam';

NSUXCam.optIntoSchematicRecordings();
const blur = {
      'type': 3,
      'hideGestures': true,
      'blurRadius': 20,
      'screens': ['Home Screen']
    }

var config = {
        'userAppKey': '<your-app-key>',
        'occlusions': [blur]
    }
     
NSUXCam.startWithConfiguration(config);
```

### Hiding sensitive view

```javascript
const sensitiveView = page.getViewById("<id-of-sensitive-view>");
NSUXCam.occludeSensitiveView(sensitiveView);

// Angular - replace <elementRefToOcclude> with your element reference after page is loaded
const sensitiveView = this.
<elementRefToOcclude>.nativeElement;
    NSUXCam.occludeSensitiveView(sensitiveView);
```

### Event logging

```javascript
// log event
NSUXCam.logEvent("<Event name>");

// log event with properties
NSUXCam.logEventWithProperties("<Event name>", {
    "prop-key": "<prop-value>"
});
```

### Manual Screen Name Tagging

```javascript
import { HostListener } from "@angular/core";

@HostListener('loaded')
  pageOnInit() {
    NSUXCam.tagScreenName("<screen-name>");
  }
```