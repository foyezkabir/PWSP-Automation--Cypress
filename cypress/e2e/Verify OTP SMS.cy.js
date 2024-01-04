describe('OTP Varification by SMS', () => {

    it("TC-1: Verify OTP By SMS of OneStop LMS website", () => {
        //visit OneStopLMS website
        cy.visit('https://dev.onestoplms.com/registration')

        //First name & Last name
        cy.get('[placeholder="First Name"]').type('Foyez')
        cy.get('[placeholder="Last Name"]').type('Kabir')

        //Phone Number - Dropdown opened
        //when there is multiple attribute then shuld use eq(0) & multiple true, force true
        cy.get('.phone_block').find('[title="Bangladesh: + 880"]').click({ multiple: true, force: true }).then(SelectCountry => {
            cy.contains('United Kingdom').click()

            //phone number providing
            cy.get('[class="form-control input-box    "]').eq(0).type('76035407', { multiple: true, force: true })
        })

        //Password 
        cy.get('[class="single-input undefined"]').find('[placeholder="Password"]').then(Password => {
            cy.wrap(Password).eq(0).type('Kabirwiit18#', { multiple: true, force: true })
        })

        //click submit Create account button
        cy.contains('Create Account').click()
        cy.wait(5000)
    })
})