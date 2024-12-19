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
import './commands'; // Make sure this line exists

Cypress.Commands.add('Loginflow',() => {

//require('cypress-xpath');

//Cypress.Commands.add('LoginOnboard', (Username,password) => {
      
   // const user = Username || Cypress.env('Username');
    //const pass = password || Cypress.env('password');
    
    cy.viewport(1750,1000)
    cy.visit('https://onboard.jainam.in/account/clientsurcgenerated')
    
    cy.wait(1000)
    cy.get('.login-space-btn').click({force:true})
    cy.wait(1000)
    cy.get('.userid_wrap > .input_wrap > .text_form').type(539)
    cy.get('#LoginPassword').type('Twinkle@07')
    cy.wait(1000)
    cy.get('.login_button_wrap').click({ force: true });
    cy.wait(1000)
    cy.get('[tabindex="1"]').type(1)
    cy.get('[tabindex="2"]').type(2)
    cy.get('[tabindex="3"]').type(3)
    cy.get('[tabindex="4"]').type(4)
       // click on Reports
       //cy.visit('https://onboard.jainam.in/RedirectToOnboard?RbGekQCZ+nGsouhmb3riPP5ZM1GgxMb2g60HOuU04IRIoZo63+ac2+VA8Fne2INy6JN5kNBPTB6QGDBYtwK/sCj/cwlqoTQHDXTp61EkC4PO4sAOQYInQDv1dIm+h+EwFbJNFA9vKZsw2qX5dwKvcCOStWmYODjUqwuMpZzB4k0=')
      // cy.visit('https://onboard.jainam.in/RedirectToOnboard?RbGekQCZ+nGsouhmb3riPP5ZM1GgxMb2g60HOuU04IRIoZo63+ac2+VA8Fne2INy6JN5kNBPTB6QGDBYtwK/sCj/cwlqoTQHDXTp61EkC4OvLJ/GGYImty2I+BTj4u51wMNRZRUot5UOVyVr6Ib1Prf83g17nXcyR7QMNLuE2EU=')
       //click on pending
       cy.wait(500)
       cy.get('.marg > .col-8 > .row > :nth-child(2) > a > .card > .card-body').click()
 
});
