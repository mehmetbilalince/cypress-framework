describe('Cypress Fixture Commands', () => {
    beforeEach(() => {
        cy.visit('https://automationexercise.com/login')
    });
    it('Cypress Fixture Data Kullanim Ornekler Invalid username Valid pasword', () => {
        cy.fixture("loginData").as('credentials')
        
        cy.get('@credentials').then((data)=>{
            cy.login(data.invalidUsername, data.validPassword)
        })
    });
    it('Cypress Fixture Data Kullanim Ornekler Valid username Invalid password', () => {
        cy.fixture("loginData").as('credentials')
        
        cy.get('@credentials').then((data)=>{
            cy.login(data.validUsername, data.invalidPassword)
        })
    });
});