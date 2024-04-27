/// <reference types="cypress" />



describe('Projeto Cypress API',()=> {

  beforeEach(()=>{

  })

  it('Criar uma conta',()=>{

    cy.request({
      method:'POST',
      url: 'https://barrigarest.wcaquino.me/signin',
      body:{
        email:"jeanfelippe500@gmail.com",
        redirecionar:false,
        senha:"123"
      }
    }).its('body.token').should('not.be.empty')
    .then(token=>{
      cy.request({
        url: 'https://barrigarest.wcaquino.me/contas',
        method:'POST',
        headers: { Authorization: `JWT ${token}`},
        body:{
          nome: 'Contas123 via rest do Jean12345'
        }
      //}).then(res=>console.log(res))


    }).as('response')
  })
  cy.get('@response').then(res=>{
    expect(res.status).to.be.equal(201)
    expect(res.body).to.have.property('id')
    expect(res.body).to.have.property('nome','Contas123 via rest do Jean12345')
  })
})


  it('Alterar uma conta',()=>{


  })


  it('Cadastrar movimentacao',()=>{

  })


  it('Excluir Saldo',()=>{

  })



})


