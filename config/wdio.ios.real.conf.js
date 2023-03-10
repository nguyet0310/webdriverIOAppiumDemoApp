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
  path.join(process.cwd(), './test/specs/ios/webview*.js')
];

//
// ============
// Capabilities
// ============
config.capabilities = [
  {
    "appium:automationName": "XCUITest",
    "appium:platformName": "ios",
    "appium:udid": "your-devive-udid",
    "appium:bundleId": "your-app-bundle-id"
  }
]

exports.config = config;