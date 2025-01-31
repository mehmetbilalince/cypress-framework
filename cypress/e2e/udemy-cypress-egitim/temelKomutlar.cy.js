describe('Temel Komutlar', () => {
    it('Temel Komutlar cy.visit Kullanimi', () => {
        cy.visit("/") //baseUrl tanimlandiysa yani "/" işareti baseUrl'e gider.
        cy.visit("/commands")  //https://example.cypress.io/commands adresine gider
        cy.visit("https://example.cypress.io/commands") //veya burada da yazabiliriz.
        cy.visit({
            url:"https://example.cypress.io/",
            method:"GET"
        })
    });
    it('Temel Komutlar cy.tittle kullanımı', () => {
        cy.title().should('eq',"cypress.io") //tittle tam eşitlik olursa doğrular
        cy.title().should('include',"cypress") //tittle içinde cypress geçerse doğrular
        cy.title().should('contain',"cypress") //tittle içinde cypress geçerse doğrular
    });
    it('Temel Komutlar cy.url ve cy.location kullanımı', () => {
        cy.url().should('eq','https://example.cypress.io/commands') //url tam eşitlik olursa doğrular
        cy.url().should('inculde','/commands') //url içerisinde commands geçiyorsa doğrular

        cy.location('pathname'.should('eq','/commands'))// gidilen pathi doğrulamış oluyoruz
        cy.location('protocol'.should('eq','https'))// gidilen protokolü doğrulamış oluyoruz
        cy.location('hostname'.should('eq','https://example.cypress.io/commands'))// tam eşitlikte doğrular
        cy.location('hostname'.should('include','cypress.io'))// cypress.io içerirse hostname doğrular
    });
    it('Temel Komutlar cy.get kullanımı', () => {
        cy.get("#button") //doğru kullanım
        cy.get("#button").as('deneme') //cy.get('@deneme')
    });
    it('Temel Komutlar cy.log kullanımı', () => {
        cy.log('Temel Komut cy.log kullanımı') //testimizi çalıştırdığımızda bu mesaj gözükecektir
    });
});