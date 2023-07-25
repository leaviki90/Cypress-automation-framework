/// <reference types="Cypress" />
describe("Handling data via webdriveruni", () => {
    beforeEach(() => {
      cy.visit("http://webdriveruniversity.com/");
      cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
    });
    
    it("Calculate and assert the total age of all users", () => {
        var userDetails = [];
        let number = 0;

       cy.get('#thumbnail-1 td').each(($el, index, $list) => {
         userDetails[index] = $el.text();
       }).then(() => {
        var i;
        for(i = 0; i < userDetails.length; i++) {
            if(Number(userDetails[i])) { //ako je vrednost celije broj, onda ga dodaj u number var
                number += Number(userDetails[i]);
            }     
       }
       cy.log("Found total age " + number);
       expect(number).to.eq(322);
       })
    });


    it("Calculate and assert the age of a given user based on last name", () => {
        cy.get('#thumbnail-1 tr td:nth-child(2)').each(($el, index, $list) => {
            const text = $el.text()
            if(text.includes("Woods")) {
                cy.get('#thumbnail-1 tr td:nth-child(2)').eq(index).next().then(function(age) {
                    const userAge = age.text();
                    expect(userAge).to.equal("80");
                
                })
            }
        })
    });  
  });
  