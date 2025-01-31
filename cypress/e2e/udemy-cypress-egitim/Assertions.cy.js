describe('Cypress Assertions Kullanımı', () => {
    it('Assertion Kullanım Örnekleri', () => {
        cy.visit('https://shopist.io/')
        cy.title().should('eq','Shop.ist')
        cy.url().should('contain','shop')

        
        cy.get('#main section > a > div > div:nth-child(1)').should('be.visible') //selectorun görünür olup olmadığına baktık
        cy.get('#main section > a > div > div:nth-child(1)').should('be.visible').and('contain','Shop') //burada ise hem görünür mü? Hem de içerisinde "Shop diye bir kelime var mı ona baktık"
        cy.get('#main section > a > div > div:nth-child(1)').should('contain','Shop') // burada ise selectorun içerisinde sadece "Shop" kelimesi var mı onu kontrol ediyor.

        cy.get('#main section > a > div > div:nth-child(1)').should('have.text','Shop the look') // burada selectorun içerisindeki bütün textin doğruluğunu kontrol ediypr

        cy.get('#main section > a').should('have.attr','href','/department/chairs') // Seçilen linkin (<a> elementi), href özelliğinin /department/chairs olup olmadığını kontrol eder.
    });
});