describe('empty spec', () => {

  it('Passo - 1', () => {
    cy.visit('https://google.com.br')
  })

  it('Passo - 2', () => {
    cy.get('input[name=q]').type('Fogão 4 bocas ')
  })

  it('Passo - 3', () => {
    cy.get('form').submit()
  })

  it('Passo - 4', () => {
    cy.contains('Fogão 4 Bocas').click()
  })

})