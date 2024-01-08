export class CustomerManagement {

    AddCustomer(CusName, phone, email, DOB, address) {
        cy.contains('Add Customer').click().then(addcustomer => {
            cy.wrap(addcustomer).get('div[class="modal-body"]').type(CusName)
            cy.wrap(addcustomer).get('.form-control').type(phone)
            cy.wrap(addcustomer).get('input[id="email"]').type(email)
            cy.wrap(addcustomer).get('input[placeholder="DD-MM-YYYY"]').type(DOB)
            cy.wrap(addcustomer).get('textarea[name="address"]').type(address)
            //input[aria-checked="true"]
            cy.wrap(addcustomer).get('div[class="react-switch-bg"]').invoke('attr', 'aria-checked').then(attr => {
                if (attr.includes('false')) {
                    cy.wrap(attr).click()
                }
            })
            cy.wrap(addcustomer).contains('Add Customer').click()
        })
    }

    UpdateCustomer() {
        cy.get('tbody').find('tr td[class="text-center"]').then(editicon => {
            cy.wrap(editicon).find('i .m-l-15').click().then(update => {
                cy.get('div[class="modal-body"]').clear().type(CusName)
                cy.get('div[type="tel"]').clear().type(phone)
                cy.get('input[id="email"]').clear().type(email)
                cy.get('input[placeholder="DD-MM-YYYY"]').clear().type(DOB)
                cy.get('textarea[name="address"]').clear().type(address)
                //input[aria-checked="true"]
                cy.get('div[class="react-switch-bg"]').invoke('attr', 'aria-checked').then(attr => {
                    if (attr.includes('false')) {
                        cy.wrap(attr).click()
                    }
                })
                cy.contains('button', 'Add Customer').click()
            })
        })
    }

    ResetPasswordConfirm() {
        cy.contains('[class="responsive-button"] [type="submit"]').click().then(ResetPass => {
            cy.wrap(ResetPass).find('[class="modal-content"] [class="btn btn-success"]').click()
        })
    }

    ResetPasswordCancel() {
        cy.contains('[class="responsive-button"] [type="submit"]').click().then(ResetPassCancel => {
            cy.wrap(ResetPassCancel).find('[class="modal-content"] [class="btn btn-primary"]').click()
        })
    }
}

export const OnCustomerManagementPage = new CustomerManagement()