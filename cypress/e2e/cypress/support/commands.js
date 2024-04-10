// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//

import loc from './locators'

Cypress.Commands.add('clickAlert',(locator,message)=>{
    cy.get(locator).click()
    cy.on('window:alert',msg=>{
        expect(msg).to.be.equal(message)
    })
})

//função login acabou não sendo utilizada por falha na interpretação do cypress
Cypress.Commands.add('login',(user,passwd)=>{
    cy.visit('https://barrigareact.wcaquino.me/')
      cy.get(loc.LOGIN.USER).type('jeanfelippe500@gmail.com')
      cy.get(loc.LOGIN.PASSWORD).type('123')
      cy.get(loc.LOGIN.BTN_LOGIN).click()
})


Cypress.Commands.add('resetApp',()=>{
    cy.get(loc.MENU.SETTINGS).click()
    cy.get(loc.MENU.RESET).click()

})