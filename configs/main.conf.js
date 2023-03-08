export const config = {
    runner: 'local',
    specs: [
        '../test/specs/**.js'
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 1,
    logLevel: 'info',
    bail: 0,
    port: 4723,
    path: '/wd/hub',
    waitforTimeout: 45000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    logPath: './logs',
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        require: ['@babel/register'],
        timeout: 60000
    },
    sync:true
}
