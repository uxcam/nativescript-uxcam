
const PLUGIN_NAME = "nativescript";
const PLUGIN_VERSION = "1.0.1";

export class NSUXCam {
    /**
     *  This will start the UXCam system, get the settings configurations from our server and start capturing the data according to the configuration.
     *
     *  @brief Start the UXCam session
     *  @parameter configuration   The configuration to identify your UXCam app - find appKey in the UXCam dashboard for your account 
     */
    static startWithConfiguration(configuration) {
        UXCam.pluginTypeVersion(PLUGIN_NAME, PLUGIN_VERSION);
        const uxConfiguration = UXCamConfiguration.alloc().initWithAppKey(configuration.userAppKey);
        uxConfiguration.enableMultiSessionRecord = configuration.enableMultiSessionRecord ?? true;
        uxConfiguration.enableCrashHandling = configuration.enableCrashHandling ?? true;
        uxConfiguration.enableAutomaticScreenNameTagging = configuration.enableAutomaticScreenNameTagging ?? true;
        uxConfiguration.enableAdvancedGestureRecognition = configuration.enableAdvancedGestureRecognition ?? true;
        uxConfiguration.enableNetworkLogging = configuration.enableNetworkLogging ?? false;

        if (configuration.occlusions) {
            var uxOcclusion = UXCamOcclusion.alloc().init();
            for (let occlusion of configuration.occlusions) {
                const occlusionSetting = this.occlusionSettingForOcclusion(occlusion);
                
                var screens = occlusion.screens || [];
                var exclude = occlusion.excludeMentionedScreens || false;
                uxOcclusion.applySettingsScreensExcludeMentionedScreens([occlusionSetting], screens, exclude);
            }
           
           uxConfiguration.occlusion = uxOcclusion;
        }

        UXCam.startWithConfiguration(uxConfiguration);
    }

    static async configurationForUXCam() {
        return UXCam.configurationForUXCam();
    }

    static updateConfiguration(configuration) {
        UXCam.updateConfiguration(configuration);
    }

    static applyOcclusion(occlusion) {
        const occlusionSetting = this.occlusionSettingForOcclusion(occlusion);
        UXCam.applyOcclusion(occlusionSetting);
    }

    static occlusionSettingForOcclusion(occlusion) {
        var occlusionSetting;
        switch (occlusion.type || UXOcclusionType.Blur) {
            case UXOcclusionType.Blur:
                let blurRadius = occlusion.blurRadius || 10;
                occlusionSetting = UXCamBlurSetting.alloc().initWithRadius(blurRadius);
                break;
            case UXOcclusionType.Overlay:
                occlusionSetting = UXCamOverlaySetting.new();
                break;
            case UXOcclusionType.OccludeAllTextFields:
                occlusionSetting = UXCamOccludeAllTextFields.new();
                break;
            default:
                occlusionSetting = UXCamBlurSetting.new();
        }
        return occlusionSetting;
    }

    static removeOcclusion(occlusion) {
        if (occlusion.type) {
            UXCam.removeOcclusionOfType(occlusion.type);
        } else {
            UXCam.removeOcclusion();
        }
    }

     /**
     *  @deprecated Use {@link #startWithConfiguration(configuration)} instead to start new session
     * 
     *  @brief Start the UXCam session
     *  @parameter userAppKey   The key to identify your UXCam app - find it in the UXCam dashboard for your account 
     */
    static startWithKey(appKey) {
        const configuration = { userAppKey: appKey };
        NSUXCam.startWithConfiguration(configuration);
    }

    /**
     * Starts a new session after the {@link #stopSessionAndUploadData()} method has been called.
     * This happens automatically when the app returns from background.
     */
    static startNewSession() {
		UXCam.startNewSession();
    }
    
    /**
     * Stop current uxcam session and send captured data to server.<br>
     * Use this to start sending the data on UXCam server without the app going into the background.<br>
     * This starts an asynchronous process and returns immediately.
     */
    static stopSessionAndUploadData() {
        UXCam.stopSessionAndUploadData();
    }

    /**
     *  Returns a URL path that shows the current session when it compeletes
     *
     *  @note This can be used for tying in the current session with other analytics systems
     *
     *  @return url path for current session or nil if no verified session is active
     */
    static async urlForCurrentSession() {
		return UXCam.urlForCurrentSession();
    }

    /**
     *  Returns a URL path for showing all the current users sessions
     *
     *  @note This can be used for tying in the current user with other analytics systems
     *
     *  @return url path for user session or nil if no verified session is active
     */
    static async urlForCurrentUser() {
        return UXCam.urlForCurrentUser();
    }

