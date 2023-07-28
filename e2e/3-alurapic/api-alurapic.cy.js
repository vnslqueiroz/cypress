describe ('buscar fotos e dados' , () => {

    it.only ('buscar fotos do flavio' , () => {
    
        cy.request({
            method: 'GET',
            url: 'https://apialurapic.herokuapp.com/flavio/photos'
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body[0]).to.have.property('description')
            expect(res.body[0].description).to.be.equal('Farol iluminado')

        })

        
    })

    it.only ('login  do flavio' , () => {
        cy.request({
            method: 'POST',
            url: 'https://apialurapic.herokuapp.com/user/login',
            body: Cypress.env()   //Deve criar o corpo da requisição e criar uma variável de ambiente (Outro arquivo json)
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('id')  //Esta propriedade encontramos no preview da requisição
            expect(res.body.id).to.be.equal(1)  //Este ID encontramos no preview da requisição
            expect(res.body).to.have.property('email')
            expect(res.body.email).to.be.equal('flavio@alurapic.com.br')

        })

        
    })
})