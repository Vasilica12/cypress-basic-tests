describe('Login Tests', () => {


  beforeEach(() => {
    cy.visit('https://magento.softwaretestingboard.com');
  });

  context('Valid credentials', () => {
    it('Access the Login Page.', () => {
      cy.get('li.authorization-link a').contains('Sign In').should('be.visible').click();
      cy.url().should('include', '/customer/account/login');
      cy.contains('Customer Login').should('exist');
    });

    it('Verify that user can log in successfully.', () => {
      cy.get('li.authorization-link a').contains('Sign In').should('be.visible').click();
      cy.get('#email').type('vasilica.cernovschi1234@gmail.com');
      cy.get('#pass').type('tR23.xn6jwr@.nC');
      cy.get('#send2').click();
       cy.get('span.logged-in').should('be.visible').and('contain.text', 'Welcome');
    });
  });

  context('Invalid credentials', () => {
    it('Should show error for incorrect password', () => {
      cy.get('li.authorization-link a')
        .contains('Sign In')
        .should('be.visible')
        .click();

      cy.get('#email').type('vasilica.cernovschi1234@gmail.com');
      cy.get('#pass').type('wrongpassword123');
      cy.get('#send2').click();

      cy.get('.message-error')
        .should('be.visible')
        .and('contain.text', 'The account sign-in was incorrect or your account is disabled temporarily');
    });

    it('Should show validation error for invalid email format', () => {
      cy.get('li.authorization-link a')
        .contains('Sign In')
        .should('be.visible')
        .click();

      cy.get('#email').type('notanemail');
      cy.get('#pass').type('tR23.xn6jwr@.nC');
      cy.get('#send2').click();

      cy.get('#email-error')
        .should('be.visible')
        .and('contain.text', 'Please enter a valid email address');
    });
  });

  
});
