describe('BackForward Kullanımı', () => {
    it('tuningsepetim sayfasına gidip tarayıcıda ileri geri komutlarını öğreneceğiz', () => {
        cy.visit('https://tuningsepetim.com/');

        cy.get('div#navbarCollapse div:nth-child(6) > a').click();
        cy.title().should('eq', "Tuning Sepetim Ürünler - Tuning Sepetim");

        cy.go('back'); //back geri gelmek demektir. back yerine -1 de yazılabilir
        cy.title().should('eq', "Tuning Sepetim Ana Sayfa - Tuning Sepetim");

        cy.go('forward') //geri ürünler sayfasına döner. forward yerine 1 de yazılabilir
        cy.title().should('eq', "Tuning Sepetim Ürünler - Tuning Sepetim");
    });
});
