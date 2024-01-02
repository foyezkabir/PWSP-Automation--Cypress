describe("PWSP SignUp", () => {

    it('TC-1: SignUp with Valid information', () => {
        // Visit the PWSP login page
        cy.visit('/')
      //cy.visit('https://pwspadmindemo.shadintech.com/pages/login')

      cy.contains('Sign Up').click()
      cy.wait(1500)

      cy.get('.form-body').find('#name').then(Fullname => {
        cy.wrap(Fullname).type('Foyez Kabir').invoke('prop', 'value').then(NameVlaue => {
            expect(NameVlaue).to.equal('Foyez Kabir')
        })
      })
      cy.get('.form-body').find('[type="tel"]').then(Phone => {
        cy.wrap(Phone).type('1783367087').invoke('prop', 'value').then(PhoneVlaue => {
            expect(PhoneVlaue).to.equal('+8801783367087')
      })
    })

    cy.get('.form-body').find('#current_password').then(Password => {
        cy.wrap(Password).type('Kabirwiit18#').invoke('prop', 'value').then(PasswordVlaue => {
            expect(PasswordVlaue).to.equal('Kabirwiit18#')
      })
    })

    cy.get('.form-body').find('#confirm_new_password').then(ConfirmPassword => {
        cy.wrap(ConfirmPassword).type('Kabirwiit18#').invoke('prop', 'value').then(ConfirmPasswordVlaue => {
            expect(ConfirmPasswordVlaue).to.equal('Kabirwiit18#')
      })
    })

    cy.get('.form-body').find('#email').then(Email => {
        cy.wrap(Email).type('Kabirwiit18@gmail.com').invoke('prop', 'value').then(EmailVlaue => {
            expect(EmailVlaue).to.equal('Kabirwiit18@gmail.com')
      })
    })

    cy.get('[type="submit"]').click()
    cy.wait(4000)

    })

    it('TC-2: Go to Login page from SignUp page', () => {
       // Visit the PWSP login page
       cy.visit('/')
       //cy.visit('https://pwspadmindemo.shadintech.com/pages/login')
 
       cy.contains('Sign Up').click()
       cy.wait(1500)
 
       cy.get('.btn-link').click()
       cy.wait(1500)
    })
})