    /**
        Hide / un-hide the whole screen from the recording
     
        Call this when you want to hide the whole screen from being recorded - useful in situations where you don't have access to the exact view to occlude
        Once turned on with a `true` parameter it will continue to hide the screen until called with `false`
     
        @parameter hideScreen Set `true` to hide the screen from the recording, `false` to start recording the screen contents again
        @parameter hideGesture Set `true` to hide the gestures in the screen from the recording, `false` to start recording the gestures in the screen again
    */
    static occludeSensitiveScreen(hideScreen, hideGesture) {
        if(typeof hideGesture !== "undefined"){
            UXCam.occludeSensitiveScreen(hideScreen, hideGesture);
        }else{
            UXCam.occludeSensitiveScreen(hideScreen, true);
        }
    }

    /**
        Hide / un-hide all UITextField views on the screen
     
        Call this when you want to hide the contents of all UITextFields from the screen capture. Default is `false`.
     
        @parameter occludeAll Set `true` to hide all UITextField views on the screen in the recording, `false` to stop occluding them from the screen recording.
     */
    static occludeAllTextFields(occludeAll) {
        UXCam.occludeAllTextFields(occludeAll);
    }

    /**
     UXCam uses a unique number to tag a device.
     You can set a user identity for a device allowing you to more easily search for it on the dashboard and review their sessions further.
     
     @parameters userIdentity String to apply to this user (device) in this recording session
     */
    static setUserIdentity(userIdentity) {
        UXCam.setUserIdentity(userIdentity);
    }

    /**
     Add a key/value property for this user
     
     @parameter propertyName Name of the property to attach to the user
     @parameter value A value to associate with this property
     
     @note Only number and string value types are supported to a maximum size per entry of 1KiB
     */
    static setUserProperty(propertyName, value) {
        UXCam.setUserProperty(propertyName, value);
    }

    /**
     Add a single key/value property to this session
     
     @parameter propertyName Name of the property to attach to the session recording
     @parameter value A value to associate with this property
     
     @note Only number and string value types are supported to a maximum size per entry of 1KiB
     */
    static setSessionProperty(propertyName, value) {
        UXCam.setSessionProperty(propertyName, value);
    }

    /**
        Insert a general event, with associated properties, into the timeline - stores the event with the timestamp when it was added.
     
        @parameter eventName Name of the event to attach to the session recording at the current time
        @parameter properties An Object of properties to associate with this event
     
        @note Only number and string property types are supported to a maximum count of 100 and maximum size per entry of 1KiB
     */
    static logEvent(eventName, properties) {
        if(typeof properties !== "undefined" || properties !== null){
            UXCam.logEvent(eventName, properties);
        }else{
            UXCam.logEvent(eventName);
        }
    }

	/**
 	*  @brief Call this before calling startWithKey to disable UXCam from capturing sessions that crash
 	*
 	*  @param disable `true` to disable crash capture
 	*  @note By default crash handling is enabled.
 	*/
	static disableCrashHandling(disable) 
	{
		UXCam.disableCrashHandling(disable);
	
	}

    /**
     *  Returns the current recording status
     *
     *  @return `true` if the session is being recorded
     */
    static isRecording() {
        return UXCam.isRecording();
    }

    /**
     * Pause the screen recording
     */
    static pauseScreenRecording() {
        UXCam.pauseScreenRecording();
    }

    /**
     *  Resumes a paused session - will cancel any remaining pause time and resume screen recording
     */
    static resumeScreenRecording() {
        UXCam.resumeScreenRecording();
    }

    /**
     *  This will cancel any current session recording and opt this device out of future session recordings until `optInOverall` is called
     *  @note The default is to opt-in to session recordings, but not to screen recordings, and the defaults will be reset if the user un-installs and re-installs the app
     */
    static optOutOverall() {
        UXCam.optOutOverall();
    }

    /**
     *  This will opt this device out of schematic recordings for future sessions
     *  - any current session will be stopped and restarted with the last settings passed to `startWithKey`
     */
    static optOutOfSchematicRecordings()
    {
        UXCam.optOutOfSchematicRecordings();
    }

    /**
     *  This will opt this device into session recordings
     *  - any current session will be stopped and a new session will be started with the last settings passed to `startWithKey`
     */
    static optInOverall()
    {
        UXCam.optInOverall();
    }

    /**
     *  This will opt this device back into session recordings
     */
    static optIntoSchematicRecordings()
    {
        UXCam.optIntoSchematicRecordings();
    }

    /**
     *  Returns the opt-in status of this device
     *  @return `true` if the device is opted in to session recordings, `false` otherwise. The default is `false`.
     */
    static optInOverallStatus()
    {
        return UXCam.optInOverallStatus();
    }

