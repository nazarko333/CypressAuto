//iframe

/// <reference types="Cypress" />    
/// <reference types="cypress-iframe" />            
import "cypress-iframe"



describe("My second Test suit", function() {
    it("First test", function() {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        //load iframe
        cy.frameLoaded("#courses-iframe");
        //handle inside iframe shouls use (iframe())
        cy.iframe().find('a[href*="mentorship"]').eq(0).click();

        cy.iframe().find('h1[class *= "pricing-title"]').should("have.length", 2);







    })






})