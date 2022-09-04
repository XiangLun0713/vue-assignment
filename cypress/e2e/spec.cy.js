describe("My First Test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3333/");
    cy.get("#dragAndDropBtn").click();
  });

  it("Drop from container 1 to container 2", () => {
    const dataTransfer = new DataTransfer();

    cy.get("#0").trigger("dragstart", {
      dataTransfer,
    });

    cy.get("#container2").trigger("drop", {
      dataTransfer,
    });
  });
  it("Drop from container 2 to container 1", () => {
    const dataTransfer = new DataTransfer();

    cy.get("#2").trigger("dragstart", {
      dataTransfer,
    });

    cy.get("#container1").trigger("drop", {
      dataTransfer,
    });
  });
});