    /** Returns the opt-in status of this device for schematic recordings
     *  @returns `true` if the device is opted in to schematic recordings, `false` otherwise. The default is `false`.
     *  @note Use in conjunction with optInOverallStatus to control the overall recording status for the device
     */
    static optInSchematicRecordingStatus()
    {
        return UXCam.optInSchematicRecordingStatus();
    }

    /**
    *  @brief Android only.
    *  This will opt this device into video recording for future sessions.
    */
    static optIntoVideoRecording() {
        UXCam.optIntoSchematicRecordings();
    }

    /**
    *  @brief Android only.
    *  This will opt this device out of video recording for future sessions.
    */
    static optOutOfVideoRecording() {
        UXCam.optOutOfSchematicRecordings();
    }

    /**
     * @brief Android only.
     *  Returns the opt-in video status of this device
     *  @return `true` if the device is opted in for video recordings, `false` otherwise.
     */
    static optInVideoRecordingStatus(){
        return UXCam.optInSchematicRecordingStatus();
    }

    /**
     *  Cancels the recording of the current session and discards the data
     *
     * @note A new session will start as normal when the app nexts come out of the background (depending on the state of the MultiSessionRecord flag), or if you call `startNewSession`
    */
    static cancelCurrentSession() {
        UXCam.cancelCurrentSession();
    }

    /**
     *  By default UXCam will end a session immediately when your app goes into the background. But if you are switching over to another app for authorisation, or some other short action, and want the session to continue when the user comes back to your app then call this method with a value of `true` before switching away to the other app.
     *  UXCam will pause the current session as your app goes into the background and then continue the session when your app resumes. If your app doesn't resume within a couple of minutes the original session will be closed as normal and a new session will start when your app eventually is resumed.
     *
     *  @brief Prevent a short trip to another app causing a break in a session
     *  @param continueSession Set to `true` to continue the current session after a short trip out to another app. Default is `false` - stop the session as soon as the app enters the background.
     *  @param continueSession For android, you can also add time to wait in `milliseconds` before finishing the session.
     */
    static allowShortBreakForAnotherApp(continueSession) {
        if (typeof continueSession === 'boolean') {
            UXCam.allowShortBreakForAnotherApp(continueSession);
        } else if (typeof continueSession === 'number') {
            UXCam.allowShortBreakForAnotherAppInMillis(continueSession);
        } else {
            UXCam.allowShortBreakForAnotherApp(true);
        }
    }

    /**
     *  @brief Resume after short break. Only used in android, does nothing on iOS
     */
    static resumeShortBreakForAnotherApp() {
        UXCam.allowShortBreakForAnotherApp(false);
    }

    /**
     *  Get whether UXCam is set to automatically record a new session when the app resumes from the background
    */
    static getMultiSessionRecord() {
        return UXCam.getMultiSessionRecord();
    }

    /**
     *  Set whether to record multiple sessions or not
     *
     *  @parameter multiSessionRecord `true` to record a new session automatically when the device comes out of the background. If `false` then a single session is recorded, when stopped (either programmatically with `stopApplicationAndUploadData` or by the app going to the background) then no more sessions are recorded until `startWithKey` is called again).
     *  @note The default setting is to record a new session each time a device comes out of the background. This flag can be set to `false` to stop that. You can also set this with the appropriate startWithKey: variant. (This will be reset each time startWithKey is called)
    */
    static setMultiSessionRecord(multiSessionRecord) {
        UXCam.setMultiSessionRecord(multiSessionRecord);
    }

    /**
     *  @brief Deletes any sessions that are awaiting upload
     *  @note Advanced use only. This is not needed for most developers. This can't be called until UXCam startWithKey: has completed
     */
    static deletePendingUploads() {
        UXCam.deletePendingUploads();
    }

    /**
     *  @brief Returns how many sessions are waiting to be uploaded
     *
     *  Sessions can be in the Pending state if UXCam was unable to upload them at the end of the last session. Normally they will be sent at the end of the next session.
     */
    static pendingSessionCount() {
        return UXCam.pendingSessionCount();
    }

    /**
     *  @brief IOS only. Uploads sessions that were pending to be uploaded
     *
     *  Sessions can be in the Pending state if UXCam was unable to upload them at the end of the last session. Normally they will be sent at the end of the next session.
     */
    static uploadPendingSession() {
        return UXCam.uploadPendingSession();
    }
    
    /**
     * Hide a view that contains sensitive information or that you do not want recording on the screen video.
     *
     * @parameter sensitiveView The view to occlude in the screen recording
     */
    static occludeSensitiveView(sensitiveView){
        if (sensitiveView){
            UXCam.occludeSensitiveView(sensitiveView.nativeView);
        }
    }

    /**
     * Stop hiding a view that was previously hidden
     * If the view passed in was not previously occluded then no action is taken and this method will just return
     *
     * @parameter sensitiveView The view to show again in the screen recording
     */
    static unOccludeSensitiveView(sensitiveView){
        if (sensitiveView){
            UXCam.unOccludeSensitiveView(sensitiveView.nativeView);
        }
    }

