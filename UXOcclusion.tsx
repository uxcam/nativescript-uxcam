
export default interface UXOcclusion {
    readonly type: UXOcclusionType;
}

export class UXBlur implements UXOcclusion {
    readonly type: UXOcclusionType;
    constructor() {
        this.type = UXOcclusionType.Blur;
    }

    blurRadius?: number;
    hideGestures?: boolean;
}

export class UXOverlay implements UXOcclusion {
    readonly type: UXOcclusionType;
    constructor() {
        this.type = UXOcclusionType.Overlay;
    }

    color?: number;
    hideGestures?: boolean;
}

export class UXOcclueAllTextFields implements UXOcclusion {
    readonly type: UXOcclusionType;
    constructor() {
        this.type = UXOcclusionType.OccludeAllTextFields;
    }
}