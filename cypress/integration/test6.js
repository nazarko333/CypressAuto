/// <reference types="Cypress" />             

describe("My second Test suit", function() {

    it("First test", function() {


        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");


        //mouse hover cypress doesn`t support it so we can use use jquery for it

        // cy.get("div.mouse-hover-content").invoke("show");
        // cy.contains("Top").click();
        // cy.url().should("include", "top");

        //we can handle mouse hover without show() using force:true and then we can click invisible element
        cy.contains("Top").click({ force: true });
        cy.url().should("include", "top");






    })






})