Cypress.Commands.add("navigateTo_WebdriverUni_Homepage", () => {
    cy.visit('/');
});


Cypress.Commands.add("navigateTo_WebdriverUni_Checkbox_Page", () => {
    cy.visit('/' + 'Dropdown-Checkboxes-RadioButtons/index.html');
});



Cypress.Commands.add("selectProduct", productName => {
    cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
        if ($el.text().includes(productName)) {
            cy.wrap($el).click();
        }
    })
});


Cypress.Commands.add("addProductToBasket", productName => {
    cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
        if ($el.text() === productName) {
            cy.log($el.text());
            cy.get('.productcart').eq(index).click();
        }
    })
});





Cypress.Commands.add("enterData", (firstName, lastName, email, message, $selector, textToLocate) => {
    cy.get('[name="first_name"]').type(firstName);
    cy.get('[name="last_name"]').type(lastName);
    cy.get('[name="email"]').type(email);
    cy.get("textarea.feedback-input").type(message);
    cy.get("#contact_form").submit();
    cy.get($selector).contains(textToLocate);
});