describe('GitHub Login', () => {
    it("Verify SMS OTP for two factor authentication", () => {
        //visit github's login page
        cy.visit('https://github.com/login')

        //Username & Password
        cy.get('#login_field').type('Kabirwiit')
        cy.get('#password').type('Ghettoazmi18#')

        //click the Sign in button - can ad the heading in the element section, below i used "Input"
        cy.get('input[name="commit"]').click()
        cy.wait(2000).then(SendSMS => {
            //click the Send SMS button - can not automate this cause there is captche present here
            cy.contains('Send SMS').click({ force: true })
            cy.wait(10000)
        })

        //Retrive OTP
        cy.request('https://receive-smss.com/sms/34658193921/')
            .then(html => {
                const otpLine = html.body.match(/.*GitHub.*/)
                //console.log(otpLine)
                const Boldtext = otpLine[0].match(/<b>\d+/)
                //console.log(Boldtext)

                return Boldtext[0].match(/\d+/)[0]
            }).then(otp => {
                cy.get('#sms_totp').type(otp)

                //assertion
                cy.url().should('contain', 'https://github.com/')
            })
    })
})