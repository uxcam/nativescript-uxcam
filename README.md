# NativeScript UXCam

## Installation

`tns plugin add nativescript-uxcam`

NB: UXCam on iOS needs a minimum version of iOS 12.0

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