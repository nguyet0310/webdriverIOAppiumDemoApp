# webdriverio-appium-course
- Setup Appium for your machine: 
    - Install homebrew if you are using mac: /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    - Install node by download and install from its site: https://nodejs.org/en/
    - After install succeesfully check by: `node --version`
    - Check npm version by: `npm --version`
    - Install appium 2.0 beta global: `npm install -g appium@next`
    - Install appium driver list, check driver list: `appium driver list`
    - To run iOs and Android, you need to install 2 drivers: `xcuites` and `uiautomator`
    - To install these two drivers, run these commands: `appium driver install xcuitest` and `appium driver install uiautomator2`
    - Install appium doctor to ensure everything is working: `npm install -g appium-doctor`
    - Check our installation by: `appium-doctor --ios` and `appium-doctor --android`
    - Install Xcode: If you plan to run iOS tests, install Xcode from the App Store.

    - Install Android SDK: If you plan to run Android tests, you'll need to install the Android SDK. You can download it from the official Android website. Once you've downloaded it, add the following to your ~/.bash_profile:
    - export ANDROID_HOME=$HOME/Library/Android/sdk
    - export PATH=$PATH:$ANDROID_HOME/tools
    - export PATH=$PATH:$ANDROID_HOME/platform-tools
    - run the following cmd on terminal: `source ~/.bash_profile`
    - you can launch Appium by running the following command in Terminal: `appium`
- Setup your Android simulator for Appium:
    - Install Android Studio: Download and install Android Studio from the official Android website.

    - Create an Android Virtual Device (AVD): Open Android Studio and click on "AVD Manager" from the toolbar or navigate to "Tools > AVD Manager". Click on "Create Virtual Device" and select the device configuration you want to emulate. Follow the prompts to create the AVD.

    - Start the AVD: Click on the "Play" button next to the AVD you created to start it.
    - Launch Appium: Run the following command in Terminal to launch Appium: `appium`
    - Configure Appium: In Appium, set the following capabilities:
        platformName: "Android"
        deviceName: The name of the device you created in AVD Manager.
        appPackage: The package name of the app you want to test.
        appActivity: The main activity of the app you want to test.
- Setup iOs simulator:
    - Install Xcode: Download and install Xcode from the App Store.
    - Launch Xcode: Open Xcode and go to "Preferences" from the "Xcode" menu.
    - Install the required components: Under the "Locations" tab in Preferences, make sure that the "Command Line Tools" are installed for your version of Xcode.
    - Install Appium: Follow the steps mentioned in the previous answer to install Appium.
    - Launch Appium: Run the following command in Terminal to launch Appium: `appium`
    - Configure Appium: In Appium, set the following capabilities:
    - platformName: "iOS"
    - deviceName: The name of the simulator you want to use.
    - platformVersion: The version of iOS you want to use.
    - app: The path to the .app or .ipa file of the app you want to test.
- How to run test on android simulator: `npm run android.local.test`
- How to run test on ios simulator: `npm run ios.local.test`
- How to run test with report: `npm run android.local.test --reporter mochawesome`

- How to run test on iOS real device:
    - Get testing app bundle id and you have account to test it with testflight
    - Sign Appium webdriver runner following this guide: `https://github.com/appium/appium-xcuitest-driver/blob/master/docs/real-device-config.md`
    - Set access right for developer in your device using this guide: `https://developer.apple.com/forums/thread/660288`
    - Run test with iOs read device with cmd: `npx wdio run config/wdio.ios.conf.js --spec config/wdio.ios.real.conf.js`