/// <reference types="Cypress" />             

describe("My second Test suit", function() {

    it("First test", function() {


        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");


        //for table 
        cy.get("tr td:nth-child(2)").each(($el, index, $list) => {

            const text = $el.text();
            if (text.includes("Python")) {
                cy.get("tr td:nth-child(2)").eq(index).next().then(function(price) {
                    const priceText = price.text();
                    expect(priceText).to.equal("25");
                });
            }

        })







    })






})