    /**
     * Hide a view that contains sensitive information or that you do not want recording on the screen video.
     *
     * @parameter sensitiveView The view to occlude in the screen recording
     */
    static occludeSensitiveViewWithoutGesture(sensitiveView){
        if (sensitiveView){
            UXCam.occludeSensitiveViewWithoutGesture(sensitiveView.nativeView);
        }
    }

    /**
        UXCam normally captures the view controller name automatically but in cases where it this is not sufficient (such as in OpenGL applications)
        or where you would like to set a different unique name, use this function to set the name.
    
        @note Call this in `[UIViewController viewDidAppear:]` after the call to `[super ...]` or automatic screen name tagging will override your value
    
        @parameter screenName Name to apply to the current screen in the session video
    */
    static tagScreenName(screenName) {
        UXCam.tagScreenName(screenName);
    }

    /**
        Enable / disable the automatic tagging of screen names
        
        @note By default UXCam will tag new screen names automatically. You can override this using the `tagScreenName` method or use this method to disable the automatic tagging.
    
        @parameters autoScreenTagging Set to `true` to enable automatic screen name tagging (the default) or `false` to disable it
    */
    static setAutomaticScreenNameTagging(autoScreenTagging) {
        UXCam.setAutomaticScreenNameTagging(autoScreenTagging);
    }

    /**
        Add a name to the list of screens names that wont be added to the timeline in automatic screen name tagging mode
    
        This will not impact gesture or action recording - just that the timeline on the dashboard will not contain an entry for this screen name if it appears after this call.
        Use this if you have view controllers that are presented but which are not primary user interaction screens to make your dashboard timeline easier to understand.
    
        @param screenName A name to add to the list of screens to ignore
    
        @note This is a convenience method for `addScreenNamesToIgnore([nameToIgnore])`
    */
    static addScreenNameToIgnore(screenName){
        UXCam.addScreenNameToIgnore(screenName);
    }
    
    /**
        Add a list of names to the list of screens names that wont be added to the timeline in automatic screen name tagging mode
    
        This will not impact gesture or action recording - just that the timeline on the dashboard will not contain an entry for any of the screens in this list encountered after this call.
        Use this if you have view controllers that are presented but which are not primary user interaction screens to make your dashboard timeline easier to understand.
    
        @param screenNames A list of screen names to add to the ignore list
    */
    static addScreenNamesToIgnore(screenNames){
        UXCam.addScreenNamesToIgnore(screenNames);
    }

    /**
        Remove the a name from the list of screens to be ignored in automatic screen name tagging mode
        @param screenName The name to remove from the list of ignored screens
        @note This is a convenience method for `removeScreenNamesToIgnore([nameToRemove])`
    */
    static removeScreenNameToIgnore(screenName){
        UXCam.removeScreenNameToIgnore(screenName);
    }
    
    /**
        Remove the a list of names from the list of screens to be ignored in automatic screen name tagging mode
    
        @param screenNames A list of names to remove from the ignore list
    */
    static removeScreenNamesToIgnore(screenNames){
        UXCam.removeScreenNamesToIgnore(screenNames);
    }
    
    // Remove all entries from the list of screen names to be ignored in automatic screen name tagging mode
    static removeAllScreenNamesToIgnore(){
        UXCam.removeAllScreenNamesToIgnore();
    }

    // Get the list of screen names that are being ignored in automatic screen name tagging mode
    static screenNamesBeingIgnored(){
        return UXCam.screenNamesBeingIgnored();
    }

    /**
        Set the token to be used to send push notifications to the app
        @param token Push notification token
    */
    static setPushNotificationToken(token){
        UXCam.setPushNotificationToken(token);
    }

    /** 
        Send a report of a problem your app encountered to be displayed in the dashboard
        @param eventName Name of the problem event
        @param properties Properties object associated with the event
        @note Only number and string property types are supported to a maximum count of 100 and maximum size per entry of 1KiB
    */
    static reportBugEvent(eventName, properties){
        if(typeof properties !== "undefined" || properties !== null){
            UXCam.reportBugEvent(eventName, properties);
        }else{
            UXCam.reportBugEvent(eventName);
        }
    }

    /** 
        Enable/Disable advanced gesture recognition like swipe and pinch gestures.
        @param enable Set `true` to enable or `false` to disable before `startWithKey`. Default is `true`.
        @note Disable this on iOS if you are having problems with swipes or other gestures being interrupted while recording sessions.
    */
    static enableAdvancedGestureRecognizers(enable){
        UXCam.enableAdvancedGestureRecognizers(enable);
    }
}