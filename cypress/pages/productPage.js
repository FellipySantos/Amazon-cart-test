export class ProductPage {
  productName = '#productTitle';
  productPrice = '.a-price-whole';
  addToCartButton = '#add-to-cart-button';
  goToCartButton = '#sw-gtc > .a-button-inner > .a-button-text';

  getProductName() {    
    return cy.get(this.productName).invoke('text');
  }

  getProductPrice() {
    return cy.get(this.productPrice).first().invoke('text');
  }

  addToCart() {
    cy.get(this.addToCartButton).click();
  }

  goToCart() {
    cy.get(this.goToCartButton).click();
  }
}