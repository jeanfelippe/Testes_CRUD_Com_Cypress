/// <reference types="cypress" />



describe('Projeto Cypress API',()=> {

  beforeEach(()=>{

        //Me autentiquei novamente para pegar o token e acessar/requisitar reset, sendo assim, antes de qualquer ação, será realizado reset dos dados que inseri anteriormente
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
          url: 'https://barrigarest.wcaquino.me/reset',
          method:'GET',
          headers: { Authorization: `JWT ${token}`}
        }).its('status').should('be.equal',200)
    
        })

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
          nome: 'Contaaaaaxxs123 via rest do Jean12345'
        }
      //Conseguirei cadastrar uma conta com esse nome toda vez que entrar sem problemas de nome já existente, por conta do reset localizado no BeforeEach que limpará a base toda vez que  requisitar login


    }).as('response')
  })
  cy.get('@response').then(res=>{
    expect(res.status).to.be.equal(201)
    expect(res.body).to.have.property('id')
    expect(res.body).to.have.property('nome','Contaaaaaxxs123 via rest do Jean12345')
  })


  



  
})  


  it('Alterar uma conta',()=>{

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
        method:'GET',
        url: 'https://barrigarest.wcaquino.me/contas',
        headers: { Authorization: `JWT ${token}`},
        qs:{
          nome: 'Conta para alterar'
        }
      }).then(res=>{
        cy.request({
          url: `https://barrigarest.wcaquino.me/contas/${res.body[0].id}`,
          method:'PUT',
          headers: { Authorization: `JWT ${token}`},
          body:{
            nome: 'Conta alterada com sucessoo'
      }
    }).as('response')


  })

  })
  })

  it('Cadastrar movimentacao',()=>{

  })


  it('Excluir Saldo',()=>{

  })



})


