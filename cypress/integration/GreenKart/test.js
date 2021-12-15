/// <reference types="Cypress" />             

describe("My first Test suit", function() {
    it("First test", function() {
        cy.viewport(1024, 768);
        cy.visit(Cypress.env("url") + "/seleniumPractise/#/");
        cy.get(".search-keyword").type("ca");
        cy.wait(1000);
        cy.get(".product").should("have.length", 5);
        cy.get(".product:visible").should("have.length", 4);

        //work only in browser not in TestRunner
        console.log("Hello");

        //work in TestRunner
        cy.log("Hello Cypress");

        //productsLocator
        cy.get(".products").as("productsLocator");
        //parent child chaining
        cy.get("@productsLocator").find(".product").should("have.length", 4);

        //console.log workd because of then()
        cy.get("@productsLocator").find(".product").eq(1).contains("ADD TO CART").click().then(function() {
            console.log("Hello2 ");
        });
        cy.get(':nth-child(1) > .product-action > button').click();

        //using each() for looking elements in array
        cy.get("@productsLocator").find(".product").each(($el, index, $list) => {

            const textVeg = $el.find("h4.product-name").text();
            if (textVeg.includes("Cashews")) {
                $el.find("button").click();
            }

        })

        //assert if logoElement is displayed correct
        cy.get(".brand").should("have.text", "GREENKART");

        //using then() for non cypress commands and this is print in logs
        cy.get(".brand").then(function(logoElement) {
            cy.log(logoElement.text());

        })

    })






})