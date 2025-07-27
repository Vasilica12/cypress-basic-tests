class LoginPage {
  emailInput = '#email';
  passwordInput = '#pass';
  submitButton = '#send2';
  loginUrl = 'https://magento.softwaretestingboard.com/customer/account/login';
  errorMessage = '.message-error';
  welcomeMessage = 'span.logged-in';

  visitLoginPage() {
    cy.visit(this.loginUrl);
  }

  verifyInputsVisibility() {
    cy.get(this.emailInput).should('be.visible');
    cy.get(this.passwordInput).should('be.visible');
  }

  verifySubmitBtnVisibility() {
    cy.get(this.submitButton).should('be.visible');
  }

  fillEmail(value) {
    cy.get(this.emailInput).clear().type(value);
  }

  fillPassword(value) {
    cy.get(this.passwordInput).clear().type(value);
  }

  submit() {
    cy.get(this.submitButton).click();
  }

  alertMessageVisibility() {
    cy.get(this.errorMessage).should('be.visible');
  }

  verifyLoginSuccess() {
    cy.get(this.welcomeMessage).should('be.visible').and('contain.text', 'Welcome');
  }
}

export default LoginPage;
