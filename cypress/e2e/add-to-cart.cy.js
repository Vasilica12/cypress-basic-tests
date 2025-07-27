describe('Adăugare produs în coș', () => {
  beforeEach(() => {
    cy.visit('http://www.automationpractice.pl');
  });

  it('✅ Adaugă un produs în coș cu succes', () => {
    cy.get('.product-container').first().trigger('mouseover');
    cy.get('.ajax_add_to_cart_button').first().click();
    cy.get('.layer_cart_product h2').should('contain', 'Product successfully added');
  });

  it('❌ Încearcă să adauge fără a alege un produs (simulare)', () => {
    // Simulare negativă: forțăm click pe buton fără produs vizibil
    cy.get('.ajax_add_to_cart_button').first().invoke('hide');
    cy.get('.ajax_add_to_cart_button').first().click({ force: true });
    cy.get('.layer_cart_product h2').should('not.exist');
  });
});
