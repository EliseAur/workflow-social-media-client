describe("login", () => {
  beforeEach(() => {
    cy.visitHome();
  });

  it("allows the user to log in with valid credentials", () => {
    cy.showRegisterForm();

    cy.showLoginForm();

    cy.loginWithValidUser();

    cy.isLoggedIn();
  });
});
