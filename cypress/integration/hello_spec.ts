describe('cypress', () => {

  it('should get element and print it', () => {
    cy.visit('index.html');
    cy.get('#main')
      .contains('Hello')
      .then(element => {
        console.log(element)
      })
  })

})
