// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/* 
// Custom commands normal kullanım
Cypress.Commands.add('login', (username, password) => {
    cy.visit('https://automationexercise.com/login')
        cy.get('input[data-qa="login-email"]').type('username')
        cy.get('input[data-qa="login-password"]').type('password')
        cy.get('button[data-qa="login-button"]').click()
})
*/

import 'cypress-file-upload'


// Custom commands ve page object model kullanım
import customCommandsLogin from "../pageObjectModel/customCommandsLogin"

Cypress.Commands.add('login', (username, password) => {
        customCommandsLogin.usernameField.type(username)
        customCommandsLogin.passwordField.type(password)
        customCommandsLogin.loginBtn.click()
})

//With Sessions
Cypress.Commands.add('loginWithSession',(username,password)=> {
      cy.session([username,password],()=>{
        cy.visit('https://write.as/')
        cy.contains('Log in').click()
        cy.get('input[name="alias"]').type(username)
        cy.get('input[name="pass"]').type(password)
        cy.get("input#btn-login").click()
      })
})