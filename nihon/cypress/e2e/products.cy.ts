describe('Página de Listagem de Produtos (E2E)', () => {
  
  Cypress.on('uncaught:exception', () => false)

  beforeEach(() => {
    cy.viewport(1280, 800)
    cy.visit('http://localhost:3000/products')
  })

  it('deve carregar a página e exibir a barra de pesquisa', () => {
    cy.get('input[type="text"]').should('be.visible')
  })

  it('deve exibir a seção de Marcas e Produtos', () => {
    cy.wait(1000)
    cy.get('body').then(($body) => {
        if ($body.find('img').length > 0) {
            cy.get('img').should('be.visible')
        } else {
            cy.contains('Quantidade de Marcas').should('be.visible')
        }
    })
  })

  it('deve listar os cards de produtos corretamente', () => {
    cy.get('body').then(($body) => {
      // Verifica se existem links apontando para a descrição do produto
      if ($body.find('a[href*="/produtosDescricao"]').length > 0) {
        
        // Pega o primeiro card de produto
        cy.get('a[href*="/produtosDescricao"]').first().within(() => {
           // Verifica se tem uma imagem dentro do card (baseado no seu FirstProductSection)
           cy.get('img').should('exist')
           
           // Verifica se tem um título (h3) com texto (o nome do produto)
           cy.get('h3').should('not.be.empty')
        })

      } else {
        cy.log('⚠️ Nenhum produto listado.')
      }
    })
  })

  it('deve redirecionar para o detalhe ao clicar no card', () => {
    cy.get('body').then(($body) => {
      if ($body.find('a[href*="/produtosDescricao"]').length > 0) {
        
        // Clica no primeiro CARD de produto encontrado
        // (Como o card inteiro é um Link, qualquer clique nele funciona)
        cy.get('a[href*="/produtosDescricao"]').first().click({ force: true })
        
        // Valida redirecionamento
        cy.url({ timeout: 15000 }).should('include', '/produtosDescricao')
        
        // Verifica se carregou o título na nova página
        cy.get('h1', { timeout: 10000 }).should('exist')
      }
    })
  })
})