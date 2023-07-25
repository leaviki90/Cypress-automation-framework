const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'zq7k1d',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    //excludeSpecPattern: "cypress/e2e/other/*.js",
    baseUrl: 'http://www.webdriveruniversity.com',
    testIsolation: false,
    chromeWebSecurity: false,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 120000,
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    video: true,
    videoUploadOnPasses: true,
    viewportHeight: 1080,
    viewportWidth: 1920,
    env: {
      first_name: "Milka",
      webdriveruni_homepage: "http://www.webdriveruniversity.com"

    }
    
  
  },
});
