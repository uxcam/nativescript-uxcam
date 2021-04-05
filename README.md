# NativeScript UXCam

## Installation

`tns plugin add nativescript-uxcam`

NB: UXCam on iOS needs a minimum version of iOS 10.0

## Usage

### Setup

```javascript
import {NSUXCam} from 'nativescript-uxcam';

NSUXCam.optIntoSchematicRecordings();
NSUXCam.startWithKey("<your-app-key>");
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

## API

API | Description
----|----
startWithKey | Start session with app key
startNewSession | Start new session
stopSessionAndUploadData | Stop current session and upload data
urlForCurrentSession | Get URL for current session
urlForCurrentUser | Get URL for current user
occludeSensitiveScreen | Hide/unhide screen while sensitive view is present
occludeAllTextFields | Hide all text input fields
setUserIdentity | Set user identity
setUserProperty | Set property for current user
logEvent | Log event
logEventWithProperties | Log event with properties
pauseScreenRecording | Pause the screen recording
resumeScreenRecording | Resume the screen recording
optOutOverall | This will cancel any current session recording and opt this device out of future session recordings
optInOverall | Current session will be stopped and a new session will be started with the last settings
optIntoVideoRecording | This will opt this device into video recording for future sessions
optOutOfVideoRecording | This will opt this device out of video recording for future sessions
optInVideoRecordingStatus | Returns the opt-in video status of this device
optInOverallStatus | Returns the opt-in status of this device
cancelCurrentSession | Cancels the recording of the current session and discards the data
setMultiSessionRecord | Set whether to record multiple sessions or not
deletePendingUploads | Deletes any sessions that are awaiting upload
pendingSessionCount | Returns how many sessions are waiting to be uploaded
occludeSensitiveView | Hide a view that contains sensitive information or that you do not want recording
unOccludeSensitiveView | Unhides occluded view
occludeSensitiveViewWithoutGesture | Occludes sensitive view and disables gesture capture for that view
tagScreenName | Tag screen name. Useful for framework like flutter, react native and nativescript, where application is rendered in single controller or activity
setAutomaticScreenNameTagging | Enable / disable the automatic tagging of screen names
setPushNotificationToken | Set the token to be used to send push notifications to the app
reportBugEvent | Send a report of a problem your app encountered to be displayed in the dashboard
reportBugEventProperties | Send bug event with associated properties
