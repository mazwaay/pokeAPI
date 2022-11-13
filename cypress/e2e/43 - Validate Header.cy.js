describe('Headers', () => {
    it.only('Validate Header', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon').then((response) => {
        cy.get('@pokemon').its('headers').its('content-type')
            .should('include', 'application/json; charset=utf-8')
            expect(response.headers).to.have.property('content-type', 'application/json; charset=utf-8')
    });
})
});


// cy.request('POST', 'https:reqres.in/api/users', user).then((response) => {
//     expect(response.status).equal(201)
//     expect(response.body).to.have.property('name', 'Wahyu')
//     expect(response.body).to.have.property('job', 'QA Engineer')