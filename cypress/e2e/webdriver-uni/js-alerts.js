/// <reference types="Cypress" />

describe("Handle js alerts", () => {
    it("Confirm js alert contains the correct text", () => {
      cy.visit('http://www.webdriveruniversity.com');
      cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force: true});
      cy.get('#button1').click();
      cy.on('window:alert', (str) => {
        expect(str).to.equal('I am an alert box!');
     })
    });

    it("Validate js confirm alert box works correctly when clicking ok", () => {
        cy.visit('http://www.webdriveruniversity.com');
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force: true});
        cy.get('#button4').click();
        cy.on('window:confirm', () => false)  //kad je false klikce na cancel, true na ok

        cy.get('#confirm-alert-text').contains('You pressed Cancel!');
      });


      it.only("Validate js confirm alert box using stub", () => {
        cy.visit('http://www.webdriveruniversity.com');
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force: true});
        //pre klika na alert, uvodimo stub u konstantu
        const stub = cy.stub();
        cy.on('window:confirm', stub)
        cy.get('#button4').click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Press a button!'); 
            //stub je kao storage i setujemo ga na 0 jer nemamo nista u pocetku - getCall(),
            //0 je indeks, prvi indeks a ne empty, i odnosi se na jedan event
            //znaci ocekujemo da storage ima prvi element sa value 'Press a button'
        }).then(() => {
            return true;  //i kad je true i false isto vraca - nije dobro
           
        }).then(() => {
            cy.get('#confirm-alert-text').contains('You pressed OK!');
        })
     
      });
  
  });
  