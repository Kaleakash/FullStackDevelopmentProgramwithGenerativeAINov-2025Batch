/// <reference types="cypress" />


describe('example to-do app', () => {
  beforeEach(() => {

    cy.visit('http://localhost:3000/index.html')
  })

  it('login page testing', () => {
    
    //cy.get('.todo-list li').should('have.length', 2)
    cy.get("#emailId").type("akash@gmail.com");
    cy.get("#password").type("akash@123");
    cy.get("#b1").click();

    cy.url().should("include","/welcome.html");

    cy.contains("Welcome to Home Page").should("be.visible")
  })


})
