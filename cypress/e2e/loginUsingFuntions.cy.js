import LoginPage from '../support/pages/LoginPage';

describe('🔐 Login Functionality Tests', () => {
  const loginPage = new LoginPage();
  const email = Cypress.env('USERNAME');
  const password = Cypress.env('PASSWORD');

  beforeEach(() => {
    loginPage.visitLoginPage();
    loginPage.verifyInputsVisibility();
    loginPage.verifySubmitBtnVisibility();
  });

  context('Valid Credentials', () => {
    it('User can log in successfully.', () => {
      loginPage.fillEmail(email);
      loginPage.fillPassword(password);
      loginPage.submit();
      loginPage.verifyLoginSuccess();
    });
  });

  context('Invalid Credentials', () => {
    it('C3755. Wrong password shows error.', () => {
      loginPage.fillEmail(email);
      loginPage.fillPassword('wrongPassword123');
      loginPage.submit();
      loginPage.alertMessageVisibility();
    });

    it('C3756. Invalid email shows error.', () => {
      loginPage.fillEmail('invalid@email.com');
      loginPage.fillPassword(password);
      loginPage.submit();
      loginPage.alertMessageVisibility();
    });

    it('C3757. Empty fields show validation.', () => {
      loginPage.fillEmail(' ');
      loginPage.fillPassword(' ');
      loginPage.submit();
      loginPage.alertMessageVisibility();
    });
  });
});
