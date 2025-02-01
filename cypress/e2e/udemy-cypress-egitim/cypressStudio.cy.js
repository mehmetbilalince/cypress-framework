describe('Cypress Studio Kullanımı', () => {
    it('ornek kullanim', () => {
        cy.visit('https://shopist.io/')
        /* ==== Generated with Cypress Studio ==== */
        cy.get('.sofas > .menu-item-large-container > .menu-item-large').click();
        cy.get('.lighting > .menu-item-large-container > .menu-item-large').click();
        cy.get('.products > :nth-child(1) > :nth-child(1) > .product-card > img').click();
        cy.get('.modal-button').click();
        cy.get('.profile > .menu-item-large-container > .menu-item-large').click();
        /* ==== End Cypress Studio ==== */
    });
});