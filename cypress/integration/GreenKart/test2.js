/// <reference types="Cypress" />             

describe("My second Test suit", function() {

    it("First test", function() {

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        // cy.visit("https://www.bing.com/");
        // cy.get("#sb_form_q").type("ca");
        // cy.get("#sa_5003").click();
        cy.get(".search-keyword").type("ca");
        cy.wait(1000);

        cy.get(".products").as("productsLocator");

        cy.get("@productsLocator").find(".product").each(($el, index, $list) => {

            const textVeg = $el.find("h4.product-name").text();
            if (textVeg.includes("Cashews")) {
                $el.find("button").click();
            }

        })

        cy.get('.cart-icon > img').click();
        cy.contains("PROCEED TO CHECKOUT").click();
        cy.contains("Place Order").click();

    })


    //https://rahulshettyacademy.com/AutomationPractice/



})