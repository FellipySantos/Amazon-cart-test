export class CartValidations {
  subTotalRigth = '//*[@id="sc-subtotal-amount-buybox"]/span';
  subtotalBellow = '//*[@id="sc-subtotal-amount-activecart"]/span';
  subtotal = '.a-price-whole';

  validadeSubtotalCart(price){
    const value = parseFloat(price)
    const intPrice = value.toFixed(0)
    cy.get(this.subtotal).first().should('be.visible').should('eq', intPrice)
  }
  validateProductDetails(prodName, prodPrice, cartName, cartPrice) {
    cy.get(cartName).contains(prodName);
    cy.get(cartPrice).contains(prodPrice);
  }

  validateSubtotal(price, quantity) {
    const value = parseFloat(price.replace("R$", "").replace(",", "."));
    const expected = (value * quantity).toFixed(0).replace(",", ".");
    cy.xpath(this.subTotalRigth).should('be.visible').contains(expected);
    cy.xpath(this.subtotalBellow).should('be.visible').contains(expected);
  }
}