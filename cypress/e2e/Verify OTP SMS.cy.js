describe('OTP Varification by SMS', () => {

    it("TC-1: Verify OTP By SMS of OneStop LMS website", () => {
        //visit OneStopLMS website
        cy.visit('https://dev.onestoplms.com/registration')

        //First name & Last name
        cy.get('[placeholder="First Name"]').type('Foyez')
        cy.get('[placeholder="Last Name"]').type('Kabir')

        //Phone Number - Dropdown opened
        cy.get('.phone_block').find('[title="Bangladesh: + 880"]').click({ multiple: true, force: true }).then(SelectCountry => {
            cy.contains('United Kingdom').click()
        })

    })
})