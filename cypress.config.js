const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.amazon.com.br",
    setupNodeEvents() {
    },
    supportFile: "cypress/support/e2e.js", 
  },
});