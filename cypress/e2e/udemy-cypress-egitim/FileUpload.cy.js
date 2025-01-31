describe('Cypress File Upload', () => {
    it('Dosya yukleme - 1', () => {
        cy.visit('https://www.qrcode-monkey.com/')
        cy.get('div:nth-child(3) > div.pane-header > h3').click()
        cy.get('.logo-preview').attachFile({filePath: "en-nesyri.jpg"}, {subjectType: 'drag-n-drop'})
    });

    it('Dosya yukleme - 2 Daha çok convert işlemleri için', () => {
        cy.visit('https://www.qrcode-monkey.com/')
        cy.get('div:nth-child(3) > div.pane-header > h3').click()

        const fileName = 'en-nesyri.jpg'
        cy.fixture('en-nesyri.jpg')
        .then(Cypress.Blob.base64StringToBlob)//convert islemi icin
        .then((fileContent) => {
            cy.get('.logo-preview').attachFile(
                {fileContent, fileName, mimeType: 'image/**'}, {subjectType: 'drag-n-drop'}
            )
        })
    });
});