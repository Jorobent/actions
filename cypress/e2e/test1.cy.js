const cypress = require("cypress")

describe('empty spec', () => {
	it('passes', () => {
		cypress.visit('http://localhost:3000/')
	})
})