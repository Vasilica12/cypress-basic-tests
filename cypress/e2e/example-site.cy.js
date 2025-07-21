describe('💡 Example Cypress Tests with Dropdown Fixed', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('✅ Should open homepage', () => {
    cy.contains('Kitchen Sink').should('be.visible');
  });

  it('✅ should display the correct main heading', () => {
    cy.get('h1').should('be.visible').and('contain.text', 'Kitchen Sink')
  })


  it('✅ Should open "Commands > Querying" via dropdown click', () => {
    cy.contains('Commands').click();

    cy.contains('Querying').click();

    cy.url().should('include', '/commands/querying');
    cy.get('.container h1').should('contain.text', 'Querying');
  });

  it('✅ Should open "Actions" page and type in email field test@example.com', () => {
    cy.contains('Commands').click();
    cy.contains('Actions').click();

    cy.get('.action-email')
      .type('test@example.com')
      .should('have.value', 'test@example.com');
  });
});
