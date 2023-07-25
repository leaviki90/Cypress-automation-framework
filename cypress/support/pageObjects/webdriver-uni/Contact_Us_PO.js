class Contact_Us_PO {  //kreiramo objekat za contact us stranu
   contactForm_Submission(firstName, lastName, email, message, $selector, textToLocate) {
        cy.get('[name="first_name"]').type(firstName);
        cy.get('[name="last_name"]').type(lastName);
        cy.get('[name="email"]').type(email);
        cy.get("textarea.feedback-input").type(message);
        cy.get("#contact_form").submit();
        cy.get($selector).contains(textToLocate);
        cy.screenshot();
        cy.screenshot("Make a contact us form submission");
    };

}

export default Contact_Us_PO;