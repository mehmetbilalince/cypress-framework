describe('BeforeEach AfterEach Kullanımı', () => {
    beforeEach(() => {
        cy.log('BeforeEach Kullanımı - Cypress Test')
        cy.visit('https://automationexercise.com')
    });

    afterEach(() => {
        cy.log('AfterEach Kullanımı - Cypress Test')
    });
    
    it('Başlığı Doğrula', () => {
        cy.title().should('eq',"Automation Exercise")
    });

    it('Url Doğrula', () => {
        cy.url().should('include',"automation")
    });

   
});