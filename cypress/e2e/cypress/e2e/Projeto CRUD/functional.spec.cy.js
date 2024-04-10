/// <reference types="cypress" />

import loc from '../../support/locators'

describe('Projeto Cypress',()=> {

  before(()=>{

    

      cy.visit('https://barrigareact.wcaquino.me/')
      cy.get(loc.LOGIN.USER).type('jeanfelippe500@gmail.com')
      cy.get(loc.LOGIN.PASSWORD).type('123')
      cy.get(loc.LOGIN.BTN_LOGIN).click()

      //reset
      cy.get(loc.MENU.SETTINGS).click()
      cy.get(loc.MENU.RESET).click()
      //cy.get('[data-test=email]').type('jeanfelippe500@gmail.com')
      //cy.get('[data-test=passwd]').type('123')
      //cy.get('.btn').click()
      //cy.get('.toast').should('contain','Bem Vindo')
  })

  it('Criar uma conta',()=>{
    cy.get(loc.MENU.SETTINGS).click()
    cy.get(loc.MENU.CONTAS).click()
    cy.get(loc.CONTAS.NOME).type('conta teste2')
    cy.get(loc.CONTAS.BTN_SALVAR).click()
    //cy.get('[data-test="menu-settings"]').click()
    //cy.get('[href="/contas"]').click()
    //cy.get('[data-test="nome"]').type('conta teste2')
    //cy.get('.btn').click()
  })

  it.only('Alterar uma conta',()=>{
    cy.get('[data-test="menu-settings"]').click()
    cy.get('[href="/contas"]').click()
    cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > .far').click()
    cy.get('[data-test="nome"]').clear().type('12')
    cy.get('.btn > .far').click()

  })



})


