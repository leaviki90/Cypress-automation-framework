/// <reference types="Cypress" />

describe("Test mouse actions", () => {
    it("Scroll element into view", () => {
      cy.visit('http://www.webdriveruniversity.com');
      cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force: true});
    });

    it("I should be able to drag and drop a drggable item", () => {
        cy.visit('http://www.webdriveruniversity.com');
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force: true});
        cy.get('#draggable').trigger('mousedown', {which: 1}); //da kliknes u centar
        cy.get('#droppable').trigger('mousemove').trigger('mouseup', {force:true});
      });

      
    it("I should be able to perform adouble mouse click", () => {
        cy.visit('http://www.webdriveruniversity.com');
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force: true});
        cy.get('#double-click').trigger('dblclick');
       
      });

      it.only("I should be able to hold down the left mouse click button on a given element", () => {
        cy.visit('http://www.webdriveruniversity.com');
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force: true});
        cy.get('#click-box').trigger('mousedown', {which: 1}).then(($element) => {
            expect($element).to.have.css('background-color', 'rgb(0, 255, 0)');
        })
       
      });

   

    
  });
  