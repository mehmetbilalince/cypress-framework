describe('Cypress Session Kullanimi', () => {
    beforeEach(() => {
        const username = 'denemee1234'
        const password = 'denemee123'
        cy.loginWithSession(username, password)
    });

    const { faker } = require('@faker-js/faker')
    let randomTitle = faker.word.words(3) // 3 kelimelik bir başlık üretir
    it('Siteye git ve bir makale ekle', () => {
        cy.visit('https://write.as/')
        cy.get("textarea#writer").type(randomTitle)
        cy.get('button#publish').click()
        cy.get('div#clip h1 > a > img.ic-18dp').trigger('mouseover');
        cy.get("div#clip li > ul > li:nth-child(1) > a").click()
        cy.get("div#official-writing a:nth-child(5)").click()
        cy.get("article#post-bpu497u23kcihhim a.user.hidden.delete.action").click()
    });
});