describe('Login e registro de usuário alura pic', () =>{

    beforeEach(() => {
        cy.visit('/')
        
    })

    //Inserindo os comandos personalizados com variáveis no Cypress utilizando it.only | Esses comandos ficam no arquivo gui_commands.js que nós mesmo criamos
    //Comando it.only faz com que apenas este item de teste rode

    it.only('fazer login usuario valido' , () => {
        cy.login(Cypress.env('userName'), Cypress.env('password'))
        cy.contains('button', 'login').click();
    })

    it ('login com user invalido' , () => {
        cy.get('input[formcontrolname="userName"]').type('flavin');
        cy.get('input[formcontrolname="password"]').type('1234');
        cy.contains('button', 'login').click();
        cy.on ('window:alert' , (str) => {
            expect(str).to.equal('Invalid user nam or password')

        })
    })

})