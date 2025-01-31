describe('First Test with Cypress', () => {
    it('first test', () => {
        cy.visit('https://automationexercise.com/') // baseUrl tanımlanmamıştır
        cy.title().should('eq',"Automation Exercise") //title alanı ile tam eşleşme sağlar
        cy.url().should('eq','https://automationexercise.com/') //url tam eşitlik olursa doğrular
    });
});