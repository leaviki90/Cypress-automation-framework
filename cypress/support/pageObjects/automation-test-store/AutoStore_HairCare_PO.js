class AutoStore_HairCare_PO {  //kreiramo objekat za haircare stranu
     addHairCareProductsToBasket(){
        data.productName.forEach(element => {
            cy.addProductToBasket(element).then(() => {
               // debugger;
            })
        });
        cy.get('.dropdown-toggle > .fa').click().debug();
     }
 }
 
 export default AutoStore_HairCare_PO;