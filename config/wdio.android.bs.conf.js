require('dotenv').config()
const { config } = require('./wdio.shared.conf');

//
// ============
// BrowserStack Credentials
// ============
config.user = process.env.BROWSERSTACK_USER;
config.key = process.env.BROWSERSTACK_KEY;

//
// ============
// Specs
// ============
// config.specs = [
//   path.join(process.cwd(), './test/specs/android/add-note-screen*.js')
// ];

//
// ============
// Capabilities
// ============
config.capabilities = [
  {
    platformName: "Android",
    "appium:platformVersion": "11.0",
    "appium:deviceName": "Google Pixel 3",
    "appium:automationName": "UIAutomator2",
    "appium:app": "bs://dd2659d47e9c9c118727640af199279ac84e5668",
    "appium:appWaitActivity": 'com.swaglabsmobileapp.MainActivity'
    // "appium:autoGrantPermissions": true
  }
]

//
// Test runner services
// Services take over a specific job you don't want to take care of. They enhance
// your test setup with almost no effort. Unlike plugins, they don't add new
// commands. Instead, they hook themselves up into the test process.
config.services = ['browserstack'];

exports.config = config;