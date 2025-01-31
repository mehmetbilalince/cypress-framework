describe('Cypress Locator', () => {
    cy.get('#user-name') //id locate etme
    cy.get('.login-box') //class locate etme
    cy.get('input[name="user-name"]') //input tagının içinde name'i user-name olan
    cy.get('a:contains("Login")') //Text içeren element locate
    cy.get('a').contains("Login")
});