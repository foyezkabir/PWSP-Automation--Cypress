import { RMlocators } from "./RM-Locators"

export class Rolemanangement {

    AddRole(name, description) {
        cy.get(RMlocators.addButton).click().wait(2000).then(Roleadd => {
            cy.wrap(Roleadd).get(RMlocators.nameInput).type(name).wait(500)
            cy.wrap(Roleadd).get(RMlocators.descriptionInput).type(description).wait(500)
            //cy.wrap(Roleadd).get('div .react-switch-bg').click().wait(500)

            // checking status toggle button
            cy.wrap(Roleadd).get(RMlocators.Status).then(SwitchStatus => {
                if (SwitchStatus.length) {
                    // Check if the aria-checked attribute exists and its value
                    cy.wrap(SwitchStatus).invoke('attr', 'aria-checked').then(attr => {
                        if (attr && attr.includes('false')) {
                            SwitchStatus.click().wait(500)
                        }
                    })
                }
            })

            cy.wrap(Roleadd).get(RMlocators.submitButton).click() //({ multiple: true, force: true })
            cy.wait(10000)
        })
    }

    EditRole(name) {
        cy.get(RMlocators.body).contains(RMlocators.findIcon).then(editicon => {
            cy.wrap(editicon).get(RMlocators.clickEditIcon).click().wait(500)
            cy.wrap(editicon).get(RMlocators.nameInput).clear().type(name).wait(500)

            // checking status toggle button
            cy.wrap(editicon).get(RMlocators.Status).then(SwitchStatus => {
                if (SwitchStatus.length) {
                    // Check if the aria-checked attribute exists and its value
                    cy.wrap(SwitchStatus).invoke('attr', 'aria-checked').then(attr => {
                        if (attr && attr.includes('true')) {
                            SwitchStatus.click().wait(500)
                        }
                    })
                }
            })

            cy.wrap(editicon).get(RMlocators.submitButton).click()
            cy.wait(8500)
            cy.wrap(editicon).get(RMlocators.tColumn).eq(0).should('contain', name)
        })
    }

    DeleteRoleConfirm() {
        cy.get(RMlocators.body).contains(RMlocators.findIcon).then(Delete => {
            cy.wrap(Delete).get(RMlocators.clickDeleteIcon).click().wait(1500).then(ConfirmDelete => {
                cy.wrap(ConfirmDelete).get(RMlocators.decision).contains(RMlocators.confirm).click()
                cy.wait(8500)
            })
        })
    }

    DeleteRoleCancel() {
        cy.get(RMlocators.body).contains(RMlocators.findIcon).then(Delete => {
            cy.wrap(Delete).get(RMlocators.clickDeleteIcon).click().wait(1500).then(CancelDelete => {
                cy.wrap(CancelDelete).get(RMlocators.decision).contains(RMlocators.confirm).click()
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