const selector= require("../support/selectors.js")
const data = require("../fixtures/testdata.json")

describe('Automation Practice store - Add to cart journey - Checkout cart contains correct added item',
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
  it('Automation Practice store - Add to cart journey - The cheapest Printed Summer Dress searched item - Correct selected item added succesfully to the cart - With the correct Size M, Color Green, Quantity 2 and The cart price Totalling $34.80', () => {
     // Log in to the Automation practice app
     cy.logintoAutomationPractice(data.email,data.password)
     // Enter item search keyword in the search bar
     cy.searchandselect(selector.searchbar,data.searchitem, data.selectitem)
     // Add item to the cart and proceed to the checkout
     cy.addtocartandproceedtocheckout()
    // Confirm the added items on checkout cart
     cy.confirmcartitemsoncheckout(data.selectitem)
   })
 })
