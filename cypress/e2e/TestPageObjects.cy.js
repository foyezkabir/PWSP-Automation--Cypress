//import { it } from "mocha"
import { OnAdminUserPage, OnDdminUserPage } from "../support/Page_Objects/AdminUserPage"
import { OnCustomerManagementPage } from "../support/Page_Objects/CustomerManagementPage"
import { onloginpage } from "../support/Page_Objects/loginPage"
import { NavigateTo } from "../support/Page_Objects/NavigatePage"
import { OnRoleListPage } from "../support/Page_Objects/RolemanagementPage"

describe('Navigate to Menu & Sub-Menus', () => {

    beforeEach('Open application', () => {
        cy.visit('/')

        // Fill in the Username field
        cy.get("#email").type('mahadihasanjoy')
        cy.get("#email").invoke('prop', 'value').then(UsernameValue => {
            expect(UsernameValue).to.equal('mahadihasanjoy')
        })

        // Fill in the password field
        cy.get("#password").type('Shadhin1995@')
        cy.get("#password").invoke('prop', 'value').then(PasswordValue => {
            expect(PasswordValue).to.equal('Shadhin1995@')
        })

        // Click on the login button
        cy.get('[type="submit"]').click();
        cy.wait(4000)

    })

    // NavigateTo.loginPage()
    // onloginpage.LoginToWebsite('mahadihasanjoy', 'Shadhin1995@')

    it('Navigate to Role List page', () => {
        NavigateTo.RoleManagementPage()
        //Arguments = name, description
        OnRoleListPage.AddRole('NEW ROLE ONE', 'THIS IS NEW ROLE')
    })

    it('Navigate to Admin User List page', () => {
        NavigateTo.AdminUserManagement()
        //Arguments = fullname, Username, email, phone, N
        OnAdminUserPage.AddUser('NEW USER', 'XYZ18', 'XYZ@gmail.com', '01783385076')
    })

    it.only('Navigate to Customer List page', () => {
        NavigateTo.CustomerManagement()
        //Arguments = CusName, phone, email, DOB, address
        OnCustomerManagementPage.AddCustomer('NEW CUSTOMER', '01783385076', 'XYZ@gmail.com', '16-02-1999', 'XYZ, Road #2, IJK, LMNOP')
    })
})