export class Rolemanangement {

    AddRole(name, description) {
        cy.contains('Add Role').click().wait(3000).then(Roleadd => {
            cy.wrap(Roleadd).get('#role_name').type(name)
            cy.wrap(Roleadd).get('.summary').type(description)
            cy.wrap(Roleadd).get('div .react-switch-bg').click()
            cy.wrap(Roleadd).get('[type="submit"]').click({ multiple: true, force: true })
            cy.wait(10000)
        })
    }
    AddRolewithBlankSpace(name, description) {
        cy.contains('Add Role').click().then(Roleadd => {
            cy.wrap(Roleadd).find('#role_name').type(name)
            cy.wrap(Roleadd).contains('Role description').find('.summary ').type(description)
            cy.wrap(Roleadd).contains('Status').find('div .react-switch-bg').click()
            cy.wrap(Roleadd).contains('Add Role').click()
        })
    }

    AddRolewithSpecialCharacter(name, description) {
        cy.contains('i', 'Add Role').click().then(Roleadd => {
            cy.wrap(Roleadd).find('#role_name').type(name)
            cy.wrap(Roleadd).contains('Role description').find('.summary ').type(description)
            cy.wrap(Roleadd).contains('Status').find('div .react-switch-bg').click()
            cy.wrap(Roleadd).contains('Add Role').click()
        })
    }

    AddRolewithNumber(name, description) {
        cy.contains('i', 'Add Role').click().then(Roleadd => {
            cy.wrap(Roleadd).find('#role_name').type(name)
            cy.wrap(Roleadd).contains('Role description').find('.summary ').type(description)
            cy.wrap(Roleadd).contains('Status').find('div .react-switch-bg').click()
            cy.wrap(Roleadd).contains('Add Role').click()
        })
    }

    EditRole(name) {
        cy.get('tbody').contains('tr', 'Demo').then(editicon => {
            cy.wrap(editicon).find('.action-icon').click()
            cy.wrap(editicon).find('#role_name').clear().type(name)
            cy.wrap(editicon).find('[type="submit"]').click()
            cy.wrap(editicon).find('td').eq(0).should('contain', name)
        })
    }

    EditRolewithBlankSpace(name) {
        cy.get('tbody').contains('tr', 'Demo').then(editicon => {
            cy.wrap(editicon).find('.action-icon').click()
            cy.wrap(editicon).find('#role_name').clear().type(name)
            cy.wrap(editicon).find('[type="submit"]').click()
            cy.wrap(editicon).find('td').eq(0).should('contain', name)
        })
    }

    EditRolewithSpecialCharacter(name) {
        cy.get('tbody').contains('tr', 'Demo').then(editicon => {
            cy.wrap(editicon).find('.action-icon').click()
            cy.wrap(editicon).find('#role_name').clear().type(name)
            cy.wrap(editicon).find('[type="submit"]').click()
            cy.wrap(editicon).find('td').eq(0).should('contain', name)
        })
    }

    EditRolewithNumber(name) {
        cy.get('tbody').contains('tr', 'Demo').then(editicon => {
            cy.wrap(editicon).find('.action-icon').click()
            cy.wrap(editicon).find('#role_name').clear().type(name)
            cy.wrap(editicon).find('[type="submit"]').click()
            cy.wrap(editicon).find('td').eq(0).should('contain', name)
        })
    }

    DeleteRoleConfirm() {
        cy.get('tbody').contains('tr', 'Demo').then(Delete => {
            cy.wrap(Delete).find('.m-l-10').click().then(ConfirmDelete => {
                cy.wrap(ConfirmDelete).get('.modal-content').contains('Confirm').click()
            })
        })
    }

    DeleteRoleCancel() {
        cy.get('tbody').contains('tr', 'Demo').then(Delete => {
            cy.wrap(Delete).find('.m-l-10').click().then(CancelDelete => {
                cy.wrap(CancelDelete).get('.modal-content').contains('Cancel').click()
            })
        })
    }

    SetPermission() {
        cy.get('tbody').contains('tr', 'Demo').then(Setrole => {
            cy.wrap(Setrole).contains('a', 'set Permission').click().then(SetFeature => {
                cy.wrap(SetFeature).contains('Features').eq(3).click().then(SetTask => {
                    cy.wrap(SetTask).contains('Tasks').eq(1).click()
                })
            })

        })
    }
}

export const OnRoleListPage = new Rolemanangement() 