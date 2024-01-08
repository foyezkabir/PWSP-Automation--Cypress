export class NavigationPage {
    LogInWebsite() {

    }
    RoleManagementPage() {
        cy.contains('Role Management').click()
        cy.contains('Role List').click()
    }

    AdminUserManagement() {
        cy.contains('Admin User Management').click()
        cy.contains('Admin User List').click()
    }

    CustomerManagement() {
        cy.contains('Customer Management').click()
        cy.get('[class="fa fa-circle"]').eq(2).click({ multiple: true, force: true })
    }
}

export const NavigateTo = new NavigationPage()