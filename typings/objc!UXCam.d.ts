
declare const enum UXBlurType {

	Gaussian = 0,

	Box = 1,

	Bokeh = 2
}

declare class UXCam extends NSObject {

	static EnableAdvancedGestureRecognizers(enable: boolean): void;

	static GetGestureRecognizers(): NSArray<UIGestureRecognizer>;

	static addScreenNameToIgnore(nameToIgnore: string): void;

	static addScreenNamesToIgnore(namesToIgnore: NSArray<string> | string[]): void;

	static alloc(): UXCam; // inherited from NSObject

	static allowShortBreakForAnotherApp(continueSession: boolean): void;

	static applyOcclusion(setting: UXCamOcclusionSetting): void;

	static cancelCurrentSession(): void;

	static captureLogOutput(): void;

	static deletePendingUploads(): void;

	static disableCrashHandling(disable: boolean): void;

	static getAllowShortBreakMaxDuration(): number;

	static getAllowShortBreakStatus(): boolean;

	static getMultiSessionRecord(): boolean;

	static isRecording(): boolean;

	static logEvent(eventName: string): void;

	static logEventWithProperties(eventName: string, properties: NSDictionary<string, any>): void;

	static logNotification(notification: UNNotification): void;

	static new(): UXCam; // inherited from NSObject

	static occludeAllTextFields(occludeAll: boolean): void;

	static occludeRectsOnNextFrame(rectList: NSArray<NSArray<number>> | NSArray<number>[]): void;

	static occludeSensitiveScreen(hideScreen: boolean): void;

	static occludeSensitiveScreenHideGestures(hideScreen: boolean, hideGestures: boolean): void;

	static occludeSensitiveView(sensitiveView: UIView): void;

	static occludeSensitiveViewWithoutGesture(sensitiveView: UIView): void;

	static optInOverall(): void;

	static optInOverallStatus(): boolean;

	static optInSchematicRecordingStatus(): boolean;

	static optIntoSchematicRecordings(): void;

	static optOutOfSchematicRecordings(): void;

	static optOutOverall(): void;

	static pauseScreenRecording(): void;

	static pendingUploads(): number;

	static pluginTypeVersion(type: string, versionNumber: string): void;

	static removeAllScreenNamesToIgnore(): void;

	static removeOcclusion(): void;

	static removeOcclusionOfType(type: UXOcclusionType): void;

	static removeScreenNameToIgnore(nameToRemove: string): void;

	static removeScreenNamesToIgnore(namesToRemove: NSArray<string> | string[]): void;

	static reportBugEventProperties(name: string, properties: NSDictionary<string, any>): void;

	static reportExceptionEventProperties(exception: NSException, properties: NSDictionary<string, any>): void;

	static resumeScreenRecording(): void;

	static screenNamesBeingIgnored(): NSArray<string>;

	static setAllowShortBreakMaxDuration(duration: number): void;

	static setAutomaticScreenNameTagging(enable: boolean): void;

	static setMultiSessionRecord(recordMultipleSessions: boolean): void;

	static setPushNotificationToken(pushToken: string): void;

	static setSessionPropertyValue(propertyName: string, value: any): void;

	static setUserIdentity(userIdentity: string): void;

	static setUserPropertyValue(propertyName: string, value: any): void;

	static startNewSession(): void;

	static startWithConfiguration(configuration: UXCamConfiguration): void;

	static startWithConfigurationCompletionBlock(configuration: UXCamConfiguration, sessionStartedBlock: (p1: boolean) => void): void;

	static startWithKey(userAPIKey: string): void;

	static startWithKeyCompletionBlock(userAPIKey: string, sessionStartedBlock: (p1: boolean) => void): void;

	static startWithKeyMultipleSessionsCompletionBlock(userAPIKey: string, multiSession: boolean, sessionStartedBlock: (p1: boolean) => void): void;

	static stopSessionAndUploadData(): void;

	static tagScreenName(screenName: string): void;

	static unOccludeSensitiveView(view: UIView): void;

	static uploadingPendingSessions(block: () => void): void;

	static urlForCurrentSession(): string;

	static urlForCurrentUser(): string;

	static readonly configuration: UXCamConfiguration;
}

declare class UXCamBlurSetting extends NSObject implements UXCamOcclusionSetting {

	static alloc(): UXCamBlurSetting; // inherited from NSObject

	static new(): UXCamBlurSetting; // inherited from NSObject

	readonly blurType: UXBlurType;

	readonly radius: number;

	readonly category: UXOcclusionCategory; // inherited from UXCamOcclusionSetting

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	hideGestures: boolean; // inherited from UXCamOcclusionSetting

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly type: UXOcclusionType; // inherited from UXCamOcclusionSetting

	readonly  // inherited from NSObjectProtocol

	constructor(o: { blurType: UXBlurType; radius: number; });

