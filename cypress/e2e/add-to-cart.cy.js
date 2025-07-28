import AddToCartPage from '../support/pages/AddToCart';

describe('Adăugare produs în coș', () => {
  const addToCardPage = new AddToCartPage();
  const email = Cypress.env('USERNAME');
  const password = Cypress.env('PASSWORD');

  beforeEach(() => {
    cy.login(email, password);
  });

  it.only('Should navigate and add product to cart', () => {
    const productName = 'Breathe-Easy Tank';

    addToCardPage.navigateToTopsSection();
    addToCardPage.selectProduct(productName);
    addToCardPage.selectRandomSize();
    cy.selectRandomColor();
    addToCardPage.clickAddToCart();
    addToCardPage.verifySuccessMessage(productName);
  });
});
