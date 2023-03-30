import { Then, Given, When, when, and, And } from 'cypress-cucumber-preprocessor/steps'
import {registrasi} from '../locator/registrasi_element'
const data = require('../../fixtures/seed_data/credential.json');

const registrasiLocator = new registrasi();

Given('User go to Web bukalapak', () => {
  cy.visit(Cypress.env('BUKALAPAK_URL'))
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })  
})

When('User click registration button', () => {
  cy.get(registrasiLocator.regisButton).click();
})

And('User Input phone number', () => {
  cy.get(registrasiLocator.phoneNumber).type(data.userPhoneNumber)
})

And('User validate registration page', function() {
  cy.get(registrasiLocator.registrationButton).should('be.visible')
  cy.contains(registrasiLocator.facebookButton).should('be.visible')
  cy.contains(registrasiLocator.googleButton).should('be.visible')
})
