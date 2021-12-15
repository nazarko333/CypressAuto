/// <reference types="Cypress" />             

describe("My second Test suit", function() {

    it("First test", function() {


        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        //alert, confirm
        cy.get('#alertbtn').click();
        //handle alert
        cy.on("window:alert", (str) => {
            //mocha
            expect(str).to.equal("Hello , share this practice page and share your knowledge");

        })

        cy.get('[value="Confirm"]').click();
        cy.on("window:confirm", (str) => {
            //mocha
            expect(str).to.equal("Hello , Are you sure you want to confirm?");

        })


        //tabs we must remove attr because page open in other tab and Cypress cannot handle it
        cy.get("#opentab").invoke("removeAttr", "target").click();

        //url
        cy.url().should("include", "rahulshettyacademy")

        //navigation between your actions (back, forward)
        cy.go("back");

        cy.url().should("include", "rahulshettyacademy")








    })






})