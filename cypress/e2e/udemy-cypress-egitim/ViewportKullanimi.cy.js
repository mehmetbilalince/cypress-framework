describe('Viewport Kullanımı', () => {
    it('viewport with numbers', () => {
        cy.viewport(1200,1000)
        cy.visit('https://shopist.io/')
    });
    it('viewport with string', () => {
        cy.viewport('mackbook-16')
        cy.visit('https://shopist.io/')
    });
    it('viewport with string', () => {
        cy.viewport('iphone-se2')
        cy.visit('https://shopist.io/')
    });
});