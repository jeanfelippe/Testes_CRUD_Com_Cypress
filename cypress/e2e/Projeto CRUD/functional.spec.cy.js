/// <reference types="cypress" />

describe('Projeto Cypress',()=> {

  before(()=>{
      cy.visit('https://barrigareact.wcaquino.me/')
  })

  it('login',()=>{
      cy.get('[data-test=email]').type('jeanfelippe500@gmail.com')
      cy.get('[data-test=passwd]').type('123')
      cy.get('.btn').click()
   
  })


})


