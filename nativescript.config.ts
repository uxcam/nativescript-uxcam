import { NativeScriptConfig } from '@nativescript/core';

/**
 * UXCam iOS native dependency is integrated via Swift Package Manager (SPM).
 *
 * The NativeScript CLI merges this plugin-level `SPMPackages` config into the
 * consuming app at build time, from CLI 8.9.0 onward. On older CLIs this config
 * is silently ignored and `platforms/ios/Podfile` automatically falls back to
 * integrating UXCam via CocoaPods instead (it gates on the CLI version, since
 * the CLI — not @nativescript/core — is what performs the SPM merge).
 *
 * SPM package: https://github.com/uxcam/uxcam-ios-sdk
 */
export default {
  ios: {
    SPMPackages: [
      {
        name: 'UXCam',
        libs: ['UXCam'],
        repositoryURL: 'https://github.com/uxcam/uxcam-ios-sdk',
        version: '3.8.2',
      },
    ],
  },
} as NativeScriptConfig;
