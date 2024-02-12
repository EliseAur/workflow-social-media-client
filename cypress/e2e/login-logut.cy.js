describe("loginAndLogout", () => {
  beforeEach(() => {
    cy.visitHome();
  });

  it("shows a register form", () => {
    cy.get("#registerForm").should("be.visible");
  });

  it("shows a login form when the login button is pressed", () => {
    cy.showLoginForm();
  });

  it("allows a valid, registered user to login", () => {
    cy.showLoginForm();

    cy.loginWithTestUser();

    cy.isLoggedIn();
  });

  it("shows a message if the user try to submit the login form with invalid email", () => {
    cy.showLoginForm();

    cy.intercept(
      "POST",
      "https://nf-api.onrender.com/api/v1/social/auth/login",
      {
        statusCode: 401,
        body: {
          error: "Unauthorized",
          message: "Only Noroff student or teacher emails are valid.",
        },
      },
    ).as("loginRequest");

    cy.loginWithInvalidCredentials();

    cy.get("#loginEmail").should(
      "have.attr",
      "title",
      "Only Noroff student or teacher emails are valid.",
    );
  });

  it("shows a message if the user try to submit the login form with invalid password", () => {
    cy.showLoginForm();

    cy.intercept(
      "POST",
      "https://nf-api.onrender.com/api/v1/social/auth/login",
      {
        statusCode: 401,
        body: {
          error: "Unauthorized",
          message: "Please register or login to view this page.",
        },
      },
    ).as("loginRequest");

    cy.loginWithInvalidPassword();

    cy.get(".alert")
      .should("be.visible")
      .and("contain.text", "Please register or login to view this page.");
  });

  it("allows a valid user to logout with the logout button", () => {
    cy.showLoginForm();

    cy.loginWithTestUser();

    cy.isLoggedIn();

    cy.logout();

    cy.isLoggedOut();
  });
});
