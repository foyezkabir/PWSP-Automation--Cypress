import { AdminUserLocators } from "./AdminUserLocators"

export class AdminUserManagement {

    AddUser(fullname, Username, email, phone, n) {
        cy.get(AdminUserLocators.addButton).click().wait(2000).then(adduser => {
            cy.wrap(adduser).get(AdminUserLocators.nameInput).type(fullname).wait(500)
            cy.wrap(adduser).get(AdminUserLocators.usernameInput).type(Username).wait(500)
            cy.wrap(adduser).get(AdminUserLocators.emailInput).type(email).wait(500)
            cy.wrap(adduser).get(AdminUserLocators.phoneInput).type(phone).wait(500)
            // selecting user role
            cy.wrap(adduser).get(AdminUserLocators.roleSelect).select(n).wait(500).then(SeleectRole => {
                cy.wrap(SeleectRole).select(n).wait(500)
            })
            // checking status toggle button
            cy.wrap(adduser).get(AdminUserLocators.Status).then(SwitchStatus => {
                if (SwitchStatus.length) {
                    // Check if the aria-checked attribute exists and its value
                    cy.wrap(SwitchStatus).invoke('attr', 'aria-checked').then(attr => {
                        if (attr && attr.includes('false')) {
                            SwitchStatus.click();
                        }
                    })
                }
            })
            cy.wrap(adduser).get(AdminUserLocators.submitButton).click()
            cy.wait(8500)
        })
    }

    UpdateUser(fullname, email, phone, n) {
        cy.get(AdminUserLocators.body).contains(AdminUserLocators.findIcon).then(editicon => {
            cy.wrap(editicon).find(AdminUserLocators.clickEditIcon).click().then(updateuser => {
                cy.get(AdminUserLocators.nameInput).type(fullname)
                cy.get(AdminUserLocators.emailInput).type(email).wait(500)
                cy.get(AdminUserLocators.phoneInput).type(phone).wait(500)
                // selecting user role
                cy.get(AdminUserLocators.roleSelect).select(n).wait(500).then(SeleectRole => {
                    cy.wrap(SeleectRole).select(n).wait(500)
                })
                // checking status toggle button
                cy.get(AdminUserLocators.Status).then(SwitchStatus => {
                    if (SwitchStatus.length) {
                        // Check if the aria-checked attribute exists and its value
                        cy.wrap(SwitchStatus).invoke('attr', 'aria-checked').then(attr => {
                            if (attr && attr.includes('true')) {
                                SwitchStatus.click();
                            }
                        })
                    }
                })
                cy.get(AdminUserLocators.submitButton).click()
                cy.wait(8500)
            })
        })
    }

    ResetUserPasswordConfirm() {
        cy.get(AdminUserLocators.body).contains(AdminUserLocators.findIcon)
        cy.get(AdminUserLocators.clickResetButton).click()
        cyget(AdminUserLocators.clickConfirm).click()
    }

    ResetUserPasswordConfirm() {
        cy.get(AdminUserLocators.body).contains(AdminUserLocators.findIcon)
        cy.get(AdminUserLocators.clickResetButton).click()
        cyget(AdminUserLocators.clickCancel).click()
    }
}

export const OnAdminUserPage = new AdminUserManagement()