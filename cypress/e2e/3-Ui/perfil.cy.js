/// <reference types ="cypress" />

describe('', () => {

    beforeEach(() => {
        cy.visit('/login')
        cy.loginRapido()
        cy.get('[data-test="dashboard-createProfile"]').click()
    });

    it('Deve cadastrar o perfil com sucesso', () => {
        cy.get('#mui-component-select-status').click()
        cy.contains('Especialista em QA').click()
    });
});