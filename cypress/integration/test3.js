/// <reference types="Cypress" />             

describe("My second Test suit", function() {

    it("First test", function() {

        //check boxes
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get("#checkBoxOption1").check().should("be.checked").and("have.value", "option1");
        cy.get("#checkBoxOption1").uncheck().should("not.be.checked").and("have.value", "option1");
        cy.get('input[type="checkbox"]').check(["option2", "option3"]);

        //static dropdown
        cy.get("select").select("option2").should("have.value", "option2");

        //dynamic dropdown
        cy.get("#autocomplete").type("ind");

        cy.get(".ui-menu-item div").each(($el, index, $list) => {

            if ($el.text() === "India") {
                $el.click();
            }

        })

        //check value of "India"
        cy.get("#autocomplete").should("have.value", "India");

        //check if field is visible or invisible
        cy.get("#displayed-text").should("be.visible");
        cy.get("#hide-textbox").click();
        cy.get("#displayed-text").should("not.be.visible");
        cy.get("#show-textbox").click();
        cy.get("#displayed-text").should("be.visible");

        //radiobuttons
        cy.get('input[value="radio2"]').check().should("be.checked");





    })






})