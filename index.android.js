var UXCam = com.uxcam.UXCam

//v6
// const applicationModule = require("tns-core-modules/application");

//v7 and v6.2+
const applicationModule = require("@nativescript/core/application");

export class NSUXCam {
    static startWithKey(apiKey) {
        if (UXCam){
            var context = applicationModule.android.startActivity;
            if (context){
                UXCam.startApplicationWithKeyForCordova(context, apiKey);
            }else{
                console.log("UXCam: Cannot get application context");
            }
        }else{
            console.log("UXCam: Cannot find UXCam package");
        }
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
            UXCam.occludeSensitiveScreen(hideScreen, hideGesture);
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
        UXCam.setUserProperty(propertyName, value);
    }

    static setSessionProperty(propertyName, value) {
        UXCam.setSessionProperty(propertyName, value);
    }

    static logEvent(eventName) {
        UXCam.logEvent(eventName);
    }

    static logEventWithProperties(eventName, properties){
        var androidProps = new org.json.JSONObject();
                    for (var key in properties) {
                        androidProps.put(key + "", properties[key] + "");
                    }
        UXCam.logEvent(eventName, androidProps)
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
        // IOS only API - Placeholder function
    }

    static optInOverall() {
        UXCam.optInOverall();
    }

    static optIntoSchematicRecordings() {
        // IOS only API - Placeholder function
    }

    static optInOverallStatus() {
        return UXCam.optInOverallStatus();
    }

    static optInSchematicRecordingStatus() {
        return false;
        // IOS only API - Placeholder function
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
        return UXCam.pendingSessionCount();
    }

    static uploadPendingSession() {
        // IOS only API - Placeholder function
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
        UXCam.reportBugEvent(eventName);
    }

    static reportBugEventProperties(eventName, properties) {
        var androidProps = new org.json.JSONObject();
                    for (var key in properties) {
                        androidProps.put(key + "", properties[key] + "");
                    }
        UXCam.reportBugEvent(eventName, androidProps)
    }
}