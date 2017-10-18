import { browser, Config } from 'protractor';
import { reporter } from './helpers/reporter';

export const config: Config = {
  framework: 'jasmine',
  specs: ['../test/Google.spec.js'],
  noGlobals: true,
  SELENIUM_PROMISE_MANAGER: false,
  getPageTimeout: 30000,
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['--headless', '--disable-gpu', '--window-size=800,600']
    }
  },
  jasmineNodeOpts: {
        defaultTimeoutInterval: 120000
  },
  onPrepare: () => {
    browser.ignoreSynchronization = true;
    browser.manage().timeouts().implicitlyWait(3000)
    reporter();
  }
}
;
