/// <reference types="Cypress" />

describe("Cypress Web Security", () => {
    it.skip("Validate visiting two different domains", () => {
     cy.visit('http://www.webdriveruniversity.com/');
     cy.visit('https://www.google.com/');
    });
    it.skip("Validate visiting two different domains via user actions", () => {
        cy.visit('http://www.webdriveruniversity.com/');
        cy.get('#automation-test-store').invoke('removeAttr', 'target').click();
    });

    it('Origin commmand', () => {
        // cy.origin('webdriveruniversity.com', () => {
        //     cy.visit('/');
        // })

        // cy.origin('automationteststore.com', () => {
        //     cy.visit('/');
        // })
        cy.visit('http://www.webdriveruniversity.com/');
        cy.visit('http://www.selectors.webdriveruniversity.com/');
    })
  });
  