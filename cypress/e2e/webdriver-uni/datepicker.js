/// <reference types="Cypress" />

describe("Test Datepicker via webdriveruni", () => {
    it.only("Select date from the datepicker", () => {
      cy.visit('/');
      cy.get('#datepicker').invoke('removeAttr', 'target').click({force: true});
      cy.get('#datepicker').click();
    
    //   let date = new Date();
    //   date.setDate(date.getDate()) // get current date i.e. 23
    //   cy.log(date.getDate());

    //   let date2 = new Date();
    //   date2.setDate(date2.getDate() + 5);
    //   cy.log(date2.getDate()) ;   //get current day i.e. 23 + 5 = 28

     var date = new Date();
     date.setDate(date.getDate() + 39);  //24 ovo nam je sad danasnji datum (sa +360)

     var futureYear = date.getFullYear(); //current year; 365 days
     var futureMonth = date.toLocaleString("default", {month: 'long'}); //formatira mesec
     var futureDay = date.getDate();

     cy.log("Future year to select: " + futureYear );
     cy.log("Future month to select: " + futureMonth );
     cy.log("Future day to select: " + futureDay );

     function selectMonthAndYear() {
        cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then((currentDate) => {
               if(!currentDate.text().includes(futureYear)){
//ako danasnji datum koji smo selektovali nije isti sa FutureYear()
                    cy.get('.next').first().click();
//klikni na next i klikci sve dok ne dodje do Future year
                    selectMonthAndYear(); //kao loop
               }
        }).then(() => {
            cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then((currentDate) => {
                if(!currentDate.text().includes(futureMonth)){
                     cy.get('.next').first().click();
                     selectMonthAndYear(); //kao loop
                }
         })
        });
     }

     function selectFutureDay() {
        cy.get("[class='day']").contains(futureDay).click();
     }

     selectMonthAndYear();
     selectFutureDay();

    });
    
  });
  