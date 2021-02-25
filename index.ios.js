
export class NSUXCam {
    static startWithKey(apiKey) {
        UXCam.startWithKey(apiKey);
    }

    static startNewSession() {
        UXCam.startNewSession();
    }

    static stopSessionAndUploadData() {
        UXCam.stopSessionAndUploadData();
    }

    static urlForCurrentSession() {
		return UXCam.urlForCurrentSession();
    }

    static urlForCurrentUser() {
        return UXCam.urlForCurrentUser();
    }

    static occludeSensitiveScreen(hideScreen, hideGesture) {
        if (hideGesture) {
            UXCam.occludeSensitiveScreenHideGestures(hideScreen, hideGesture);
        }
        else {
            UXCam.occludeSensitiveScreen(hideScreen);
        }
        
    }

    static occludeAllTextFields(occludeAll) {
        UXCam.occludeAllTextFields(occludeAll);
    }

    static setUserIdentity(userIdentity) {
        UXCam.setUserIdentity(userIdentity);
    }

    static setUserProperty(propertyName, value) {
        UXCam.setUserPropertyValue(propertyName, value);
    }

    static setSessionProperty(propertyName, value) {
        UXCam.setSessionPropertyValue(propertyName, value);
    }

    static logEvent(eventName) {
        UXCam.logEvent(eventName)
    }

    static logEventWithProperties(eventName, properties){
        UXCam.logEventWithProperties(eventName, properties)
    }

    static isRecording() {
        return UXCam.isRecording();
    }

    static pauseScreenRecording() {
        UXCam.pauseScreenRecording();
    }

    static resumeScreenRecording() {
        UXCam.resumeScreenRecording();
    }

    static optOutOverall() {
        UXCam.optOutOverall();
    }

    static optOutOfSchematicRecordings() {
        UXCam.optOutOfSchematicRecordings();
    }

    static optInOverall() {
        UXCam.optInOverall();
    }

    static optIntoSchematicRecordings() {
        UXCam.optIntoSchematicRecordings();
    }

    static optIntoVideoRecording() {
        UXCam.optIntoSchematicRecordings();
    }

    static optOutOfVideoRecording() {
        UXCam.optOutOfSchematicRecordings();
    }

    static optInVideoRecordingStatus(){
        return UXCam.optInSchematicRecordingStatus();
    }

    static optInOverallStatus() {
        return UXCam.optInOverallStatus();
    }

    static optInSchematicRecordingStatus() {
        return UXCam.optInSchematicRecordingStatus();
    }

    static cancelCurrentSession() {
        UXCam.cancelCurrentSession();
    }

    static allowShortBreakForAnotherApp(continueSession) {
        UXCam.allowShortBreakForAnotherApp(continueSession);
    }

    static getMultiSessionRecord() {
        return UXCam.getMultiSessionRecord();
    }

    static setMultiSessionRecord(multiSessionRecord) {
        UXCam.setMultiSessionRecord(multiSessionRecord);
    }

    static deletePendingUploads() {
        UXCam.deletePendingUploads();
    }

    static pendingSessionCount() {
        return UXCam.pendingUploads();
    }

    static uploadPendingSession() {
        UXCam.uploadingPendingSessions(null);
    }

    static occludeSensitiveView(sensitiveView){
        if (sensitiveView){
            UXCam.occludeSensitiveView(sensitiveView.nativeView);
        }
    }

    static unOccludeSensitiveView(sensitiveView){
        if (sensitiveView){
            UXCam.unOccludeSensitiveView(sensitiveView.nativeView);
        }
    }
    
    static occludeSensitiveViewWithoutGesture(sensitiveView){
        if (sensitiveView){
            UXCam.occludeSensitiveViewWithoutGesture(sensitiveView.nativeView);
        }
    }

    static tagScreenName(screenName) {
        UXCam.tagScreenName(screenName);
    }

    static setAutomaticScreenNameTagging(autoScreenTagging) {
        UXCam.setAutomaticScreenNameTagging(autoScreenTagging);
    }

    static addScreenNameToIgnore(screenName){
        UXCam.addScreenNameToIgnore(screenName);
    }

    static addScreenNamesToIgnore(screenName){
        UXCam.addScreenNamesToIgnore(screenName);
    }

    static removeScreenNameToIgnore(screenName){
        UXCam.removeScreenNameToIgnore(screenName);
    }

    static removeScreenNamesToIgnore(screenName){
        UXCam.removeScreenNamesToIgnore(screenName);
    }

    static removeAllScreenNamesToIgnore() {
        UXCam.removeAllScreenNamesToIgnore();
    }

    static screenNamesBeingIgnored() {
        return UXCam.screenNamesBeingIgnored();
    }

    static setPushNotificationToken(pushToken) {
        UXCam.setPushNotificationToken(pushToken);
    }

    static reportBugEvent(eventName) {
        UXCam.reportBugEventProperties(eventName, null);
    }

    static reportBugEventProperties(eventName, properties) {
        UXCam.reportBugEventProperties(eventName, properties);
    }
}