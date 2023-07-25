class Homepage_PO {  //kreiramo objekat za homepage stranu
    visitHomepage() {  //pravimo nasu funkciju
        cy.visit(Cypress.env('webdriveruni_homepage'), {timeout: 60000});
    }
    clickOn_ContactUs_Button() {
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force: true}, {timeout: 4000});
    }

}

export default Homepage_PO;