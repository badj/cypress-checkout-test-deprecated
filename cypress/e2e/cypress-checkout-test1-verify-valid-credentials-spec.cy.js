const selector= require("../support/selectors.js")
const data = require("../fixtures/testdata.json")

describe('Automation Practice store Login - Verify valid login credentials to be used for all tests',
// Retry currently enabled globally - to retry all failing tests
// Disable globally in config and enable test retries support below to only retry for this spec or plug in per test
// This will retry a failed test twice when it failed
// {
//  retries: {
//    runMode: 2, // Will attempt a failed test twice
//    openMode: 1
//  }
//},
() => {
  it('Log into Automation Practice store to verify valid login credentials to be used for the cart journey test spec',  () => {
    // Login to Automation Practice App
    cy.logintoAutomationPractice(data.email,data.password)
  })
})
