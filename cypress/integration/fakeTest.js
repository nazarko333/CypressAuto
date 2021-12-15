/// <reference types="Cypress" />             


//mocking api and manipulate with api and request and response
describe("My first Test suit", function() {
    it("First test", function() {
        cy.visit("https://example.cypress.io/commands/network-requests");
        cy.server();
        cy.route({
            method: "PUT",
            url: "comments/*",
            status: 404,
            response: {
                error: "Hey Comment do not exist"
            },
            delay: 1000

        }).as("UpdateComment");

        cy.get(".network-put").click();
        cy.get('.network-put-comment').should("contain", "Hey Comment do not exist");

    })
})