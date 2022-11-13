describe('Headers', () => {
    it.only('Validate Header', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon').then((response) => {
        cy.get('@pokemon').its('headers').its('content-type')
            .should('include', 'application/json; charset=utf-8')
            expect(response.status).to.eq(200)
            expect(response.headers).to.have.property('content-type', 'application/json; charset=utf-8')
            expect(response.headers).to.have.property('server', 'cloudflare')
            expect(response.body).to.not.be.null
            expect(response.body).to.have.property('abilities')
            expect(response.body).to.have.property('name', 'ditto')
    });
})
});

