/// <reference types ="cypress" />

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('/login')
    });

    it.only('Deve fazer o login com sucesso', () => {
        cy.fixture("login").then((user) => {
            cy.login(user.email, user.senha)
            //cy.get('[data-test="dashboard-welcome"]').should('contain', `Ben-vindo ${user.nome}`)           
            
            /*cy.get('[data-test="login-email"] > .MuiInputBase-root > .MuiInputBase-input').type(user.email)        
            cy.get('[data-test="login-password"] > .MuiInputBase-root > .MuiInputBase-input').type(user.senha)
            cy.get('[data-test="login-submit"]').click()*/            
        })
    });

    it('Deve fazer o login sem sucesso', () => {
        cy.login('ane@bol.com.br', user.senha)
        cy.login
            
    });
});