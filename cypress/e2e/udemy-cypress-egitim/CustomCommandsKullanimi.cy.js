describe('Custom Commands', () => {
    beforeEach(() => {
        cy.visit('https://automationexercise.com/login')
    });
    it('Custom Commands Ornekler Invalid username Valid pasword', () => {
        cy.login('deneme@123.com','12345')
    });
    it('Custom Commands Ornekler Valid username Invalid password', () => {
        cy.login('deneme@abd.com','parola2')
    });
});