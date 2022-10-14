/// <reference types="cypress" />

describe('Modal Should vanish when button clicked', () => {
    it('Visits Memory Oostao', () => {
      cy.visit('https://memory-test-pearl.vercel.app/')
    })
    it("find the modal button", () => { 
        cy.contains('Jouer')
    })
    it("click on the button of the modal", () => { 
        cy.contains('Jouer').click()
    })
    it("must not find the button", () => { 
        cy.contains('Jouer').should('not.be.visible')
    })
    it("on click card should flipped", () => { 
        cy.get(':nth-child(1) > .sc-ftTHYK').click()
    })
  })
