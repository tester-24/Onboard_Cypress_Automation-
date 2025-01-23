
/// <reference types="cypress"/>

describe('Onboard', () => {
    it('Status_Return', () => {
    cy.Loginflow2()
     cy.wait(3500)
      //click on Return
    cy.get(':nth-child(1) > :nth-child(4) > .slds-checkbox_button-group').click()
    // click on calender
     cy.wait(1000)
     cy.xpath('/html/body/app-root/app-dashboard/div/main/div/app-clientsdetails/div[2]/div/div[1]/div[2]/div[1]/div/label/kendo-daterange').click()
     cy.xpath('/html/body/app-root/app-dashboard/div/main/div/app-clientsdetails/div[2]/div/div[1]/div[2]/div[1]/div/label/kendo-daterange/kendo-dateinput[1]').clear().type("12/05/2023")
     cy.xpath('/html/body/app-root/app-dashboard/div/main/div/app-clientsdetails/div[2]/div/div[1]/div[2]/div[1]/div/label/kendo-daterange/kendo-dateinput[2]').clear().type("07/08/2024") 
     //click on all
     cy.get(':nth-child(3) > :nth-child(1) > .slds-checkbox_button-group').click({force:true})
     //click on 2nd all
     cy.get(':nth-child(4) > :nth-child(1) > .slds-checkbox_button-group').click({force:true})
     //click on 3rd all
     cy.get(':nth-child(5) > :nth-child(1) > .slds-checkbox_button-group').click({force:true})
     // validations for data
     cy.wait(1000)
     if(cy.xpath('/html/body/app-root/app-dashboard/div/main/div/app-clientsdetails/div[2]/div/div[2]/kendo-grid/div/kendo-grid-list/div').should('have.length.above',0))
     
     {
        cy.log('data found')
     }
     else
     {
        cy.log('Data not found')
     } 
     cy.Logout()   
    })

    it('Status_Return_AOF_EKYC_Today', () => {
      cy.Loginflow2()
       //click on Return
       cy.wait(3500)
     cy.get(':nth-child(1) > :nth-child(4) > .slds-checkbox_button-group').click({force:true})
       //click on calender
       cy.wait(1000)
       cy.xpath('/html/body/app-root/app-dashboard/div/main/div/app-clientsdetails/div[2]/div/div[1]/div[2]/div[1]/div/label/kendo-daterange').click({force:true})
       cy.xpath('/html/body/app-root/app-dashboard/div/main/div/app-clientsdetails/div[2]/div/div[1]/div[2]/div[1]/div/label/kendo-daterange/kendo-dateinput[1]').clear().type("12/05/2023")
       cy.xpath('/html/body/app-root/app-dashboard/div/main/div/app-clientsdetails/div[2]/div/div[1]/div[2]/div[1]/div/label/kendo-daterange/kendo-dateinput[2]').clear().type("07/08/2024") 
       //click on AOF
       cy.get(':nth-child(3) > :nth-child(2) > .slds-checkbox_button-group').click({force:true})
       //click on EKYC
       cy.get(':nth-child(4) > :nth-child(2) > .slds-checkbox_button-group').click({force:true})
       //click on TODAY
       cy.get(':nth-child(5) > :nth-child(2) > .slds-checkbox_button-group').click({force:true})
       // validations for data
       cy.wait(1000)
       if(cy.xpath('/html/body/app-root/app-dashboard/div/main/div/app-clientsdetails/div[2]/div/div[2]/kendo-grid/div/kendo-grid-list/div').should('have.length.above',0))
       
       {
          cy.log('data found')
       }
       else
       {
          cy.log('Data not found')
       }   
       cy.Logout() 
       })

       it('Status__Return_MOD_MANUAL_YESTERDAY', () => {
         cy.Loginflow2()
         //click on Return
         cy.wait(3500)
         cy.get(':nth-child(1) > :nth-child(4) > .slds-checkbox_button-group').click()
         //click on calender
         cy.wait(1000)
         cy.xpath('/html/body/app-root/app-dashboard/div/main/div/app-clientsdetails/div[2]/div/div[1]/div[2]/div[1]/div/label/kendo-daterange').click({force:true})
         cy.xpath('/html/body/app-root/app-dashboard/div/main/div/app-clientsdetails/div[2]/div/div[1]/div[2]/div[1]/div/label/kendo-daterange/kendo-dateinput[1]').clear().type("12/05/2023")
         cy.xpath('/html/body/app-root/app-dashboard/div/main/div/app-clientsdetails/div[2]/div/div[1]/div[2]/div[1]/div/label/kendo-daterange/kendo-dateinput[2]').clear().type("07/08/2024") 
        //click on MOD
        cy.get(':nth-child(3) > :nth-child(3) > .slds-checkbox_button-group').click({force:true})
        //click on MANUAL
        cy.get(':nth-child(4) > :nth-child(3) > .slds-checkbox_button-group').click({force:true})
        //click on YESTERDAY
        cy.get(':nth-child(5) > :nth-child(3) > .slds-checkbox_button-group').click({force:true})
        // validations for data
        if(cy.xpath('/html/body/app-root/app-dashboard/div/main/div/app-clientsdetails/div[2]/div/div[2]/kendo-grid/div/kendo-grid-list/div').should('have.length.above',0))
       
         {
            cy.log('data found')
         }
         else
         {
            cy.log('Data not found')
         } 
         cy.Logout()      
       })
       it('Status_Hold_DLLR_ALL_7DAYS', () => {
        cy.Loginflow2()
        //click on Return 
        cy.get(':nth-child(1) > :nth-child(4) > .slds-checkbox_button-group').click({force:true})
         //click on calender
         cy.wait(1000)
         cy.xpath('/html/body/app-root/app-dashboard/div/main/div/app-clientsdetails/div[2]/div/div[1]/div[2]/div[1]/div/label/kendo-daterange').click()
         cy.xpath('/html/body/app-root/app-dashboard/div/main/div/app-clientsdetails/div[2]/div/div[1]/div[2]/div[1]/div/label/kendo-daterange/kendo-dateinput[1]').clear().type("12/05/2023")
         cy.xpath('/html/body/app-root/app-dashboard/div/main/div/app-clientsdetails/div[2]/div/div[1]/div[2]/div[1]/div/label/kendo-daterange/kendo-dateinput[2]').clear().type("07/08/2024") 
         //click on DLLR
        cy.get(':nth-child(3) > :nth-child(4) > .slds-checkbox_button-group').click()
        //click on ALL
        cy.get(':nth-child(4) > :nth-child(1) > .slds-checkbox_button-group').click({force:true})
        //click on 7 DAYS
        cy.get(':nth-child(5) > :nth-child(4) > .slds-checkbox_button-group').click({force:true})
        // validations for data
        if(cy.xpath('/html/body/app-root/app-dashboard/div/main/div/app-clientsdetails/div[2]/div/div[2]/kendo-grid/div/kendo-grid-list/div').should('have.length.above',0))
       
         {
            cy.log('data found')
         }
         else
         {
            cy.log('Data not found')
         }  
         cy.Logout()   
       })
       it('Status_Hold_Duck_EKYC_30DAYS', () => {
         cy.Loginflow2()
         // click on Return
         cy.get(':nth-child(1) > :nth-child(3) > .slds-checkbox_button-group').click({force:true})
         //click on calender
         cy.wait(1000)
         cy.xpath('/html/body/app-root/app-dashboard/div/main/div/app-clientsdetails/div[2]/div/div[1]/div[2]/div[1]/div/label/kendo-daterange').click({force:true})
         cy.wait(500)
         cy.xpath('/html/body/app-root/app-dashboard/div/main/div/app-clientsdetails/div[2]/div/div[1]/div[2]/div[1]/div/label/kendo-daterange/kendo-dateinput[1]').clear().type("12/05/2023")
         cy.xpath('/html/body/app-root/app-dashboard/div/main/div/app-clientsdetails/div[2]/div/div[1]/div[2]/div[1]/div/label/kendo-daterange/kendo-dateinput[2]').clear().type("07/08/2024") 
         //click on DUCK
         cy.get(':nth-child(3) > :nth-child(5) > .slds-checkbox_button-group').click({force:true})
         //click on EKYC
         cy.get(':nth-child(4) > :nth-child(2) > .slds-checkbox_button-group').click({force:true})
         //click on 30 DAYS
         cy.get(':nth-child(5) > :nth-child(5) > .slds-checkbox_button-group').click({force:true})
         // validations for data
         if(cy.xpath('/html/body/app-root/app-dashboard/div/main/div/app-clientsdetails/div[2]/div/div[2]/kendo-grid/div/kendo-grid-list/div').should('have.length.above',0))
       
            {
               cy.log('data found')
            }
            else
            {
               cy.log('Data not found')
            }  
            cy.Logout()        
         })
         it('Satus_Hold_MTF_Manual_Yesterday', () => {
            cy.Loginflow2()
           // click on Hold 
           cy.get(':nth-child(1) > :nth-child(4) > .slds-checkbox_button-group').click({force:true})
           //click on calender
           cy.wait(1000)
           cy.xpath('/html/body/app-root/app-dashboard/div/main/div/app-clientsdetails/div[2]/div/div[1]/div[2]/div[1]/div/label/kendo-daterange').click({force:true})
           cy.wait(500)
           cy.xpath('/html/body/app-root/app-dashboard/div/main/div/app-clientsdetails/div[2]/div/div[1]/div[2]/div[1]/div/label/kendo-daterange/kendo-dateinput[1]').clear().type("12/05/2023")
           cy.wait(500)
           cy.xpath('/html/body/app-root/app-dashboard/div/main/div/app-clientsdetails/div[2]/div/div[1]/div[2]/div[1]/div/label/kendo-daterange/kendo-dateinput[2]').clear().type("07/08/2024") 
          //click on MTF
          cy.get('.all-border > :nth-child(3) > :nth-child(6)').click({force:true})
            //click on manual
          cy.get(':nth-child(4) > :nth-child(3) > .slds-checkbox_button-group').click({force:true})
            //click on yesterday
            cy.get(':nth-child(5) > :nth-child(3) > .slds-checkbox_button-group').click({force:true})
            // validations for data
            if(cy.xpath('/html/body/app-root/app-dashboard/div/main/div/app-clientsdetails/div[2]/div/div[2]/kendo-grid/div/kendo-grid-list/div').should('have.length.above',0))
       
               {
                  cy.log('data found')
               }
               else
               {
                  cy.log('Data not found')
               }      
               cy.Logout() 
            })
})
