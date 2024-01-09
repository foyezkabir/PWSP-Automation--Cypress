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
            cy.wait(10000)
        })
    }

    UpdateCustomer() {
        cy.get(CMlocators.body).find(CMlocators.findIcon).then(editicon => {
            cy.wrap(editicon).find(CMlocators.clickEditIcon).click().wait(2000).then(update => {
                cy.get(CMlocators.nameInput).clear().type(CusName).wait(500)
                cy.get(CMlocators.phoneInput).clear().type(phone).wait(500)
                cy.get(CMlocators.emailInput).clear().type(email).wait(500)
                cy.get(CMlocators.dobInput).clear().type(DOB).wait(500)
                cy.get(CMlocators.addressTextarea).clear().type(address).wait(500)

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
        })
    }

    ResetPasswordConfirm() {
        cy.get(CMlocators.body).find(CMlocators.findIcon)
        cy.get(CMlocators.resettButton).click().wait(1500)
        cy.get(CMlocators.modalConfirmButton).click()
        cy.wait(8500)
    }

    ResetPasswordCancel() {
        cy.get(CMlocators.body).find(CMlocators.findIcon)
        cy.get(CMlocators.resettButton).click().wait(1500)
        cy.get(CMlocators.modalCancelButton).click()
        cy.wait(8500)
    }
}

export const OnCustomerManagementPage = new CustomerManagement()