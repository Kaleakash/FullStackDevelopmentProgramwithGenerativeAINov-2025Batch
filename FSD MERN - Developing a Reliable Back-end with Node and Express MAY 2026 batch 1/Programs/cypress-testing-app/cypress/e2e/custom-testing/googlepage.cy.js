/// <reference types="cypress" />

describe('Google Search Test', () => {

  it('Search for Cypress Testing', () => {

    cy.visit('https://www.google.com/');

    // Type search text and press Enter
    cy.get('textarea[name="q"]')
      .should('be.visible')
      .type('What is Cypress Testing{enter}');

    // Verify search results page
    cy.url().should('include', 'search');

    // Verify search text appears on page
    cy.contains('Cypress', { matchCase: false })
      .should('be.visible');
  });

});