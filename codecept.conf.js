const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);
let envPath = 

exports.config = {
  tests: './testcase/test_*.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://localhost',
      show: true,
      windowSize: '1200x900',
      waitForNavigation: "networkidle0" // 针对 SPA 应用
    }
  },
  include: {
    I: './steps_file.js',
    ...require("dotenv").config({path: ".env"}),
    page: './pages'
  },
  /*
  * 你要在测试执行前，先执行的代码。你可以设置 bootstrap
  * 并行执行，可以设置 bootstrapAll
  * https://github.com/codeceptjs/CodeceptJS/wiki/Upgrading-to-CodeceptJS-3
  */
  bootstrap: require("./global.js"),
  bootstrapAll:require("./global.js"),
  mocha: {},
  name: 'uiautomation',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    },
    "allure": {
      enabled: true
    }
  }
}