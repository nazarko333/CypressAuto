/// <reference types="Cypress" />             

describe("My second Test suit", function() {

    it("First test", function() {


        cy.visit(Cypress.env("url") + "/AutomationPractice/");

        //go to some address without delete _blank (because cypress doesn`t handle child tab and window) but it doesn't work if it`s other domain
        cy.get("#opentab").then(function(el) {
            const url = el.prop("href");
            cy.visit(url);

        })






    })






})