/// <reference types="cypress" />

describe('About Page', () => {
  beforeEach(() => {
    cy.visit('/about')
  })

  it('should load the about page successfully', () => {
    cy.get('body').should('be.visible')
    
    cy.url().should('include', '/about')
    
    cy.get('div, section').should('have.length.greaterThan', 0)
  })

  it('should display hero section correctly', () => {
    cy.contains('Sobre a Nihon Automação').should('be.visible')
    
    cy.get('body').should('contain.text', 'A Nihon Automação atua no mercado desde 1995, atendendo as regiões do Distrito Federal e Goiás. Com quase 30 anos de experiência, evoluímos de uma empresa focada em software e assistência técnica para nos tornarmos referência na venda de equipamentos para o setor comercial supermercadista.')
    
    cy.get('img[alt*="Nihon"]').should('be.visible')
    cy.get('img').should('exist').and('be.visible')
  })

  it('should display experience section correctly', () => {
    cy.get('#experience').scrollIntoView({ duration: 1000 })
    cy.wait(1000)
    
    cy.contains('Nossa Experiência').should('be.visible')
    
    cy.get('body').should('contain.text', 'Dia a Dia')
    cy.get('body').should('contain.text', 'Super Adega')
    cy.get('body').should('contain.text', 'Supermercados Tatico')
    
    cy.contains('30').should('be.visible')
    cy.contains('Anos').should('be.visible')
    cy.contains('+40').should('be.visible')
    cy.contains('Empresas').should('be.visible')
    
    cy.contains('Grandes Projetos').should('be.visible')
    cy.contains('Atendimento Personalizado').should('be.visible')
  })

  it('should display values section correctly', () => {
    cy.get('#values').scrollIntoView({ duration: 1000 })
    cy.wait(1000)
    
    cy.contains('Nossos valores').should('be.visible')
    
    cy.contains('Excelência em Qualidade').should('be.visible')
    cy.contains('Atendimento Personalizado').should('be.visible')
    cy.contains('Inovação Tecnológica').should('be.visible')
    
    cy.get('body').should('contain.text', 'priorizamos a excelência em todos os nossos produtos')
    cy.get('body').should('contain.text', 'consultoria especializada')
    cy.get('body').should('contain.text', 'inovação tecnológica')
    
    cy.get('svg').should('have.length.greaterThan', 2)
  })

  it('should display location section correctly', () => {
    cy.get('#location').scrollIntoView({ duration: 1000 })
    cy.wait(1000)
    
    cy.contains('Nossa Localização').should('be.visible')
    
    cy.contains('Visite Nossa Sede').should('be.visible')
    cy.contains('Informações de Contato').should('be.visible')
    cy.contains('Como Chegar').should('be.visible')
    
    cy.get('body').should('contain.text', 'Taguatinga Norte')
    cy.get('body').should('contain.text', 'Brasília - DF')
    
    cy.contains('(61) 99961-4440').should('be.visible')
    cy.contains('contato@nihonautomacao.com.br').should('be.visible')
    cy.contains('Segunda a Sexta: 8h às 18h').should('be.visible')
    
    cy.get('img[alt*="Fachada"]').should('be.visible')
    cy.get('img').should('exist')
    
    cy.get('iframe').should('exist')
  })

  it('should display redirect section correctly', () => {
    cy.contains('Nossos Produtos').scrollIntoView({ duration: 500 })
    cy.wait(500)
    cy.contains('Nossos Produtos').should('be.visible')
    
    cy.get('.bg-primary').should('exist').and('contain.text', 'Nossos Produtos')
  })

  it('should display images correctly', () => {
    cy.get('#experience').scrollIntoView({ duration: 500 })
    cy.wait(500)
    cy.get('#values').scrollIntoView({ duration: 500 })
    cy.wait(500)
    cy.get('#location').scrollIntoView({ duration: 500 })
    cy.wait(500)
    
    cy.get('img').should('exist').and('be.visible')
    
    cy.get('img').each($img => {
      cy.wrap($img).should('have.attr', 'src').and('not.be.empty')
    })
    
    cy.get('img[alt*="Nihon"]').should('exist')
    cy.get('img[alt*="Fachada"]').should('exist')
  })
  it('should be responsive on different screen sizes', () => {
    const viewports = [
      { name: 'mobile', width: 375, height: 667 },
      { name: 'tablet', width: 768, height: 1024 },
      { name: 'desktop', width: 1280, height: 720 },
      { name: 'large-desktop', width: 1920, height: 1080 }
    ]

    viewports.forEach(viewport => {
      cy.viewport(viewport.width, viewport.height)
      
      cy.get('body').should('be.visible')
      cy.contains('Sobre a Nihon Automação').should('be.visible')
      
      cy.get('#experience').scrollIntoView({ duration: 500 })
      cy.wait(500)
      cy.contains('Nossa Experiência')
      
      cy.get('#values').scrollIntoView({ duration: 500 })
      cy.wait(500)
      cy.contains('Nossos valores')
      
      cy.get('#location').scrollIntoView({ duration: 500 })
      cy.wait(500)
      cy.contains('Nossa Localização')
      
      cy.contains('Nossos Produtos').should('be.visible')

      cy.get('body').then($body => {
        expect($body[0].scrollWidth).to.be.at.most(viewport.width + 50)
      })

      if (viewport.width < 768) {
        cy.get('button, [role="button"]').should('exist')
      } else {
        cy.scrollTo('top')
        cy.contains('Início').should('be.visible')
        cy.contains('Sobre Nós').should('be.visible')
      }
    })
  })

    it('should handle navigation functionality', () => {
    cy.viewport(1280, 720)
    
    cy.get('nav, header').should('be.visible')
    cy.contains('Início').should('be.visible')
    cy.contains('Sobre Nós').should('be.visible')
    
    cy.contains('Nossos Produtos').scrollIntoView({ duration: 500 })
    cy.wait(500)
    cy.contains('Nossos Produtos').click()
    cy.url().should('eq', Cypress.config().baseUrl + '/')
    
    cy.contains('Sobre Nós').click()
    cy.url().should('include', '/about')
    
    cy.get('nav, header').should('be.visible')
    cy.contains('Início').should('be.visible')
    cy.contains('Sobre Nós').should('be.visible')
  })
  
  it('should have proper animations and interactions', () => {

    cy.get('.hover-scale').should('exist')
    

    cy.get('[class*="transition"]').should('have.length.greaterThan', 0)
    

    cy.get('#location').scrollIntoView({ duration: 1000 })
    cy.wait(1000)
    cy.get('iframe').should('exist')
  })

  it('should display contact information comprehensively', () => {

    cy.get('#location').scrollIntoView({ duration: 1000 })
    cy.wait(1000)
    

    cy.contains('Endereço').should('be.visible')
    cy.contains('Horário de Funcionamento').should('be.visible')
    cy.contains('Telefone').should('be.visible')
    cy.contains('E-mail').should('be.visible')
    

    cy.contains('St. Qi QI 7 1° andar Loja 01/02').should('be.visible')
    cy.contains('72135-070').should('be.visible')
    cy.contains('Sábado: 8h às 12h').should('be.visible')
  })

  it('should have proper section structure and styling', () => {

    cy.get('.bg-white').should('exist').and('have.class', 'overflow-x-hidden')
    

    cy.get('.bg-primary').should('exist').and('be.visible') 
    cy.get('.bg-background').should('exist') 
    cy.get('.bg-muted\\/30').should('exist') 
    

    cy.contains('Sobre a Nihon Automação').should('be.visible')
    cy.get('#experience').scrollIntoView({ duration: 500 })
    cy.wait(500)
    cy.contains('Nossa Experiência') 
    cy.get('#values').scrollIntoView({ duration: 500 })
    cy.wait(500)
    cy.contains('Nossos valores') 
    cy.get('#location').scrollIntoView({ duration: 500 })
    cy.wait(500)
    cy.contains('Nossa Localização') 
    cy.contains('Nossos Produtos').should('be.visible') 
  })
})
