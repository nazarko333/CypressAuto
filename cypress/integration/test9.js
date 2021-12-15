/// <reference types="Cypress" />
import HomePage from "../support/pageObjects/HomePage"
import ProductPage from "../support/pageObjects/ProductPage"

describe("My second Test suit", function() {

    //fixtures and hooks
    before(function() {
        cy.fixture("example").then(function(data) {
            this.data = data;
        })
    })


    it("First test", function() {
        //we can make own config in our test without cypress.json and where we put it there will be timeout
        Cypress.config("defaultCommandTimeout", 8000);
        //pageObject
        const productPage = new ProductPage();
        const homePage = new HomePage();


        //using enviromental variables
        cy.visit(Cypress.env("url") + "/angularpractice/");

        //replace by pageObject
        homePage.getEditBoxtype().type(this.data.name);
        //cy.get('input[name="name"]:nth-child(2)').type(this.data.name);
        homePage.getGender().select(this.data.gender);
        //cy.get("select").select(this.data.gender);

        //validate attributes properties
        homePage.getTwoWayDataBinding().should("have.value", this.data.name);
        //cy.get(":nth-child(4) > .ng-untouched").should("have.value", this.data.name);
        homePage.getEditBoxtype().should("have.attr", "minlength", "2");
        //cy.get('input[name="name"]:nth-child(2)').should("have.attr", "minlength", "2");
        homePage.getEntrepreneaur().should("be.disabled");
        //cy.get('#inlineRadio3').should("be.disabled");

        //pause
        //cy.pause();

        //debug
        // cy.debug();

        //look for some elements with text


        homePage.getShopTab().click();
        //cy.get(':nth-child(2) > .nav-link').click();
        // cy.get("h4.card-title").each(($el, index, $list) => {
        //     if ($el.text().includes("Blackberry")) {
        //         cy.get("button.btn.btn-info").eq(index).click();
        //     }

        // })

        // //using commands.js
        // cy.selectProduct("Blackberry");
        // cy.selectProduct("Nokia Edge");

        //Parameterizing the test data from json files using each command
        this.data.productName.forEach(function(element) {
            cy.selectProduct(element);;
        });

        productPage.checkOutButton().click();

        //sum of products
        let sum = 0;
        cy.get("tr td:nth-child(4) strong").each(($el, index, $list) => {

            const amount = $el.text();
            let res = amount.split(" ");
            res = res[1].trim();
            sum += +res;
            cy.log(sum);


        }).then(function() {
            cy.log(sum);
        });

        cy.get("h3 strong").then(function(element) {
            const amount = element.text();
            let res = amount.split(" ");
            let total = +res[1].trim();
            expect(total).to.equal(sum);
        })

        //it's all was sum of products

        cy.contains("Checkout").click();
        cy.get("#country").type("India");
        //cy.wait(4000);
        cy.get(".suggestions > ul > li > a").click();
        cy.get("#checkbox2").click({ force: true });
        cy.get('input[type="submit"]').click();
        //cy.get(".alert").should("have.text", "Success! Thank you! Your order will be delivered in next few weeks :-).");
        //using mocha for assertion
        cy.get(".alert").then(function(element) {
                const actualText = element.text();
                expect(actualText.includes("Success")).to.be.true;
            })
            //cy.contains("Purchase").click();

        // run specific test with specific address
        //./node_modules/.bin/cypress run --spec cypress/integration/test9.js --env url=https://google.com --headed

        //command to show results on dashboard of cypress
        //  ./node_modules/.bin/cypress run --record --key 70b5c1ca-73b7-4d2e-93ae-b0c4e1243bb8

        //command to run our tests using mochawesome
        // ./node_modules/.bin/cypress run --reporter mochawesome --spec cypress/integration/test9.js --browser chrome


    })

})