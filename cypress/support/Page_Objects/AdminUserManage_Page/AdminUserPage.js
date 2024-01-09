export class AdminUserManagement {

    AddUser(fullname, Username, email, phone, n) {
        cy.get('[class="pull-right right-header"]').click().wait(2000).then(adduser => {
            cy.wrap(adduser).get('#user_full_name').type(fullname).wait(500)
            cy.wrap(adduser).get('#user_name').type(Username).wait(500)
            cy.wrap(adduser).get('#user_email').type(email).wait(500)
            cy.wrap(adduser).get('[name="user_phone"]').type(phone).wait(500)
            // selecting user role
            cy.wrap(adduser).get('#user_role').select(n).wait(500).then(SeleectRole => {
                cy.wrap(SeleectRole).select(n).wait(500)
            })
            // checking status toggle button
            cy.wrap(adduser).get('div[class="react-switch-bg"]').then(SwitchStatus => {
                if (SwitchStatus.length) {
                    // Check if the aria-checked attribute exists and its value
                    cy.wrap(SwitchStatus).invoke('attr', 'aria-checked').then(attr => {
                        if (attr && attr.includes('false')) {
                            SwitchStatus.click();
                        }
                    })
                }
            })
            cy.wrap(adduser).get('.modal-footer .btn').click()
            cy.wait(8500)
        })
    }

    UpdateUser(fullname, email, phone, N) {
        cy.get('tbody').contains('tr', 'Demo Customer').then(editicon => {
            cy.wrap(editicon).find('td .action-icon').click().then(updateuser => {
                cy.wrap(updateuser).find('#user_full_name').type(fullname)
                cy.wrap(updateuser).find('#user_email').type(email)
                cy.wrap(updateuser).find('[name="user_phone"]').type(phone)
                cy.wrap(updateuser).find('#user_role').click().then(SeleectRole => {
                    cy.wrap(SeleectRole).eq(N).click()
                })
                cy.wrap(updateuser).find('div[class="react-switch-bg"]').click()
            })
        })
    }

    ResetUserPasswordConfirm() {
        cy.contains('button', 'Reset Password').click().then(ResetConfirm => {
            cy.wrap(ResetConfirm).contains('div', 'Confirm').click()
        })
    }

    ResetUserPasswordCancel() {
        cy.contains('button', 'Reset Password').click().then(ResetCancel => {
            cy.wrap(ResetCancel).contains('div', 'Cancel').click()
        })
    }
}

export const OnAdminUserPage = new AdminUserManagement()