/// <reference types="Cypress" />

describe("Handling IFrame & Modals", () => {
    it.only("Handle webdriveruni iframe and modal", () => {
      cy.visit('/');
      cy.get('#iframe').invoke('removeAttr', 'target').click({force: true});
      cy.get('#frame').then($iframe => { //nadji frame element, $frame je ono sto ima u njemu
        //moze da se zove kako oces,
        const body = $iframe.contents().find('body'); //napravi konstantu 
        //metodom contents nadji el body u frame-u
        cy.wrap(body).as('iframe');
        //obmotaj konstantu (body iz frame-a) da bi cypress mogao da je koristi pod nazivom @iframe

      })
      cy.get('@iframe').find('#button-find-out-more').click();
      cy.get('@iframe').find('#myModal').as('modal');
      cy.get('@modal').should(($expectedText) => {
        //nadji element i proveri
         const text = $expectedText.text();
         //sve iz elementa stavi u konstantu i izvuci text odatle
         expect(text).to.include('Welcome to webdriveruniversity.com we sell a wide range of electrical goods');
         //da li taj tekst ukljucuje prosledjeni tekst?
      })
      cy.get('@modal').contains('Close').click();
    });
    
  });
  