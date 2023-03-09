const path = require('path');
const { config } = require('./main.conf');

// ============
// Capabilities
// ============
config.capabilities = [
    {
        platformName: "Android",
        // deviceName: "Nexus 6p",
        deviceName: "android-smoke-dev",
        automationName: "UIAutomator2",
        app: path.join(process.cwd(), "./apps/Android.SauceLabs.Mobile.Sample.app.2.7.1.apk"),
        // autoGrantPermissions: true,
        appWaitActivity: 'com.swaglabsmobileapp.MainActivity',
    }
]

exports.config = config;