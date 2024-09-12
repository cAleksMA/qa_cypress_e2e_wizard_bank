/// <reference types='cypress' />

describe("Bank app", () => {
  before(() => {
    cy.visit("/");
  });

  it("Should provide the ability to work with Hermione's bank account", () => {
    cy.contains(".btn", "Customer Login").click();
    cy.get("#userSelect").select("Hermoine Granger");
    cy.contains(".btn", "Login").click();

    cy.get("#accountSelect").select("1001");
    cy.get("strong.ng-binding").contains("5096");
    cy.get("strong.ng-binding").contains("Dollar");

    cy.contains("Deposit").click();

    cy.get("input[placeholder='amount']").type("1000");
    cy.contains("Deposit").click();
    cy.get("[ng-show='message']").should("contain", "Deposit Successful");
  });
});
