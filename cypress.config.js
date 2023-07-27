const { defineConfig } = require("cypress");
const fs = require('fs-extra');
const path = require('path');


//copied from https://docs.cypress.io/api/plugins/configuration-api#Switch-between-multiple-configuration-files
//but changed a bit
function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('cypress\\config', `${file}.json`);
  if(!fs.existsSync(pathToConfigFile)){
     console.log("No custom config file found.");
     return {};
  }
  return fs.readJson(pathToConfigFile);
}

module.exports = defineConfig({
  projectId: 'zq7k1d',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      const file = config.env.configFile || '' //changed

      return getConfigurationByFile(file)  
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
    video: false,
    videoUploadOnPasses: false,
    viewportHeight: 1080,
    viewportWidth: 1920,
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
      configFile: 'reporter-config.json'
  },
    retries: {
    runMode: 0, //kada runujemo preko terminala
    openMode: 0   //kada koristimo cypress app, 1 znaci da ce da pokusa jos jednom
    },
    env: {
      first_name: "Milka",
      webdriveruni_homepage: "http://www.webdriveruniversity.com"

    }
    
  
  },
});
