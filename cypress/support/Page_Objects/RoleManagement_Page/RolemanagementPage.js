export class Rolemanangement {

    AddRole(name, description) {
        cy.get('[class="btn btn-outline-success btn-sm"]').click().wait(2000).then(Roleadd => {
            cy.wrap(Roleadd).get('#role_name').type(name).wait(500)
            cy.wrap(Roleadd).get('.summary').type(description).wait(500)
            //cy.wrap(Roleadd).get('div .react-switch-bg').click().wait(500)

            // checking status toggle button
            cy.wrap(Roleadd).get('div[class="react-switch-bg"]').then(SwitchStatus => {
                if (SwitchStatus.length) {
                    // Check if the aria-checked attribute exists and its value
                    cy.wrap(SwitchStatus).invoke('attr', 'aria-checked').then(attr => {
                        if (attr && attr.includes('false')) {
                            SwitchStatus.click().wait(500)
                        }
                    })
                }
            })

            cy.wrap(Roleadd).get('[class="btn btn-outline-success btn-sm"]').click() //({ multiple: true, force: true })
            cy.wait(8500)
        })
    }

    EditRole(name) {
        cy.get('tbody').contains('tr', 'Demo').then(editicon => {
            cy.wrap(editicon).get('.action-icon').click().wait(500)
            cy.wrap(editicon).get('#role_name').clear().type(name).wait(500)

            // checking status toggle button
            cy.wrap(editicon).get('div[class="react-switch-bg"]').then(SwitchStatus => {
                if (SwitchStatus.length) {
                    // Check if the aria-checked attribute exists and its value
                    cy.wrap(SwitchStatus).invoke('attr', 'aria-checked').then(attr => {
                        if (attr && attr.includes('true')) {
                            SwitchStatus.click().wait(500)
                        }
                    })
                }
            })

            cy.wrap(editicon).get('[class="btn btn-primary"]').click()
            cy.wait(8500)
            cy.wrap(editicon).get('td').eq(0).should('contain', name)
        })
    }

    DeleteRoleConfirm() {
        cy.get('tbody').contains('tr', 'Demo').then(Delete => {
            cy.wrap(Delete).get('.m-l-10').click().wait(1500).then(ConfirmDelete => {
                cy.wrap(ConfirmDelete).get('.modal-content').contains('Confirm').click()
                cy.wait(8500)
            })
        })
    }

    DeleteRoleCancel() {
        cy.get('tbody').contains('tr', 'Demo').then(Delete => {
            cy.wrap(Delete).get('.m-l-10').click().wait(1500).then(CancelDelete => {
                cy.wrap(CancelDelete).get('.modal-content').contains('Cancel').click()
                cy.wait(2000)
            })
        })
    }

    SetPermission() {
        cy.get('tbody').contains('tr', 'Demo').then(Setrole => {
            cy.wrap(Setrole).contains('a', 'set Permission').click().wait(2000).then(SetFeature => {
                cy.wrap(SetFeature).contains('Features').eq(3).click().wait(2000).then(SetTask => {
                    cy.wrap(SetTask).contains('Tasks').eq(1).click()
                    cy.wait(3000)
                })
            })

        })
    }
}

export const OnRoleListPage = new Rolemanangement() 