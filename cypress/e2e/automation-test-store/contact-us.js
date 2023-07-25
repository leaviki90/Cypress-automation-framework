/// <reference types="Cypress" />
/// <reference types="@cypress/xpath" />

describe("Test Contact Us form via Automation Test Store", () => {
  before(function() {
   // cy.viewport(600, 800);
    cy.fixture('userDetails').as('user');
  })
  it("Should be able to submit a successfull submission via contact us form", () => {
    cy.visit("https://automationteststore.com/");
    //cy.get(".info_links_footer > :nth-child(5) > a").click();
    cy.get("a[href$='contact']").click().then(function(textOdButtona) {
         console.log("Ovo je text od buttona " + textOdButtona.text());
         cy.log("Ovo je text od buttona " + textOdButtona.text());
    })
    cy.get('@user').then((user) => {
      cy.get("#ContactUsFrm_first_name").type(user.first_name);
      cy.get("#ContactUsFrm_email").type(user.email);
    })
    cy.get("#ContactUsFrm_email").should('have.attr', 'name', 'email');
    cy.get("#ContactUsFrm_enquiry").type("Hello World!");
    cy.get("button[title='Submit']").click();
    cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!')
    cy.log('Hello there!')
  });
  
});
