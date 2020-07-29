import { Then, Given, When, when, and, And } from 'cypress-cucumber-preprocessor/steps'

const data = require('./../../fixtures/seed_data/credential.json');


const regisButton = '[href="/register?from=nav_header&comeback=https://www.bukalapak.com/"] > .pr-4';
const usernameField = '#user_name';
const emailField = '#email_or_phone';
const genderRadioButton = ':nth-child(1) > .c-inp__inner-lbl';
const bukalapakUserName = '#user_username';
const userPassword = '#user_password';
const reinputPassword = '#user_password_confirmation';
const bukalapakCheckbox = '.u-float-left.u-mrgn-top--3 > .checkbox';
const submitButton = '.btn';


Given('I go to Web bukalapak', () => {

  cy.visit(Cypress.env('BUKALAPAK_URL'))
    
      Cypress.on('uncaught:exception', (err, runnable) => {
          // returning false here prevents Cypress from
          // failing the test
          return false
        })  
    })

    When('I click registration button', () => {
      cy.get(regisButton).click();
     
    })

    And('I Input username', () => {
      cy.get(usernameField).type(data.userName)
       
      })

      And('I Input email', function() {
        cy.get(emailField).type(data.seedEmailField)
      })

      And('I Chose gender', function() {
        cy.get(genderRadioButton).click();
      })

      And('I Input bukalapak username', function() {
        cy.get(bukalapakUserName).type(data.bukalapakUser)
      })

      And('I Input password', function() {
        cy.get(userPassword).type(data.userPassword)
      })

      And('I reinput password', function() {
        cy.get(reinputPassword).type(data.userPassword)
      })

      And('I check checkbox', function() {
        cy.get(bukalapakCheckbox).click();
      })

      And('I submit button', function() {
        cy.get(submitButton).click();
      })
