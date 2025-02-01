describe('403 hatasına karşı çözüm', () => {
    it('403 hata sorunu', () => {
        cy.visit(('https://www.airnb.de/'), {
            headers:{
                "User-Agent":"axios/0.27.1"
            }
        })
    });
});