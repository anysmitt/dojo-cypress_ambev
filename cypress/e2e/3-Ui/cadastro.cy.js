/// <reference types ="cypress" />

//atribuindo a variavel fake para ler a dependencia faker-br
const faker = require('faker-br')

context('Cadastro', () => {
     beforeEach(() => {
        cy.visit('/cadastrar')
     }); // a cada bloco ele executa o BeforeEach

     afterEach(() => {
        cy.screenshot()
     });

    // variavel pra email randonico
    const email = faker.internet.email()
    const name = faker.name.firstName() + ' ' + faker.name.lastName()

    it('Cadastro com sucesso', () => {
        cy.get('.large').should('exist').and('contain', 'Cadastrar')
        cy.log('passou')
        cy.get('[data-test="register-name"]').type(name)
        cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').type(email)
        cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').type('xxx234')
        cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').type('xxx234')
        cy.get('[data-test="register-submit"]').click()
        
        cy.wait(1000)
        ///verificação
        cy.get('[data-test="dashboard-welcome"]').should('be.visible')

        /*cy.get('[data-test="dashboard-createProfile"]').click()
        cy.wait(1000)   

        cy.get('#mui-component-select-status').select(cy.get('[data-test="status-1"]'))*/
        
    
    })

    /* 1 - Validar o não preenchimento dos campos obrigatórios, funcionalidade Criar sua conta; */
    it('Validar o não preenchimento', () => {
        cy.get('.large').should('exist').and('contain', 'Cadastrar')
        //cy.get('[data-test="register-name"]').type(name)
        //cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').type(email)
        //cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').type('xxx234')
        cy.get('[data-test="register-submit"]').click()

        cy.get('.MuiFormHelperText-root').should('be.visible') // valida se o componente ta visivel

        /*cy.get('.MuiFormHelperText-root').should('contain', 'Senha é')
        cy.get('.MuiFormHelperText-root').should('contain', 'Confirmar senha é')*/
        
    })

    /* 2- Login com sucesso, usando o usuário cadastrado. */

    it('Login com sucesso', () => {
        cy.get('[data-test="register-login"]').click()

        cy.get('[data-test="login-register"]').should('contain','Cadastrar')
        cy.get('[data-test="login-email"] > .MuiInputBase-root > .MuiInputBase-input').type('ane@bol.com.br')
        cy.get('[data-test="login-password"] > .MuiInputBase-root > .MuiInputBase-input').type('123456')
        cy.get('[data-test="login-submit"]').click()
        cy.get('.large').should('be.visible')
    })

    /* 3 - Login sem sucesso, usando um usuário inválido. */
    it.only('Login sem sucesso', () => {
        cy.get('[data-test="register-login"]').click()

        cy.get('[data-test="login-register"]').should('contain','Cadastrar')
        cy.get('[data-test="login-email"] > .MuiInputBase-root > .MuiInputBase-input').type('ane2@bol.com.br')
        cy.get('[data-test="login-password"] > .MuiInputBase-root > .MuiInputBase-input').type('123456')
        cy.get('[data-test="login-submit"]').click()

        cy.get('[data-test="alert"]').should('be.visible')
    });

   
    it('Preencher perfil', () => {
        cy.get('.large').should('exist').and('contain', 'Dashboard')
        cy.log('passou')
        cy.get('[data-test="dashboard-createProfile"]').click()
        cy.wait(1000)     
                  
    })

    it('Devo validar mensagem quando cadastrar com o e-mail repetido', () => {
            cy.visit('https://conexaoqa.herokuapp.com/cadastrar')
    
            cy.get('[data-test="register-name"]').type('Renato Santana')
            cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').type(email)
            cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').type('senha@54321')
            cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').type('senha@54321')
            cy.get('[data-test="register-submit"]').click()
    
            // verificacao da mensagem
            cy.get('[data-test="alert"]').should('contain', 'Usuário já registrado')
     })
         
        /*
        funcionalidade de cadastro

        Cenário: 
        */
})