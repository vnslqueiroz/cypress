describe('Tela inicial usabilidade', () =>{

    beforeEach(() => {
        cy.visit('/')
    })

    it ('Verificando mensagens na tela inicial e botões de login e register', () =>{
        cy.contains('ap-vmessage','User name is required!').should('be.visible');
        cy.contains('ap-vmessage','Password is required!').should('be.visible');
        cy.contains('button', 'login').should('be.visible');
        cy.contains('a', 'Register now').should('be.visible');
    
    })

    

    



   

   


})