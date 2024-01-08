export class AdminUserManagement {

    AddUser(fullname, Username, email, phone) {
        cy.contains('Add User').click().then(adduser => {
            cy.wrap(adduser).get('#user_full_name').type(fullname)
            cy.wrap(adduser).get('#user_name').type(Username)
            cy.wrap(adduser).get('#user_email').type(email)
            cy.wrap(adduser).get('[name="user_phone"]').type(phone)
            cy.wrap(adduser).get('#user_role').click({ multiple: true, force: true }).then(SeleectRole => {
                cy.wrap(SeleectRole).eq(2).click()
            })
            cy.wrap(adduser).get('div[class="react-switch-bg"]').click()
        })
    }

    AddUserwithBlankSpaces(fullname, Username, email, phone, N) {
        cy.contains('i', 'Add User').click().then(adduser => {
            cy.wrap(adduser).find('#user_full_name').type(fullname)
            cy.wrap(adduser).find('#user_name').type(Username)
            cy.wrap(adduser).find('#user_email').type(email)
            cy.wrap(adduser).find('[name="user_phone"]').type(phone)
            cy.wrap(adduser).find('#user_role').click().then(SeleectRole => {
                cy.wrap(SeleectRole).eq(N).click()
            })
            cy.wrap(adduser).find('div[class="react-switch-bg"]').click()
        })
    }

    AddUserwithSpecialCharacters(fullname, Username, email, phone, N) {
        cy.contains('i', 'Add User').click().then(adduser => {
            cy.wrap(adduser).find('#user_full_name').type(fullname)
            cy.wrap(adduser).find('#user_name').type(Username)
            cy.wrap(adduser).find('#user_email').type(email)
            cy.wrap(adduser).find('[name="user_phone"]').type(phone)
            cy.wrap(adduser).find('#user_role').click().then(SeleectRole => {
                cy.wrap(SeleectRole).eq(N).click()
            })
            cy.wrap(adduser).find('div[class="react-switch-bg"]').click()
        })
    }

    AddUserwithNumber(fullname, Username, email, phone, N) {
        cy.contains('i', 'Add User').click().then(adduser => {
            cy.wrap(adduser).find('#user_full_name').type(fullname)
            cy.wrap(adduser).find('#user_name').type(Username)
            cy.wrap(adduser).find('#user_email').type(email)
            cy.wrap(adduser).find('[name="user_phone"]').type(phone)
            cy.wrap(adduser).find('#user_role').click().then(SeleectRole => {
                cy.wrap(SeleectRole).eq(N).click()
            })
            cy.wrap(adduser).find('div[class="react-switch-bg"]').click()
        })
    }

    AddUserwithExistingUsername(fullname, Username, email, phone, N) {
        cy.contains('i', 'Add User').click().then(adduser => {
            cy.wrap(adduser).find('#user_full_name').type(fullname)
            cy.wrap(adduser).find('#user_name').type(Username)
            cy.wrap(adduser).find('#user_email').type(email)
            cy.wrap(adduser).find('[name="user_phone"]').type(phone)
            cy.wrap(adduser).find('#user_role').click().then(SeleectRole => {
                cy.wrap(SeleectRole).eq(N).click()
            })
            cy.wrap(adduser).find('div[class="react-switch-bg"]').click()
        })
    }

    AddUserwithInvalidPhone(fullname, Username, email, phone, N) {
        cy.contains('i', 'Add User').click().then(adduser => {
            cy.wrap(adduser).find('#user_full_name').type(fullname)
            cy.wrap(adduser).find('#user_name').type(Username)
            cy.wrap(adduser).find('#user_email').type(email)
            cy.wrap(adduser).find('[name="user_phone"]').type(phone)
            cy.wrap(adduser).find('#user_role').click().then(SeleectRole => {
                cy.wrap(SeleectRole).eq(N).click()
            })
            cy.wrap(adduser).find('div[class="react-switch-bg"]').click()
        })
    }

    AddUserwithInvalidEmail(fullname, Username, email, phone, N) {
        cy.contains('i', 'Add User').click().then(adduser => {
            cy.wrap(adduser).find('#user_full_name').type(fullname)
            cy.wrap(adduser).find('#user_name').type(Username)
            cy.wrap(adduser).find('#user_email').type(email)
            cy.wrap(adduser).find('[name="user_phone"]').type(phone)
            cy.wrap(adduser).find('#user_role').click().then(SeleectRole => {
                cy.wrap(SeleectRole).eq(N).click()
            })
            cy.wrap(adduser).find('div[class="react-switch-bg"]').click()
        })
    }

    AddUserwithExistingEmail(fullname, Username, email, phone, N) {
        cy.contains('i', 'Add User').click().then(adduser => {
            cy.wrap(adduser).find('#user_full_name').type(fullname)
            cy.wrap(adduser).find('#user_name').type(Username)
            cy.wrap(adduser).find('#user_email').type(email)
            cy.wrap(adduser).find('[name="user_phone"]').type(phone)
            cy.wrap(adduser).find('#user_role').click().then(SeleectRole => {
                cy.wrap(SeleectRole).eq(N).click()
            })
            cy.wrap(adduser).find('div[class="react-switch-bg"]').click()
        })
    }

    AddUserWithoutSelectingRole(fullname, Username, email, phone, N) {
        cy.contains('i', 'Add User').click().then(adduser => {
            cy.wrap(adduser).find('#user_full_name').type(fullname)
            cy.wrap(adduser).find('#user_name').type(Username)
            cy.wrap(adduser).find('#user_email').type(email)
            cy.wrap(adduser).find('[name="user_phone"]').type(phone)
            // cy.wrap(adduser).find('#user_role').click().then(SeleectRole => {
            //     cy.wrap(SeleectRole).eq(N).click()
            // })
            cy.wrap(adduser).find('div[class="react-switch-bg"]').click()
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

    UpdateUserwithBlankSpace(fullname, email, phone, N) {
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

    UpdateUserwithSpecialCharacter(fullname, email, phone, N) {
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

    UpdateUserwithNumber(fullname, email, phone, N) {
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

    UpdateUserwithInvalidPhone(fullname, email, phone, N) {
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

    UpdateUserwithInvalidEmail(fullname, email, phone, N) {
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

    UpdateUserwithExistingEmail(fullname, email, phone, N) {
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

    UpdateUserWithoutSelectingRole(fullname, email, phone, N) {
        cy.get('tbody').contains('tr', 'Demo Customer').then(editicon => {
            cy.wrap(editicon).find('td .action-icon').click().then(updateuser => {
                cy.wrap(updateuser).find('#user_full_name').type(fullname)
                cy.wrap(updateuser).find('#user_email').type(email)
                cy.wrap(updateuser).find('[name="user_phone"]').type(phone)
                // cy.wrap(updateuser).find('#user_role').click().then(SeleectRole => {
                //     cy.wrap(SeleectRole).eq(N).click()
                // })
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