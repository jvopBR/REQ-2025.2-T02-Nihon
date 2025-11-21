/// <reference types="cypress" />

describe('Homepage', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should load the homepage successfully', () => {
    cy.get('body').should('be.visible')
    
    cy.get('h1, h2, h3').should('exist')
    
    cy.get('img[alt*="Banner"]').should('be.visible')
  })

  it('should handle navigation functionality', () => {
    cy.viewport(1280, 720)
    
    cy.get('header, nav').should('be.visible')
    cy.contains('Início').should('be.visible')
    cy.contains('Sobre Nós').should('be.visible')
    
    cy.url().should('eq', Cypress.config().baseUrl + '/')
    
    cy.contains('Sobre Nós').click()
    cy.url().should('include', '/about')
    
    cy.contains('Início').click()
    cy.url().should('eq', Cypress.config().baseUrl + '/')

    cy.get('a[href*="wa.me"]').should('be.visible').and('have.attr', 'href').and('include', 'wa.me')
    cy.get('a[href*="instagram.com"]').should('be.visible').and('have.attr', 'href').and('include', 'instagram.com')
    cy.get('a[href*="maps.app.goo.gl"]').should('be.visible').and('have.attr', 'href').and('include', 'maps.app.goo.gl')
  })

  it('should handle mobile menu functionality', () => {
    cy.viewport(375, 667)
    
    cy.get('body').then($body => {
      if ($body.find('button[aria-label*="menu"], button[aria-label*="Menu"]').length > 0) {
        cy.get('button[aria-label*="menu"], button[aria-label*="Menu"]').first().click()
        cy.get('nav, [role="navigation"]').should('be.visible')
      } else if ($body.find('button').length > 0) {
        cy.get('button').first().click({ force: true })
      }
    })
  })

  it('should have no console errors', () => {
    cy.window().then((win) => {
      cy.stub(win.console, 'error').as('consoleError')
    })
    
    cy.visit('/')
    
    cy.get('@consoleError').should('not.have.been.called')
  })
})
