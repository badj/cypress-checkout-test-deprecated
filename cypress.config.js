
module.exports = {

  reporter: 'cypress-mochawesome-reporter',
  video: true, // Set to false to diable video recording of the test run
  videoCompression: 40, // Disable for video not to be compressed and decrease to improve video quality
  reporterOptions: {
    reportDir: 'cypress/reports/result.html',
    charts: true,
    reportPageTitle: 'Cypress Test Result',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    experimentalSessionAndOrigin: true,
    baseUrl: "http://automationpractice.com/",
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    // Retry enabled globally - to retry all failing tests
    // Disable this and move to individual test or specs to enable retry per test or a spec only
    // This will retry a failed test twice when it failed
    retries: {
      "runMode": 2,
      "openMode": 0
    }
  },
}
