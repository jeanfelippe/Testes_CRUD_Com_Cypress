/// <reference types="cypress" />

describe('Projeto Cypress',()=> {

  before(()=>{
      cy.visit('https://barrigareact.wcaquino.me/')
      cy.get('[data-test=email]').type('jeanfelippe500@gmail.com')
      cy.get('[data-test=passwd]').type('123')
      cy.get('.btn').click()
      //cy.get('.toast').should('contain','Bem Vindo')
  })

  it('Criar uma conta',()=>{
    cy.get('[data-test="menu-settings"]').click()
    cy.get('[href="/contas"]').click()
    cy.get('[data-test="nome"]').type('conta teste2')
    cy.get('.btn').click()

  
  })




})


