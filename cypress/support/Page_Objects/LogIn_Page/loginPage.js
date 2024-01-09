import { loginLocators } from './loginLocators';

export class LoginTo {
    LoginToWebsite(Username, Password) {

        // Fill in the Username field
        cy.get(loginLocators.emailInput).type(Username).wait(1000)
        cy.get(loginLocators.emailInput).invoke('prop', 'value').then(UsernameValue => {
            expect(UsernameValue).to.equal(Username)
        })

        // Fill in the Password field
        cy.get(loginLocators.passwordInput).type(Password).wait(1000)
        cy.get(loginLocators.passwordInput).invoke('prop', 'value').then(PasswordValue => {
            expect(PasswordValue).to.equal(Password)
        })

        // Click on the login button
        cy.get(loginLocators.submitButton).click();
        cy.wait(3000)
    }
}

export const onloginpage = new LoginTo()