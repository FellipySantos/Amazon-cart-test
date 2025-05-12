export class HomePage {
    searchInput = '#twotabsearchtextbox';
    searchButton = '#nav-search-submit-button';
    productLink = '.a-size-base-plus > span';

    searchProduct(product) {
      cy.get(this.searchInput).type(product);
      cy.get(this.searchButton).click();
    }

    openProductPage() {
        cy.get(this.productLink).first().click();
    }   
  }