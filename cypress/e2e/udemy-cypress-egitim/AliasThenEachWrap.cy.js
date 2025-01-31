describe('Alias, Then, Each, Wrap', () => {
    it('Kullanim Örnekleri', () => {
        let itemlength

        cy.visit('https://shopist.io/')

        cy.get('.navbar-section a').should('be.visible').as('NavbarMenus') //Alias olarak
        cy.get('@NavbarMenus').then(($el) => {
            itemlength=$el.length
        }).each(($el, index)=>{
            cy.log('Navbar Menu '+ index + ": "+$el.text())

            if($el.text().includes('Cart')){
                cy.wrap($el).click()
            }
        })
    });
});