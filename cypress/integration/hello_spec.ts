describe('cypress', () => {

  it('should get element and print it', () => {
    cy.visit('index.html');
    cy.get('#main')
      .then(element => {
        console.log(element)
      })
  })

})
