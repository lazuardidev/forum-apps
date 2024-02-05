describe("Login spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("should display login page correctly", () => {
    cy.get("input[placeholder=\"Email Address\"]").should("be.visible");
    cy.get("input[placeholder=\"Password\"]").should("be.visible");
    cy.get("button").contains(/^Sign In$/).should("be.visible");
  });

  it("should display alert when email is empty", () => {
    cy.get("button").contains(/^Sign In$/).click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal("\"email\" is not allowed to be empty");
    });
  });

  it("should display alert when password is empty", () => {
    cy.get("input[placeholder=\"Email Address\"]").type("testuser@gmail.com");
    cy.get("button").contains(/^Sign In$/).click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal("\"password\" is not allowed to be empty");
    });
  });

  it("should display alert when email and password are wrong", () => {
    cy.get("input[placeholder=\"Email Address\"]").type("testuser@gmail.com");
    cy.get("input[placeholder=\"Password\"]").type("wrong_password");

    cy.get("button").contains(/^Sign In$/).click();

    cy.on("window:alert", (str) => {
      expect(str).tp.equal("email or password is wrong");
    });
  });

  it("should display homepage when username and password are correct", () => {
    cy.get("input[placeholder=\"Email Address\"]").type("test11@mail.com");
    cy.get("input[placeholder=\"Password\"]").type("test11");

    cy.get("button").contains(/^Sign In$/).click();

    cy.get("button")
      .contains(/^Logout$/)
      .should("be.visible");
  });
});
