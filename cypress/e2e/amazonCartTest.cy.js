import { ProductPage } from "../pages/productPage";
import { HomePage } from "../pages/HomePage";
import { CartPage } from "../pages/cartPage";
import { CartValidations } from "../step_definition/cartValidations";

const home = new HomePage();
const product = new ProductPage();
const cart = new CartPage();
const validation = new CartValidations();

describe("Amazon Cart Test", () => {
  const productName = "Huggies Fralda Premium Natural Care M 32 Un";

  it("should search, add product to cart, and validate subtotal", () => {
    cy.visit("/");
    home.searchProduct(productName);
    home.openProductPage();

    let productTitle;
    let productPrice;

    product.getProductName().then(name => {
      productTitle = name.trim();
    
      product.getProductPrice().then(price => {
        productPrice = price.trim();
      
        console.log(productTitle);
        console.log(productPrice);

        product.addToCart();
        product.goToCart();

        let cartProductTitle;
        let cartProductPrice;

        cart.getProductTitle().then(cartName => {
          cartProductTitle = cartName;
        

          cart.getProductPrice().then(cartPrice => {
            cartProductPrice = cartPrice;
            

            console.log(cartProductTitle);
            console.log(cartProductPrice);

            validation.validateProductDetails(productTitle, productPrice, cartProductTitle, cartProductPrice);

            let quantity

            cart.getQuantity().then(cartQuantity => {
              quantity = cartQuantity
            

              validation.validateSubtotal(productPrice, quantity);
              console.log(quantity);
              cart.increaseQuantity();

              cart.getQuantity().then(cartQuantity => {
                quantity = cartQuantity
              
                console.log(quantity);
                validation.validateSubtotal(productPrice, quantity);
              });
            });
          });
        });
      });
    });  
  });
});