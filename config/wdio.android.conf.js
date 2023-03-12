const path = require('path');
const { config } = require('./wdio.shared.conf');

// ====================
// Runner Configuration
// ====================
//
config.port = 4723;

//
// ============
// Specs
// ============
config.specs = [
  // path.join(process.cwd(), './test/specs/android/webview*.js')
];

//
// ============
// Capabilities
// ============
config.capabilities = [
  {
    "appium:platformName": "Android",
    "appium:deviceName": "android-smoke-dev",
    "appium:automationName": "UIAutomator2",
    "appium:app": path.join(process.cwd(), "./apps/Android.SauceLabs.Mobile.Sample.app.2.7.1.apk"),
    "appium:appWaitActivity": 'com.swaglabsmobileapp.MainActivity'
    // "appium:autoGrantPermissions": true
  }
]

exports.config = config;
