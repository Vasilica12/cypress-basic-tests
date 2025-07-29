class AddToCartPage {
  womenMenu = 'a.level-top:contains("Women")';
  topsLink = 'ol.items li.item a:contains("Tops")';
  productItem = '.product-item-info';
  sizeOptions = '.swatch-attribute.size .swatch-option.text';
  colorOptions = '.swatch-attribute.color .swatch-option.color';
  addToCartButton = '#product-addtocart-button';
  successMessage = '.message-success';
  
  navigateToTopsSection() {
    cy.get(this.womenMenu).trigger('mouseover').click();
    cy.get(this.topsLink).should('be.visible').click();
  }

  selectRandomSize() {
    cy.get(this.sizeOptions)
      .should('be.visible')
      .then(($sizes) => {
        const randomIndex = Math.floor(Math.random() * $sizes.length);
        cy.wrap($sizes[randomIndex]).click();
      });
  }

  selectProduct(productName) {
    cy.get(this.productItem).contains(productName).should('be.visible').click();
  }

  clickAddToCart() {
    cy.get(this.addToCartButton).should('be.visible').click();
  }

  verifySuccessMessage(productName) {
    cy.get(this.successMessage)
      .should('be.visible')
      .and('contain.text', 'You added')
      .and('contain.text', productName);
  }
}

export default AddToCartPage;
