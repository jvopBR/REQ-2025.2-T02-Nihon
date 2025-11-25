describe('Home Page (E2E)', () => {
  
  Cypress.on('uncaught:exception', () => false)

  beforeEach(() => {
    cy.viewport(1280, 800)
    cy.visit('http://localhost:3000/')
  })

  it('deve carregar a home e exibir o banner principal', () => {
    cy.get('img[alt="Banner principal"]').should('be.visible')
  })

  it('deve listar as categorias de texto no topo', () => {
    cy.contains('Supermercado').should('be.visible')
    cy.contains('Padaria e confeitaria').should('be.visible')
    cy.contains('Automação Comercial').should('be.visible')
  })

  it('deve navegar para a lista de produtos ao clicar no Card de Categoria', () => {
    // CORREÇÃO:
    // 1. Procuramos o card pelo texto visível "AÇOUGUE"
    // 2. Subimos até encontrar o elemento <a> (Link)
    // 3. Forçamos o clique para "atravessar" a animação do Framer Motion
    cy.contains('AÇOUGUE')
      .closest('a')
      .click({ force: true })

    // Verificação mais flexível da URL (aceita codificado ou decodificado)
    // A regex /A(%C3%A7|ç)ougue/ aceita tanto "Açougue" quanto "A%C3%A7ougue"
    cy.url({ timeout: 15000 }).should('match', /A(%C3%A7|ç)ougue\/products/)
    
    // Verifica se saiu da Home (garantia extra)
    cy.url().should('not.eq', 'http://localhost:3000/')
  })

  it('deve exibir os diferenciais da empresa (Ícones)', () => {
    cy.contains('Estoque Próprio').should('be.visible')
    cy.contains('Mais de 200 lojas montadas').should('be.visible')
  })

  it('deve carregar o carrossel de fornecedores', () => {
    // Verifica se pelo menos uma imagem do carrossel foi renderizada
    cy.get('img[src*="gelopar"]').should('exist')
  })
})