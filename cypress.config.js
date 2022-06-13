const { defineConfig } = require("cypress");

module.exports = defineConfig({
  fixturesFolder: 'tests/cypress/fixtures',
  videosFolder: 'tests/cypress/videos',
  downloadsFolder: 'tests/cypress/downloads',
  screenshotsFolder: 'tests/cypress/screenshotsFolder',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    supportFile: 'tests/cypress/support/e2e.{js,jsx,ts,tsx}',
    specPattern: 'tests/cypress/e2e/**/*.cy.{js,jsx,ts,tsx}'
  },
});
