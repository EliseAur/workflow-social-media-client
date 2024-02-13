describe("logout", () => {
  beforeEach(() => {
    cy.visitHome();
  });

  it("allows a valid user to logout with the logout button", () => {
    cy.showLoginForm();

    cy.loginWithValidUser();

    cy.isLoggedIn();

    cy.logout();

    cy.isLoggedOut();
  });
});
