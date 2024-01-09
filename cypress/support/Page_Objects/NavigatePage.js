export class NavigationPage {
    LogInWebsite() {

    }
    RoleManagementPage() {
        cy.contains('Role Management').click().wait(1000)
        cy.contains('Role List').click().wait(3000)
    }

    AdminUserManagement() {
        cy.contains('Admin User Management').click().wait(1000)
        cy.contains('Admin User List').click().wait(3000)
    }

    CustomerManagement() {
        cy.contains('Customer Management').click().wait(1000)
        cy.get('[class="fa fa-circle"]').eq(2).click({ multiple: true, force: true }).wait(3000)
    }
}

export const NavigateTo = new NavigationPage()