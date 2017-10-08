import { browser, Config } from "";

export const config: Config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['../test/Google.spec.js'],
    noGlobals: true,
    onPrepare: () => {
        browser.ignoreSynchronization = true;
    }
}
