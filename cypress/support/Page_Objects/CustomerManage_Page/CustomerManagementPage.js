import { CMlocators } from "./CM-Locators"

export class CustomerManagement {

    AddCustomer(CusName, phone, email, DOB, address) {
        cy.get(CMlocators.AddButton).click().wait(2000).then(addcustomer => {
            cy.wrap(addcustomer).get(CMlocators.nameInput).type(CusName).wait(500)
            cy.wrap(addcustomer).get(CMlocators.phoneInput).type(phone).wait(500)
            cy.wrap(addcustomer).get(CMlocators.emailInput).type(email).wait(500)
            cy.wrap(addcustomer).get(CMlocators.dobInput).type(DOB).wait(500)
            cy.wrap(addcustomer).get(CMlocators.addressTextarea).type(address).wait(500)

            // Check if the switch element exists
            cy.wrap(addcustomer).get(CMlocators.Status).then(SwitchStatus => {
                if (SwitchStatus.length) {
                    // Check if the aria-checked attribute exists and its value
                    cy.wrap(SwitchStatus).invoke('attr', 'aria-checked').then(attr => {
                        if (attr && attr.includes('false')) {
                            SwitchStatus.click();
                        }
                    })
                }
            })

            cy.wrap(addcustomer).get(CMlocators.submitButton).click()
            cy.wait(8500)
        })
    }

    UpdateCustomer() {
        cy.get('tbody').find('tr td[class="text-center"]').then(editicon => {
            cy.wrap(editicon).find('i .m-l-15').click().wait(2000).then(update => {
                cy.get('div[class="modal-body"]').clear().type(CusName).wait(500)
                cy.get('div[type="tel"]').clear().type(phone).wait(500)
                cy.get('input[id="email"]').clear().type(email).wait(500)
                cy.get('input[placeholder="DD-MM-YYYY"]').clear().type(DOB).wait(500)
                cy.get('textarea[name="address"]').clear().type(address).wait(500)

                // Check if the switch element exists
                cy.wrap(addcustomer).get('div[class="react-switch-bg"]').then(SwitchStatus => {
                    if (SwitchStatus.length) {
                        // Check if the aria-checked attribute exists and its value
                        cy.wrap(SwitchStatus).invoke('attr', 'aria-checked').then(attr => {
                            if (attr && attr.includes('false')) {
                                SwitchStatus.click();
                            }
                        })
                    }
                })
                cy.wrap(addcustomer).get('.modal-footer .btn').click()
                cy.wait(8500)
            })
        })
    }

    ResetPasswordConfirm() {
        cy.get('[class="responsive-button"] [type="submit"]').click().wait(1500).then(ResetPass => {
            cy.wrap(ResetPass).get('[class="modal-content"] [class="btn btn-success"]').click()
            cy.wait(8500)
        })
    }

    ResetPasswordCancel() {
        cy.get('[class="responsive-button"] [type="submit"]').click().wait(1500).then(ResetPassCancel => {
            cy.wrap(ResetPassCancel).get('[class="modal-content"] [class="btn btn-primary"]').click()
            cy.wait(8500)
        })
    }
}

export const OnCustomerManagementPage = new CustomerManagement()