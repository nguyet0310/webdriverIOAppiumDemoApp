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
config.specs = [];

//
// ============
// Capabilities
// ============
config.capabilities = [
  {
    "appium:platformName": "ios",
    "appium:deviceName": "iPhone 13 mini",
    "appium:platformVersion": "15.0",
    "appium:automationName": "XCUITest",
    "appium:app": path.join(process.cwd(), "apps/iOS.Simulator.SauceLabs.Mobile.Sample.app"),
    "appium:appWaitActivity": 'com.swaglabsmobileapp.MainActivity'
  }
]

exports.config = config;