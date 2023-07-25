import Homepage_PO from "../../support/pageObjects/webdriver-uni/Homepage_PO";
import Contact_Us_PO from "../../support/pageObjects/webdriver-uni/Contact_Us_PO";

/// <reference types="Cypress" />

describe("Test Contact Us form via WebdriverUni", () => {
 // Cypress.config('defaultCommandTimeout', 4000);

  const homepage_PO = new Homepage_PO();
  const contact_Us_PO = new Contact_Us_PO();
before(() => {
  cy.fixture('example').then((data) => {
    // this.data = data; //to sto smo izvukli iz json fajla od sad koristimo as a data
    //a ako ovo ne radi, onda napisemo ovako 
    globalThis.data = data;

  })
})

beforeEach(function() {

 homepage_PO.visitHomepage();
 //cy.wait(3000);
 homepage_PO.clickOn_ContactUs_Button();
 //cy.pause();
})

  it("Should be able to submit a successfull submission via contact us form", () => {
    cy.document().should('have.a.property', 'charset').and('eq', 'UTF-8');
    cy.title().should('include', 'WebDriver | Contact Us');
    cy.url().should('include', 'contactus');
    contact_Us_PO.contactForm_Submission(Cypress.env('first_name'), data.last_name, data.email, "Hello from the other side!", 'h1', 'Thank You for your Message!');
  });
  it("Should not be able to submit a successfull submission via contact us form as all fields are required", () => {
    //negative scenario
    contact_Us_PO.contactForm_Submission(data.first_name, data.last_name, ' ', 'Hello from the other side!Again!', 'body', 'Error: Invalid email address')
  });
});
