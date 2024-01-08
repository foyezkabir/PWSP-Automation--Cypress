export class LoginTo {
    LoginToWebsite(Username, Password) {
        cy.get("#email").type(Username)
        cy.get("#email").invoke('prop', 'value').then(UsernameValue => {
            expect(UsernameValue).to.equal(Username)
        })

        // Fill in the password field
        cy.get("#password").type(Password)
        cy.get("#password").invoke('prop', 'value').then(PasswordValue => {
            expect(PasswordValue).to.equal(Password)
        })

        // Click on the login button
        cy.get('[type="submit"]').click();
        cy.wait(4000)
    }
}

export const onloginpage = new LoginTo()