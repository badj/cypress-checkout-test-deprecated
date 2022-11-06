// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// Login Command - Logs user in and asserts signed in session

Cypress.Commands.add('logintoAutomationPractice', (email, password) => {
  cy.visit('/')
  cy.get('a.login').click()
  cy.get('#email').type(email)
  cy.get('#passwd').type(password)
  cy.get('#SubmitLogin').click()
  cy.wait(300)
  // Assertion to verify log in success - logged in state with a page element
  cy.get('a.logout').should('be.visible')
  // Assertions to verify log in success - logged in state with url
  cy.url().should('contain', '/index.php?controller=my-account')
  cy.screenshot()
})

// Search and select item Command - search for the skw and select a specific item and assert correct item selected

Cypress.Commands.add('searchandselect', (searchbar, searchitem, selectitem) => {
  cy.get(searchbar).type(searchitem+"{enter}")
  cy.wait(300)
  cy.screenshot()
  cy.get('#selectProductSort').select('Price: Lowest first')
  cy.wait(300)
  cy.screenshot()
  cy.contains(selectitem).click()
  cy.wait(300)
  cy.url().should('contain', '/index.php?id_product=7')
  cy.contains(selectitem)
  cy.contains('Data sheet')
  cy.screenshot()
 })

// Add to Cart Command - adds 2 of the item with specific size and colour and proceed to the checkout cart

Cypress.Commands.add('addtocartandproceedtocheckout', () => {
  cy.get('i.icon-plus').click()
  cy.get('input#quantity_wanted.text')
  cy.get('#group_1').select('M')
  cy.get('a#color_15.color_pick').click()
  cy.screenshot()
  cy.get('#add_to_cart').click()
  cy.wait(300)
  cy.contains('Proceed to checkout').click()
  cy.wait(300)
})

// Confirm the checkout cart Command: Asserts for 2 Medium Green correct selected Items with expected cart totalling $34.80

Cypress.Commands.add('confirmcartitemsoncheckout', (selectitem) => {
  cy.url().should('contain', '/index.php?controller=order')
  cy.contains('Your shopping cart contains: 2 Products')
  cy.contains(selectitem)
  cy.contains('Color : Green, Size : M')
  cy.get('td#total_price_container.price').contains('$34.80')
  cy.screenshot()
})
