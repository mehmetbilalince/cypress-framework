describe('Cypress En Variables', () => {
    it('Ortam Değişkenleri Kullanım Örnekleri', () => {
        cy.visit(Cypress.env('amazon'))
    });
});