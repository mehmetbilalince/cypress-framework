const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "mm77sa",
  viewportHeight:1200,
  viewportWidth:1500,
  reporter:'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')
    },
    //baseUrl:"https://example.cypress.io/"
  },
  env:{
    hideXhr:true,
    amazon:"https://www.amazon.de",
    google:"https://www.google.com",
    saucedemo:"https://www.saucedemo.com"
  }
});
