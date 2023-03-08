const { config } = require('./main.conf')
const path = require('path');

config.capabilities = [{
    platformName: "ios",
    deviceName: "iPhone 13 Pro",
    automationName: "XCUITest",
    app: path.join(process.cwd(), './apps/iOS.Simulator.SauceLabs.Mobile.Sample.app'),
    appWaitActivity: 'com.swaglabsmobileapp.MainActivity',
}]

exports.config = config

