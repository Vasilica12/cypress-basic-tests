Cypress.Commands.add('login', (email, password) => {
  cy.visit('https://magento.softwaretestingboard.com/customer/account/login');

  cy.get('#email').type(email);
  cy.get('#pass').type(password);
  cy.get('#send2').click();
});

Cypress.Commands.add('selectRandomSize', () => {
  cy.get('.swatch-attribute.size .swatch-option.text')
    .should('be.visible')
    .then(($sizes) => {
      const randomIndex = Math.floor(Math.random() * $sizes.length);
      cy.wrap($sizes[randomIndex]).click();
    });
});

Cypress.Commands.add('selectRandomColor', () => {
  cy.get('.swatch-attribute.color .swatch-option.color')
    .should('be.visible')
    .then(($colors) => {
      const randomIndex = Math.floor(Math.random() * $colors.length);
      cy.wrap($colors[randomIndex]).click();
    });
});