describe('User Flow', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('completes main user journey', () => {
    cy.get('[data-testid=nav-home]').should('be.visible');
    cy.get('[data-testid=nav-about]').click();
    cy.url().should('include', '/about');
    cy.get('h1').should('contain', 'About Page');
  });

  it('handles 404 routes correctly', () => {
    cy.visit('/invalid-route');
    cy.get('[data-testid=error-page]').should('be.visible');
  });
});