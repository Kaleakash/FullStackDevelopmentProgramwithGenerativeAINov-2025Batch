/// <reference types="cypress" />


describe('example to-do app', () => {
  beforeEach(() => {

    cy.visit('https://www.google.com/')
  })

  it('google page testing', () => {
    
    //cy.get('.todo-list li').should('have.length', 2)
    cy.get("#APjFqb").type("What is cypress testing");
    
    //cy.get('button').as('btn').click()
    cy.get(".gNO89b").first().click();
     cy.contains("cypress testing").should("be.visible")
  })


})
