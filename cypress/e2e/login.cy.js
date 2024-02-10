//shows a register form
//shows a login form when the login button is pressed
//allows a valid, registered user to login
//allows a valid user to log out

//the user can log out with the logout button

//the user cannot submit the login form with invalid credentials
//the user is shown a message if he tries to log in with invalid credentials

describe("Authentication", () => {
  beforeEach(() => {
    cy.visitHome();
  });

  it("shows a register form", () => {
    cy.get("#registerForm").should("be.visible");
  });

  it("shows a login form when the login button i pressed", () => {
    cy.showLoginForm();
  });

  it("allows a valid, registered user to login", () => {
    cy.showLoginForm();

    cy.loginWithTestUser();

    cy.isLoggedIn();
  });

  it("allows a valid user to logout", () => {
    cy.showLoginForm();

    cy.loginWithTestUser();

    cy.isLoggedIn();

    cy.logout();

    cy.isLoggedOut();
  });
});
