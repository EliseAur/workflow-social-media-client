describe("invalidLogin", () => {
  beforeEach(() => {
    cy.visitHome();
  });

  it("shows a message if the user try to submit the login form with invalid password", () => {
    cy.showRegisterForm();

    cy.showLoginForm();

    cy.interceptInvalidLogin();

    cy.loginWithInvalidPassword();

    cy.showAlertMessageForInvalidPassword();

    cy.checkNetworkResponseInvalidLogin();
  });

  it("shows a message if the user try to submit the login form with invalid email", () => {
    cy.showRegisterForm();

    cy.showLoginForm();

    cy.interceptInvalidLogin();

    cy.loginWithInvalidCredentials();

    cy.showAlertMessageForInvalidEmail();

    cy.checkNetworkResponseInvalidLogin();
  });
});
