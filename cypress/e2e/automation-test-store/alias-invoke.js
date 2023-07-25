

describe("Alias and invoke", () => {

    it("Validate a specific hair care product", () => {
        cy.visit('https://automationteststore.com/');
        cy.get("a[href*='product/category&path=']").contains('Hair Care').click();
        cy.get('.fixed_wrapper .prdocutname').eq(0).invoke('text').as('ProductThumbnail');
        cy.get('@ProductThumbnail').its('length').should('be.gt', 5);
        cy.get('@ProductThumbnail').should('include', 'Sea')
    });

    it('Validate product thumbnail', () => {
        cy.visit('https://automationteststore.com/');
        cy.get('.thumbnail').as('productThumbnail');
        cy.get('@productThumbnail').should('have.length', 16);
        cy.get('@productThumbnail').find('.productcart').invoke('attr', 'title').should('include', 'Add to Cart');
    })


    it.only('Calculate total of normal and sell products', () => {
        cy.visit('https://automationteststore.com/');
        cy.get('.thumbnail').as('productThumbnail');
       // cy.get('@productThumbnail').find('.oneprice').each(($el, index, $list) => {
            // if ($el.text().includes('Curls to straight Shampoo')) {
            //     cy.wrap($el).click();
            // }
           //cy.log($el.text());


      //  })


      cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemPrice');
      cy.get('.thumbnail').find('.pricenew').invoke('text').as('saleItemPrice');

      var itemsTotal = 0;
      
      cy.get('@itemPrice').then(($linkPrice) => {
          var itemsPriceTotal = 0;
          var itemPrice = $linkPrice.split('$');
          var i; //index
          for(i = 0; i < itemPrice.length; i++) {  //iteracija sve dok ima elemenata u array-u
            //index krece od nule, a length od 1
            cy.log(itemPrice[i]);
            itemsPriceTotal += Number(itemPrice[i]);
            cy.log(itemsPriceTotal);

          }
          cy.log('This is final score: ' + itemsPriceTotal);
          itemsTotal += itemsPriceTotal;
          cy.log('Non sale price items total: ' + itemsTotal);
          
      })

      cy.get('@saleItemPrice').then(($linkPrice) => {
        var saleItemsPrice = 0;
        var saleItemPrice = $linkPrice.split('$');
        var i;
        for(i = 0; i < saleItemPrice.length; i++) { 
          
            cy.log(saleItemPrice[i]);
            saleItemsPrice += Number(saleItemPrice[i]);
        }
        itemsTotal += saleItemsPrice;
        cy.log('Sale price items total: ' + saleItemsPrice);
        cy.log('This is a total price for all items: ' + itemsTotal)

        
    })
    .then(() => {
        cy.log('Ukupna cena svih proizvoda je: ' + itemsTotal);
        expect(itemsTotal).to.eq(660.5);
    })
    })



});
