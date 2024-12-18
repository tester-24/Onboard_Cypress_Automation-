
/// <reference types="cypress"/>

describe('template spec', () => {
  it('Pending_All', () => {
   cy.Loginflow()

    cy.xpath('/html/body/app-root/app-dashboard/div/main/div/app-clientsurcgenerated/div[2]/div/div[1]/div[2]/div[1]/div/label/kendo-daterange').click()
   cy.xpath('/html/body/app-root/app-dashboard/div/main/div/app-clientsurcgenerated/div[2]/div/div[1]/div[2]/div[1]/div/label/kendo-daterange/kendo-dateinput[1]/span/input').clear().type("12/05/2023")
   // select second calender
   cy.xpath('/html/body/app-root/app-dashboard/div/main/div/app-clientsurcgenerated/div[2]/div/div[1]/div[2]/div[1]/div/label/kendo-daterange/kendo-dateinput[2]/span/input').clear().type("07/08/2024")
   cy.get('.col-md-3 > .form-control').click({force:true})
   // click on all 
   cy.xpath('/html/body/app-root/app-dashboard/div/main/div/app-clientsurcgenerated/div[2]/div/div[1]/div[3]/div[1]/div').click({force:true})
   // validateb data is come or not

   if(cy.xpath('/html/body/app-root/app-dashboard/div/main/div/app-clientsurcgenerated/div[2]/div/div[3]/kendo-grid/div/kendo-grid-list/div/div[1]/table/tbody/tr').should('have.length.above',0))
   {
        cy.log('data found')
   }
   else{
    cy.log('data not found')
   }
   cy.wait(1000)
  })
  it('Pending_AOF_EKYC_Today', () => 
    {
      cy.Loginflow()
      cy.xpath('/html/body/app-root/app-dashboard/div/main/div/app-clientsurcgenerated/div[2]/div/div[1]/div[2]/div[1]/div/label/kendo-daterange').click()
      cy.xpath('/html/body/app-root/app-dashboard/div/main/div/app-clientsurcgenerated/div[2]/div/div[1]/div[2]/div[1]/div/label/kendo-daterange/kendo-dateinput[1]/span/input').clear().type("12/05/2023")
      // select second calender
      cy.xpath('/html/body/app-root/app-dashboard/div/main/div/app-clientsurcgenerated/div[2]/div/div[1]/div[2]/div[1]/div/label/kendo-daterange/kendo-dateinput[2]/span/input').clear().type("07/08/2024")
      cy.get('.col-md-3 > .form-control').click({force:true})
      // click on AOF
      cy.get('.client-gust-ob3 > :nth-child(2) > .slds-checkbox_button-group').click({force:true})
      //click on E-kyc
      cy.get('.client-gust-ob4 > :nth-child(2) > .slds-checkbox_button-group').click({force:true})
      // click on today
      cy.get('.client-gust-ob5 > :nth-child(2) > .slds-checkbox_button-group').click({force:true})
      cy.wait(1000)
      if(cy.xpath('/html/body/app-root/app-dashboard/div/main/div/app-clientsurcgenerated/div[2]/div/div[3]/kendo-grid/div/kendo-grid-list/div/div[1]/table/tbody/tr').should('have.length.above',0))
        {
             cy.log('data found')
        }
        else{
         cy.log('data not found')
        }
        cy.wait(1000)
  
    })
    it('Pending_MOD_Manual_yesterday', () => 
      {
        cy.Loginflow()
      //  cy.xpath('/html/body/app-root/app-dashboard/div/main/div/app-clientsurcgenerated/div[2]/div/div[1]/div[2]/div[1]/div/label/kendo-daterange').click()
        // cy.xpath('/html/body/app-root/app-dashboard/div/main/div/app-clientsurcgenerated/div[2]/div/div[1]/div[2]/div[1]/div/label/kendo-daterange/kendo-dateinput[1]/span/input').clear().type("12/05/2023")
        // // select second calender
        // cy.xpath('/html/body/app-root/app-dashboard/div/main/div/app-clientsurcgenerated/div[2]/div/div[1]/div[2]/div[1]/div/label/kendo-daterange/kendo-dateinput[2]/span/input').clear().type("07/08/2024")
        //cy.get('.col-md-3 > .form-control').click({force:true})
        // click on MOD
        cy.get('.client-gust-ob3 > :nth-child(3) > .slds-checkbox_button-group').click({force:true})
        // click on Manual
        cy.get('.client-gust-ob4 > :nth-child(3) > .slds-checkbox_button-group').click({force:true})
        // click on yesterday
        cy.get('.client-gust-ob5 > :nth-child(3) > .slds-checkbox_button-group').click({force:true})
        if(cy.xpath('/html/body/app-root/app-dashboard/div/main/div/app-clientsurcgenerated/div[2]/div/div[3]/kendo-grid/div/kendo-grid-list/div/div[1]/table/tbody/tr').should('have.length.above',0))
          {
               cy.log('data found')
          }
          else{
           cy.log('data not found')
          }
          cy.wait(1000)

      })
      it('Pending_DLDR_ALL_7DAYS', () => 
        {
          cy.Loginflow()
          //cy.xpath('/html/body/app-root/app-dashboard/div/main/div/app-clientsurcgenerated/div[2]/div/div[1]/div[2]/div[1]/div/label/kendo-daterange').click()
          // cy.xpath('/html/body/app-root/app-dashboard/div/main/div/app-clientsurcgenerated/div[2]/div/div[1]/div[2]/div[1]/div/label/kendo-daterange/kendo-dateinput[1]/span/input').clear().type("12/05/2023")
          // // select second calender
          // cy.xpath('/html/body/app-root/app-dashboard/div/main/div/app-clientsurcgenerated/div[2]/div/div[1]/div[2]/div[1]/div/label/kendo-daterange/kendo-dateinput[2]/span/input').clear().type("07/08/2024")
         // cy.get('.col-md-3 > .form-control').click({force:true})
          // click on DLLR
          cy.get('.client-gust-ob3 > :nth-child(4) > .slds-checkbox_button-group').click({force:true})
          // click on ALL
          cy.get('.client-gust-ob4 > :nth-child(3) > .slds-checkbox_button-group').click({force:true})
          // click on 7 DAYS
          cy.get('.client-gust-ob5 > :nth-child(4) > .slds-checkbox_button-group').click({force:true})
          if(cy.xpath('/html/body/app-root/app-dashboard/div/main/div/app-clientsurcgenerated/div[2]/div/div[3]/kendo-grid/div/kendo-grid-list/div/div[1]/table/tbody/tr').should('have.length.above',0))
            {
                 cy.log('data found')
            }
            else{
             cy.log('data not found')
            }
            cy.wait(1000)
  
        })
        it('Pending_DUCK_EKYC_30DAYS', () => 
          {
            cy.Loginflow()
            //cy.xpath('/html/body/app-root/app-dashboard/div/main/div/app-clientsurcgenerated/div[2]/div/div[1]/div[2]/div[1]/div/label/kendo-daterange').click()
            // cy.xpath('/html/body/app-root/app-dashboard/div/main/div/app-clientsurcgenerated/div[2]/div/div[1]/div[2]/div[1]/div/label/kendo-daterange/kendo-dateinput[1]/span/input').clear().type("12/05/2023")
            // // select second calender
            // cy.xpath('/html/body/app-root/app-dashboard/div/main/div/app-clientsurcgenerated/div[2]/div/div[1]/div[2]/div[1]/div/label/kendo-daterange/kendo-dateinput[2]/span/input').clear().type("07/08/2024")
           // cy.get('.col-md-3 > .form-control').click({force:true})
            // click on DUCK
            cy.get('.client-gust-ob3 > :nth-child(5) > .slds-checkbox_button-group').click()
            // click on ALL
          cy.get('.client-gust-ob4 > :nth-child(3) > .slds-checkbox_button-group').click({force:true})
          // click on 7 DAYS
          cy.get('.client-gust-ob5 > :nth-child(4) > .slds-checkbox_button-group').click({force:true})
            if(cy.xpath('/html/body/app-root/app-dashboard/div/main/div/app-clientsurcgenerated/div[2]/div/div[3]/kendo-grid/div/kendo-grid-list/div/div[1]/table/tbody/tr').should('have.length.above',0))
              {
                   cy.log('data found')
              }
              else{
               cy.log('data not found')
              }
              cy.wait(1000)
    
          })
          it('Pending_MTF_EKYC_30DAYS', () => 
            {
              cy.Loginflow()
              //cy.xpath('/html/body/app-root/app-dashboard/div/main/div/app-clientsurcgenerated/div[2]/div/div[1]/div[2]/div[1]/div/label/kendo-daterange').click()
              // cy.xpath('/html/body/app-root/app-dashboard/div/main/div/app-clientsurcgenerated/div[2]/div/div[1]/div[2]/div[1]/div/label/kendo-daterange/kendo-dateinput[1]/span/input').clear().type("12/05/2023")
              // // select second calender
              // cy.xpath('/html/body/app-root/app-dashboard/div/main/div/app-clientsurcgenerated/div[2]/div/div[1]/div[2]/div[1]/div/label/kendo-daterange/kendo-dateinput[2]/span/input').clear().type("07/08/2024")
             // cy.get('.col-md-3 > .form-control').click({force:true})
              // click on MTF
              cy.get(':nth-child(6) > .slds-checkbox_button-group > .slds-checkbox_button__label > .text-muted').click()
             // click on ALL
              cy.get('.client-gust-ob4 > :nth-child(1) > .slds-checkbox_button-group').click({force:true})
            // click on all
            cy.get('.client-gust-ob5 > :nth-child(5) > .slds-checkbox_button-group').click({force:true})
              if(cy.xpath('/html/body/app-root/app-dashboard/div/main/div/app-clientsurcgenerated/div[2]/div/div[3]/kendo-grid/div/kendo-grid-list/div/div[1]/table/tbody/tr').should('have.length.above',0))
                {
                     cy.log('data found')
                }
                else{
                 cy.log('data not found')
                }
      
             cy.wait(1000)
            })
})