	constructor(o: { radius: number; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithBlurTypeRadius(type: UXBlurType, radius: number): this;

	initWithRadius(radius: number): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class UXCamConfiguration extends NSObject {

	static alloc(): UXCamConfiguration; // inherited from NSObject

	static new(): UXCamConfiguration; // inherited from NSObject

	enableAdvancedGestureRecognition: boolean;

	enableAutomaticScreenNameTagging: boolean;

	enableCrashHandling: boolean;

	enableMultiSessionRecord: boolean;

	enableNetworkLogging: boolean;

	environment: UXEnvironment;

	occlusion: UXCamOcclusion;

	readonly userAppKey: string;

	constructor(o: { appKey: string; });

	initWithAppKey(userAppKey: string): this;
}

declare class UXCamOccludeAllTextFields extends NSObject implements UXCamOcclusionSetting {

	static alloc(): UXCamOccludeAllTextFields; // inherited from NSObject

	static new(): UXCamOccludeAllTextFields; // inherited from NSObject

	readonly category: UXOcclusionCategory; // inherited from UXCamOcclusionSetting

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	hideGestures: boolean; // inherited from UXCamOcclusionSetting

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly type: UXOcclusionType; // inherited from UXCamOcclusionSetting

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class UXCamOcclusion extends NSObject {

	static alloc(): UXCamOcclusion; // inherited from NSObject

	static getBlurTypeFromName(name: string): UXBlurType;

	static getSettingFromJson(json: NSDictionary<any, any>): UXCamOcclusionSetting;

	static new(): UXCamOcclusion; // inherited from NSObject

	static systemNameForBlurType(type: UXBlurType): string;

	parameters: NSArray<UXCamOcclusionParameter>;

	screens: NSArray<UXCamOcclusionScreen>;

	constructor(o: { setting: UXCamOcclusionSetting; });

	constructor(o: { settings: NSArray<UXCamOcclusionSetting> | UXCamOcclusionSetting[]; });

	applySettingScreens(setting: UXCamOcclusionSetting, screens: NSArray<string> | string[]): void;

	applySettingsScreensExcludeMentionedScreens(settings: NSArray<UXCamOcclusionSetting> | UXCamOcclusionSetting[], screens: NSArray<string> | string[], exclude: boolean): void;

	containsSettingOfType(type: UXOcclusionType): boolean;

	initWithSetting(setting: UXCamOcclusionSetting): this;

	initWithSettings(settings: NSArray<UXCamOcclusionSetting> | UXCamOcclusionSetting[]): this;
}

declare class UXCamOcclusionParameter extends NSObject {

	static alloc(): UXCamOcclusionParameter; // inherited from NSObject

	static new(): UXCamOcclusionParameter; // inherited from NSObject

	excludedScreens: NSArray<string>;

	readonly setting: UXCamOcclusionSetting;

	constructor(o: { setting: UXCamOcclusionSetting; });

	constructor(o: { setting: UXCamOcclusionSetting; excludedScreens: NSArray<string> | string[]; });

	initWithSetting(setting: UXCamOcclusionSetting): this;

	initWithSettingExcludedScreens(setting: UXCamOcclusionSetting, excludedScreens: NSArray<string> | string[]): this;
}

declare class UXCamOcclusionScreen extends NSObject {

	static alloc(): UXCamOcclusionScreen; // inherited from NSObject

	static new(): UXCamOcclusionScreen; // inherited from NSObject

	readonly name: string;

	settings: NSMutableArray<UXCamOcclusionSetting>;

	constructor(o: { name: string; settings: NSArray<UXCamOcclusionSetting> | UXCamOcclusionSetting[]; });

	initWithNameSettings(name: string, settings: NSArray<UXCamOcclusionSetting> | UXCamOcclusionSetting[]): this;
}

interface UXCamOcclusionSetting extends NSObjectProtocol {

	category: UXOcclusionCategory;

	hideGestures: boolean;

	type: UXOcclusionType;
}
declare var UXCamOcclusionSetting: {

	prototype: UXCamOcclusionSetting;
};

declare class UXCamOverlaySetting extends NSObject implements UXCamOcclusionSetting {

	static alloc(): UXCamOverlaySetting; // inherited from NSObject

	static new(): UXCamOverlaySetting; // inherited from NSObject

	color: UIColor;

	readonly category: UXOcclusionCategory; // inherited from UXCamOcclusionSetting

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	hideGestures: boolean; // inherited from UXCamOcclusionSetting

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly type: UXOcclusionType; // inherited from UXCamOcclusionSetting

	readonly  // inherited from NSObjectProtocol

	constructor(o: { color: UIColor; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithColor(color: UIColor): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare var UXCamVersionNumber: number;

declare var UXCamVersionString: interop.Reference<number>;

declare var UXCam_Notification_AllowShortBreak: string;

declare var UXCam_Notification_Key_AllowShortBreakContinuing: string;

declare var UXCam_Notification_Key_AllowShortBreakDuration: string;

declare var UXCam_VerifyNotification: string;

declare var UXCam_VerifyNotification_StartedKey: string;

declare const enum UXEnvironment {

	Alpha = 1,

	Beta = 2,

	Release = 3
}

declare const enum UXOcclusionCategory {

	TextOnly = 0,

	Screen = 1
}

declare const enum UXOcclusionType {

	OccludeAllTextFields = 1,

	Overlay = 2,

	Blur = 3,

	Unknown = 4
}
