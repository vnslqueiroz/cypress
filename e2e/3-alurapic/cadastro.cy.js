describe('Login e registro de usuário alura pic', () =>{

    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com')
    })

    it('verifica mensagens validação', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Email is required!').should('be.visible');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Full name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
    })

    it('verifica mensagens de email invalido', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="email"]').type('vini');
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');
    })

    it('verifica mensagen de password fraco', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="password"]').type('123');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible');
    })
    
     //Atribui uma constante a uma variável para criar usuários em massa.
     // Os dados são coletados de um arquivo json previamente criado, como mostra o código abaixo  users.json

     const user = require ('../../fixtures/users.json')
     user.forEach(user => {
         
         it (`registrando o ${user.fullName} `, () => {
             cy.contains('a' , 'Register now').click();
             cy.get('input[formcontrolname="email"]').type(user.email);
             cy.get('input[formcontrolname="fullName"]').type(user.fullName);
             cy.get('input[formcontrolname="userName"]').type(user.userName);
             cy.get('input[formcontrolname="password"]').type(user.password);
             // Não codei para clicar no botão register para não poluir o ambiente com vários users!!
 
     })
     
     })





})