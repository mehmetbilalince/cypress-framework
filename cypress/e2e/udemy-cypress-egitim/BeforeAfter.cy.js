describe('Before After Kullanımı', () => {
    before(() => {
        cy.log('Before Kullanımı - Cypress Test')
        cy.visit('https://automationexercise.com')
    });
    it('Başlığı Doğrula', () => {
        cy.title().should('eq',"Automation Exercise")
    });
    after(() => {
        cy.log('After Kullanımı - Cypress Test')
    });
});