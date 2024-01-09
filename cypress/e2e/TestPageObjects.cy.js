import { OnAdminUserPage, OnDdminUserPage } from "../support/Page_Objects/AdminUserManage_Page/AdminUserPage"
import { OnCustomerManagementPage } from "../support/Page_Objects/CustomerManage_Page/CustomerManagementPage"
import { onloginpage } from "../support/Page_Objects/LogIn_Page/loginPage"
import { NavigateTo } from "../support/Page_Objects/NavigatePage"
import { OnRoleListPage } from "../support/Page_Objects/RoleManagement_Page/RolemanagementPage"

describe('Navigate to Menu & Sub-Menus', () => {

    beforeEach('Open application', () => {
        cy.visit('/')
        onloginpage.LoginToWebsite('mahadihasanjoy', 'Shadhin1995@')

    })

    it('Navigate to Role List page', () => {
        NavigateTo.RoleManagementPage()
        //Arguments = name, description
        OnRoleListPage.AddRole('NEW ROLE ONE', 'THIS IS NEW ROLE')
    })

    it('Navigate to Admin User List page', () => {
        NavigateTo.AdminUserManagement()
        //Arguments = fullname, Username, email, phone, n
        OnAdminUserPage.AddUser('NEW USER', 'XYZ18', 'XYZ@gmail.com', '+8801783376098', 2)
    })

    it.only('Navigate to Customer List page', () => {
        NavigateTo.CustomerManagement()
        //Arguments = CusName, phone, email, DOB, address
        OnCustomerManagementPage.AddCustomer('NEW CUSTOMER', '01783385076', 'XYZ@gmail.com', '16-02-1999', 'XYZ, Road #2, IJK, LMNOP')
    })
})