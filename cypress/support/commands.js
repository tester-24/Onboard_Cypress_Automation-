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
    Cypress.on('uncaught:exception', (err) => {
      // returning false here prevents Cypress from
      // failing the test
      console.log('Cypress detected uncaught exception: ', err);
      return false;
    }); 

    cy.wait(1000)
    cy.get('.login-space-btn').click({force:true})
    cy.wait(4000)
    // enter the user id
    cy.xpath('/html[1]/body[1]/app-root[1]/app-sign-in[1]/div[1]/div[1]/div[2]/div[1]/form[1]/div[1]/kendo-textbox[1]/input[1]').type(539)
    //click on continue button
    cy.xpath('/html/body/app-root/app-sign-in/div/div/div[2]/div/form/button[1]').click()
    //enter the password
    cy.xpath('/html/body/app-root/app-sign-in/div/div/div[2]/app-sign-in-with-username/form/div/div/div/div/kendo-textbox/input').type('Twin@123')
   // click on submit button
   cy.xpath('/html/body/app-root/app-sign-in/div/div/div[2]/app-sign-in-with-username/form/div/button').click()
   cy.wait(1000)
    cy.get('[tabindex="1"]').type(1)
    cy.get('[tabindex="2"]').type(2)
    cy.get('[tabindex="3"]').type(3)
    cy.get('[tabindex="4"]').type(4)
    // click on onboard logo
    cy.wait(2000)
    cy.xpath('/html/body/app-layout/app-dashboard/section/div/div/div/div/a[1]').invoke("removeAttr", "target") // Remove target="_blank" to avoid opening a new tab
    .click({timeout:3000});        
    //click on pending
       cy.wait(1000)
       cy.get('.marg > .col-8 > .row > :nth-child(2) > a > .card > .card-body').click({force:true})
 
});
Cypress.Commands.add('Loginflow1',() => {

   //require('cypress-xpath');
   
   //Cypress.Commands.add('LoginOnboard', (Username,password) => {
         
      // const user = Username || Cypress.env('Username');
       //const pass = password || Cypress.env('password');
       
       cy.viewport(1750,1000)
       cy.visit('https://onboard.jainam.in/account/clientsurcgenerated')
       Cypress.on('uncaught:exception', (err) => {
         // returning false here prevents Cypress from
         // failing the test
         console.log('Cypress detected uncaught exception: ', err);
         return false;
       }); 
        
       cy.wait(1000)
       cy.get('.login-space-btn').click({force:true})
       cy.wait(1000)
        // enter the user id
    cy.xpath('/html[1]/body[1]/app-root[1]/app-sign-in[1]/div[1]/div[1]/div[2]/div[1]/form[1]/div[1]/kendo-textbox[1]/input[1]').type(539)
    //click on continue button
    cy.xpath('/html/body/app-root/app-sign-in/div/div/div[2]/div/form/button[1]').click()
    //enter the password
    cy.xpath('/html/body/app-root/app-sign-in/div/div/div[2]/app-sign-in-with-username/form/div/div/div/div/kendo-textbox/input').type('Twin@123')
   // click on submit button
   cy.xpath('/html/body/app-root/app-sign-in/div/div/div[2]/app-sign-in-with-username/form/div/button').click()
   cy.wait(1000)
    cy.get('[tabindex="1"]').type(1)
    cy.get('[tabindex="2"]').type(2)
    cy.get('[tabindex="3"]').type(3)
    cy.get('[tabindex="4"]').type(4)
    // click on onboard logo
    cy.wait(2000)
    cy.xpath('/html/body/app-layout/app-dashboard/section/div/div/div/div/a[1]').invoke("removeAttr", "target") // Remove target="_blank" to avoid opening a new tab
    .click({timeout:3000});           
    //click on UNDERVERIFICATION
          cy.wait(1000)
          cy.get(':nth-child(3) > a > .card > .card-body').click({force:true})
    
   });
   Cypress.Commands.add('Loginflow2',() => {

      //require('cypress-xpath');
      
      //Cypress.Commands.add('LoginOnboard', (Username,password) => {
            
         // const user = Username || Cypress.env('Username');
          //const pass = password || Cypress.env('password');
          
          cy.viewport(1750,1000)
          cy.visit('https://onboard.jainam.in/account/clientsurcgenerated')
          Cypress.on('uncaught:exception', (err) => {
            // returning false here prevents Cypress from
            // failing the test
            console.log('Cypress detected uncaught exception: ', err);
            return false;
          }); 
              
          cy.wait(1000)
          cy.get('.login-space-btn').click({force:true})
          cy.wait(1500)
           // enter the user id
    cy.xpath('/html[1]/body[1]/app-root[1]/app-sign-in[1]/div[1]/div[1]/div[2]/div[1]/form[1]/div[1]/kendo-textbox[1]/input[1]').type(539)
    //click on continue button
    cy.xpath('/html/body/app-root/app-sign-in/div/div/div[2]/div/form/button[1]').click()
    //enter the password
    cy.xpath('/html/body/app-root/app-sign-in/div/div/div[2]/app-sign-in-with-username/form/div/div/div/div/kendo-textbox/input').type('Twin@123')
   // click on submit button
   cy.xpath('/html/body/app-root/app-sign-in/div/div/div[2]/app-sign-in-with-username/form/div/button').click()
   cy.wait(1000)
    cy.get('[tabindex="1"]').type(1)
    cy.get('[tabindex="2"]').type(2)
    cy.get('[tabindex="3"]').type(3)
    cy.get('[tabindex="4"]').type(4)
    // click on onboard logo
    cy.wait(2000)
    cy.xpath('/html/body/app-layout/app-dashboard/section/div/div/div/div/a[1]').invoke("removeAttr", "target") // Remove target="_blank" to avoid opening a new tab
    .click({timeout:3000});        
             //click on STATUS
             cy.wait(3000)
             cy.get(':nth-child(4) > a > .card > .card-body').click({force:true})
      });
      Cypress.Commands.add('CheckerDashboard2',() => {

         //require('cypress-xpath');
         
         //Cypress.Commands.add('LoginOnboard', (Username,password) => {
               
            // const user = Username || Cypress.env('Username');
             //const pass = password || Cypress.env('password');
             
            // cy.viewport(1750,1000)
             cy.visit('https://onboard.jainam.in/account/clientsurcgenerated')
             Cypress.on('uncaught:exception', (err) => {
               // returning false here prevents Cypress from
               // failing the test
               console.log('Cypress detected uncaught exception: ', err);
               return false;
             }); 
                 
             cy.wait(1000)
             cy.get('.login-space-btn').click({force:true})
             cy.wait(1500)
              // enter the user id
    cy.xpath('/html[1]/body[1]/app-root[1]/app-sign-in[1]/div[1]/div[1]/div[2]/div[1]/form[1]/div[1]/kendo-textbox[1]/input[1]').type(539)
    //click on continue button
    cy.xpath('/html/body/app-root/app-sign-in/div/div/div[2]/div/form/button[1]').click()
    //enter the password
    cy.xpath('/html/body/app-root/app-sign-in/div/div/div[2]/app-sign-in-with-username/form/div/div/div/div/kendo-textbox/input').type('Twin@123')
   // click on submit button
   cy.xpath('/html/body/app-root/app-sign-in/div/div/div[2]/app-sign-in-with-username/form/div/button').click()
   cy.wait(1000)
    cy.get('[tabindex="1"]').type(1)
    cy.get('[tabindex="2"]').type(2)
    cy.get('[tabindex="3"]').type(3)
    cy.get('[tabindex="4"]').type(4)
    // click on onboard logo
    cy.wait(2000)
    cy.xpath('/html/body/app-layout/app-dashboard/section/div/div/div/div/a[1]').invoke("removeAttr", "target") // Remove target="_blank" to avoid opening a new tab
    .click({timeout:3000});        
                //click Checker Dashboard
                cy.wait(3000)
                cy.get(':nth-child(2) > [style="justify-content: center;"] > .col-8 > .row > :nth-child(1) > a > .card > .card-body').click()
                // click on assign total clients
                cy.get(':nth-child(2) > a > .card > .card-body').click() 
               });
               Cypress.Commands.add('CheckerDashboard3',() => {

                  //require('cypress-xpath');
                  
                  //Cypress.Commands.add('LoginOnboard', (Username,password) => {
                        
                     // const user = Username || Cypress.env('Username');
                      //const pass = password || Cypress.env('password');
                      
                     // cy.viewport(1750,1000)
                      cy.visit('https://onboard.jainam.in/account/clientsurcgenerated')
                      Cypress.on('uncaught:exception', (err) => {
                        // returning false here prevents Cypress from
                        // failing the test
                        console.log('Cypress detected uncaught exception: ', err);
                        return false;
                      }); 
                          
                      cy.wait(1000)
                      cy.get('.login-space-btn').click({force:true})
                      cy.wait(1500)
                       // enter the user id
    cy.xpath('/html[1]/body[1]/app-root[1]/app-sign-in[1]/div[1]/div[1]/div[2]/div[1]/form[1]/div[1]/kendo-textbox[1]/input[1]').type(539)
    //click on continue button
    cy.xpath('/html/body/app-root/app-sign-in/div/div/div[2]/div/form/button[1]').click()
    //enter the password
    cy.xpath('/html/body/app-root/app-sign-in/div/div/div[2]/app-sign-in-with-username/form/div/div/div/div/kendo-textbox/input').type('Twin@123')
   // click on submit button
   cy.xpath('/html/body/app-root/app-sign-in/div/div/div[2]/app-sign-in-with-username/form/div/button').click()
   cy.wait(1000)
    cy.get('[tabindex="1"]').type(1)
    cy.get('[tabindex="2"]').type(2)
    cy.get('[tabindex="3"]').type(3)
    cy.get('[tabindex="4"]').type(4)
    // click on onboard logo
    cy.wait(2000)
    cy.xpath('/html/body/app-layout/app-dashboard/section/div/div/div/div/a[1]').invoke("removeAttr", "target") // Remove target="_blank" to avoid opening a new tab
    .click({timeout:3000});        
                         //click Checker Dashboard
                         cy.wait(3000)
                         cy.get(':nth-child(2) > [style="justify-content: center;"] > .col-8 > .row > :nth-child(1) > a > .card > .card-body').click()
                         // click on underverification clients 
                         cy.get(':nth-child(3) > a > .card > .card-body').click() 
                        });
                        Cypress.Commands.add('CheckerDashboard4',() => {

                           //require('cypress-xpath');
                           
                           //Cypress.Commands.add('LoginOnboard', (Username,password) => {
                                 
                              // const user = Username || Cypress.env('Username');
                               //const pass = password || Cypress.env('password');
                               
                              // cy.viewport(1750,1000)
                               cy.visit('https://onboard.jainam.in/account/clientsurcgenerated')
                               Cypress.on('uncaught:exception', (err) => {
                                 // returning false here prevents Cypress from
                                 // failing the test
                                 console.log('Cypress detected uncaught exception: ', err);
                                 return false;
                               }); 
                                   
                               cy.wait(1000)
                               cy.get('.login-space-btn').click({force:true})
                               cy.wait(1500)
                                // enter the user id
    cy.xpath('/html[1]/body[1]/app-root[1]/app-sign-in[1]/div[1]/div[1]/div[2]/div[1]/form[1]/div[1]/kendo-textbox[1]/input[1]').type(539)
    //click on continue button
    cy.xpath('/html/body/app-root/app-sign-in/div/div/div[2]/div/form/button[1]').click()
    //enter the password
    cy.xpath('/html/body/app-root/app-sign-in/div/div/div[2]/app-sign-in-with-username/form/div/div/div/div/kendo-textbox/input').type('Twin@123')
   // click on submit button
   cy.xpath('/html/body/app-root/app-sign-in/div/div/div[2]/app-sign-in-with-username/form/div/button').click()
   cy.wait(1000)
    cy.get('[tabindex="1"]').type(1)
    cy.get('[tabindex="2"]').type(2)
    cy.get('[tabindex="3"]').type(3)
    cy.get('[tabindex="4"]').type(4)
    // click on onboard logo
    cy.wait(2000)
    cy.xpath('/html/body/app-layout/app-dashboard/section/div/div/div/div/a[1]').invoke("removeAttr", "target") // Remove target="_blank" to avoid opening a new tab
    .click({timeout:3000});        
                                  //click Checker Dashboard
                                  cy.wait(3000)
                                  cy.get(':nth-child(2) > [style="justify-content: center;"] > .col-8 > .row > :nth-child(1) > a > .card > .card-body').click()
                                  // click on Assigned accepted  clients 
                                  cy.get(':nth-child(4) > a > .card > .card-body').click() 
                                 });

                                 Cypress.Commands.add('Logout',() => {
                                     //click on user icon for logout process
                                     cy.xpath('/html/body/app-root/app-dashboard/app-header/ul[2]/li[3]/div/a/div').click({force:true})
                                     cy.wait(1000)
                                     //click on logout 
                                     cy.xpath('/html/body/app-root/app-dashboard/app-header/ul[2]/li[3]/div/div/div/div[2]/ul/li[4]/a').click({force:true})
                                
                                 })
