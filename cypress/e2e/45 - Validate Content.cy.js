describe('validate ', () => {
    it('Validate Content', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/bulbasaur').as('bulbasaur').then((response) => {
        cy.get('@bulbasaur').its('body').should('include', {name: "bulbasaur"})
        //expect(response.status).to.eq(200)
        //expect(response.body).to.have.property('abilities')
        expect(response.body.forms)

    })
})
});