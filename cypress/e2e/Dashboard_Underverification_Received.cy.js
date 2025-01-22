
/// <reference types="cypress"/>

describe('Onboard', () => {
    it('Underverification_Received_All', () => {
     cy.Loginflow1()
     //click on received  
     cy.get('.col_wrap_first_cward > :nth-child(2) > .slds-checkbox_button-group').click()
     //click on calender
     cy.xpath('/html/body/app-root/app-dashboard/div/main/div/app-clientinwarddetails/div[2]/div/div[1]/div[2]/div[1]/div/label/kendo-daterange').click()
     cy.xpath('/html/body/app-root/app-dashboard/div/main/div/app-clientinwarddetails/div[2]/div/div[1]/div[2]/div[1]/div/label/kendo-daterange/kendo-dateinput[1]').clear().type("12/05/2023")
     cy.xpath('/html/body/app-root/app-dashboard/div/main/div/app-clientinwarddetails/div[2]/div/div[1]/div[2]/div[1]/div/label/kendo-daterange/kendo-dateinput[2]').clear().type("07/08/2024") 
     //click on all
     cy.get(':nth-child(3) > :nth-child(1) > .slds-checkbox_button-group').click()
     //click on 2nd all
     cy.get(':nth-child(4) > :nth-child(1) > .slds-checkbox_button-group').click()
     //click on 3rd all
     cy.get(':nth-child(5) > :nth-child(1) > .slds-checkbox_button-group').click()
     // validations for data
     if(cy.xpath('/html/body/app-root/app-dashboard/div/main/div/app-clientinwarddetails/div[2]/div/div[2]/kendo-grid/div/kendo-grid-list/div').should('have.length.above',0))
     
     {
        cy.log('data found')
     }
     else
     {
        cy.log('Data not found')
     }   //  cy.xpath('/html/body/app-root/app-dashboard/div/main/div/app-clientsurcgenerated/div[2]/div/div[1]/div[2]/div[1]/div/label/kendo-daterange').click()
    //  cy.xpath('/html/body/app-root/app-dashboard/div/main/div/app-clientsurcgenerated/div[2]/div/div[1]/div[2]/div[1]/div/label/kendo-daterange/kendo-dateinput[1]/span/input').clear().type("12/05/2023")
    //  // select second calender
    //  cy.xpath('/html/body/app-root/app-dashboard/div/main/div/app-clientsurcgenerated/div[2]/div/div[1]/div[2]/div[1]/div/label/kendo-daterange/kendo-dateinput[2]/span/input').clear().type("07/08/2024")
    cy.Logout()  
   })

    it('Underverification_Received_AOF_EKYC_Today', () => {
        cy.Loginflow1()
        //click on received 
        cy.get('.col_wrap_first_cward > :nth-child(2) > .slds-checkbox_button-group').click()
        //click on calender
        cy.xpath('/html/body/app-root/app-dashboard/div/main/div/app-clientinwarddetails/div[2]/div/div[1]/div[2]/div[1]/div/label/kendo-daterange').click()
        cy.xpath('/html/body/app-root/app-dashboard/div/main/div/app-clientinwarddetails/div[2]/div/div[1]/div[2]/div[1]/div/label/kendo-daterange/kendo-dateinput[1]').clear().type("12/05/2023")
        cy.xpath('/html/body/app-root/app-dashboard/div/main/div/app-clientinwarddetails/div[2]/div/div[1]/div[2]/div[1]/div/label/kendo-daterange/kendo-dateinput[2]').clear().type("07/08/2024") 
        //click on AOF
        cy.get(':nth-child(3) > :nth-child(2) > .slds-checkbox_button-group').click()
        //click on EKYC
        cy.get(':nth-child(4) > :nth-child(2) > .slds-checkbox_button-group').click()
        //click on Today
        cy.get(':nth-child(5) > :nth-child(2) > .slds-checkbox_button-group').click()
        // validations for data
        if(cy.xpath('/html/body/app-root/app-dashboard/div/main/div/app-clientinwarddetails/div[2]/div/div[2]/kendo-grid/div/kendo-grid-list/div').should('have.length.above',0))
        
        {
           cy.log('data found')
        }
        else
        {
           cy.log('Data not found')
        }   //  cy.xpath('/html/body/app-root/app-dashboard/div/main/div/app-clientsurcgenerated/div[2]/div/div[1]/div[2]/div[1]/div/label/kendo-daterange').click()
       //  cy.xpath('/html/body/app-root/app-dashboard/div/main/div/app-clientsurcgenerated/div[2]/div/div[1]/div[2]/div[1]/div/label/kendo-daterange/kendo-dateinput[1]/span/input').clear().type("12/05/2023")
       //  // select second calender
       //  cy.xpath('/html/body/app-root/app-dashboard/div/main/div/app-clientsurcgenerated/div[2]/div/div[1]/div[2]/div[1]/div/label/kendo-daterange/kendo-dateinput[2]/span/input').clear().type("07/08/2024")
       cy.Logout() 
      })

       it('Underverification_Received_MOD_MANUAL_YESTERDAY', () => {
        cy.Loginflow1()
        //click on received 
        cy.get('.col_wrap_first_cward > :nth-child(2) > .slds-checkbox_button-group').click()
        //click on calender
        cy.xpath('/html/body/app-root/app-dashboard/div/main/div/app-clientinwarddetails/div[2]/div/div[1]/div[2]/div[1]/div/label/kendo-daterange').click()
        cy.xpath('/html/body/app-root/app-dashboard/div/main/div/app-clientinwarddetails/div[2]/div/div[1]/div[2]/div[1]/div/label/kendo-daterange/kendo-dateinput[1]').clear().type("12/05/2023")
        cy.xpath('/html/body/app-root/app-dashboard/div/main/div/app-clientinwarddetails/div[2]/div/div[1]/div[2]/div[1]/div/label/kendo-daterange/kendo-dateinput[2]').clear().type("07/08/2024") 
        //click on MOD
        cy.get(':nth-child(3) > :nth-child(3) > .slds-checkbox_button-group').click()
        //click on MANUAL
        cy.get(':nth-child(4) > :nth-child(3) > .slds-checkbox_button-group').click()
        //click on YESTERDAY
        cy.get(':nth-child(5) > :nth-child(3) > .slds-checkbox_button-group').click()
        // validations for data
        if(cy.xpath('/html/body/app-root/app-dashboard/div/main/div/app-clientinwarddetails/div[2]/div/div[2]/kendo-grid/div/kendo-grid-list/div').should('have.length.above',0))
        
        {
           cy.log('data found')
        }
        else
        {
           cy.log('Data not found')
        }   
        cy.Logout() 
       })
       it('Underverification_Received_DLLR_ALL_7DAYS', () => {
        cy.Loginflow1()
        //click on Received 
        cy.get('.col_wrap_first_cward > :nth-child(2) > .slds-checkbox_button-group').click()
        //click on calender
        cy.xpath('/html/body/app-root/app-dashboard/div/main/div/app-clientinwarddetails/div[2]/div/div[1]/div[2]/div[1]/div/label/kendo-daterange').click()
        cy.xpath('/html/body/app-root/app-dashboard/div/main/div/app-clientinwarddetails/div[2]/div/div[1]/div[2]/div[1]/div/label/kendo-daterange/kendo-dateinput[1]').clear().type("12/05/2023")
        cy.xpath('/html/body/app-root/app-dashboard/div/main/div/app-clientinwarddetails/div[2]/div/div[1]/div[2]/div[1]/div/label/kendo-daterange/kendo-dateinput[2]').clear().type("07/08/2024") 
        //click on DLLR
        cy.get(':nth-child(3) > :nth-child(4) > .slds-checkbox_button-group').click()
        //click on ALL
        cy.get(':nth-child(4) > :nth-child(1) > .slds-checkbox_button-group').click()
        //click on 7 DAYS
        cy.get(':nth-child(5) > :nth-child(4) > .slds-checkbox_button-group').click()
        // validations for data
        if(cy.xpath('/html/body/app-root/app-dashboard/div/main/div/app-clientinwarddetails/div[2]/div/div[2]/kendo-grid/div/kendo-grid-list/div').should('have.length.above',0))
        
        {
           cy.log('data found')
        }
        else
        {
           cy.log('Data not found')
        }    
        cy.Logout() 
       })
       it('Underverification_Received_Duck_EKYC_30DAYS', () => {
         cy.Loginflow1()
        // click on Received 
         cy.get('.col_wrap_first_cward > :nth-child(2) > .slds-checkbox_button-group').click()
         //click on calender
         cy.xpath('/html/body/app-root/app-dashboard/div/main/div/app-clientinwarddetails/div[2]/div/div[1]/div[2]/div[1]/div/label/kendo-daterange').click()
         cy.xpath('/html/body/app-root/app-dashboard/div/main/div/app-clientinwarddetails/div[2]/div/div[1]/div[2]/div[1]/div/label/kendo-daterange/kendo-dateinput[1]').clear().type("12/05/2023")
         cy.xpath('/html/body/app-root/app-dashboard/div/main/div/app-clientinwarddetails/div[2]/div/div[1]/div[2]/div[1]/div/label/kendo-daterange/kendo-dateinput[2]').clear().type("07/08/2024") 
         //click on DUCK
         cy.get(':nth-child(3) > :nth-child(5) > .slds-checkbox_button-group').click()
         //click on EKYC
         cy.get(':nth-child(4) > :nth-child(2) > .slds-checkbox_button-group').click()
         //click on 30 DAYS
         cy.get(':nth-child(5) > :nth-child(5) > .slds-checkbox_button-group').click()
         // validations for data
         if(cy.xpath('/html/body/app-root/app-dashboard/div/main/div/app-clientinwarddetails/div[2]/div/div[2]/kendo-grid/div/kendo-grid-list/div').should('have.length.above',0))
         
         {
            cy.log('data found')
         }
         else
         {
            cy.log('Data not found')
         } 
         cy.Logout()     
         })
         it('Underverification_Received_MTF_Manual_Yesterday', () => {
            cy.Loginflow1()
           // click on Received 
            cy.get('.col_wrap_first_cward > :nth-child(2) > .slds-checkbox_button-group').click()
            //click on calender
            cy.xpath('/html/body/app-root/app-dashboard/div/main/div/app-clientinwarddetails/div[2]/div/div[1]/div[2]/div[1]/div/label/kendo-daterange').click()
            cy.xpath('/html/body/app-root/app-dashboard/div/main/div/app-clientinwarddetails/div[2]/div/div[1]/div[2]/div[1]/div/label/kendo-daterange/kendo-dateinput[1]').clear().type("12/05/2023")
            cy.xpath('/html/body/app-root/app-dashboard/div/main/div/app-clientinwarddetails/div[2]/div/div[1]/div[2]/div[1]/div/label/kendo-daterange/kendo-dateinput[2]').clear().type("07/08/2024") 
            //click on mtf
            cy.get('[style="margin-bottom: 20px;"] > :nth-child(3) > :nth-child(6)').click()
            //click on manual
            cy.get(':nth-child(4) > :nth-child(3) > .slds-checkbox_button-group').click()
            //click on yesterday
            cy.get(':nth-child(5) > :nth-child(3) > .slds-checkbox_button-group').click()
            // validations for data
            if(cy.xpath('/html/body/app-root/app-dashboard/div/main/div/app-clientinwarddetails/div[2]/div/div[2]/kendo-grid/div/kendo-grid-list/div').should('have.length.above',0))
            
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