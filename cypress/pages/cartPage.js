export class CartPage {
    productTitle = '.a-truncate-full';
    productPrice = '.a-text-bold > .a-price';
    quantity = '[data-a-selector="value"]';
    increaseQtdButton = '[aria-label="Aumentar a quantidade em um"]';

    getProductTitle() {
        return cy.get(this.productTitle);
    }

    getProductPrice() {
        return cy.get(this.productPrice);
    }

    getQuantity() {
        return cy.get(this.quantity).invoke('text');
    }

    increaseQuantity() {
      cy.get(this.increaseQtdButton).click;
    }
  
    
  }