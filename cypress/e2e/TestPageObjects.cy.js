import { OnAdminUserPage } from "../support/Page_Objects/AdminUserManage_Page/AdminUserPage"
import { OnCustomerManagementPage } from "../support/Page_Objects/CustomerManage_Page/CustomerManagementPage"
import { onloginpage } from "../support/Page_Objects/LogIn_Page/loginPage"
import { NavigateTo } from "../support/Page_Objects/NavigatePage"
import { OnRoleListPage } from "../support/Page_Objects/RoleManagement_Page/RolemanagementPage"
import { RandomDataGenerator } from "../support/Page_Objects/RandomInputs"

describe('Navigate to Menu & Sub-Menus', () => {

    const randomDataGenerator = new RandomDataGenerator()

    beforeEach('Open application', () => {
        cy.visit('/')
        onloginpage.LoginToWebsite('mahadihasanjoy', 'Shadhin1995@')

    })

    it.only('Navigate to Role List page', () => {
        NavigateTo.RoleManagementPage()

        const randomRole = randomDataGenerator.generateRandomAdminRole()
        const randomRoleDescription = randomDataGenerator.generateRandomRoleDescription()

        //Arguments = name, description
        OnRoleListPage.AddRole(randomRole, randomRoleDescription)
    })

    it('Navigate to Admin User List page', () => {
        NavigateTo.AdminUserManagement()

        // Generated random data
        const randomName = randomDataGenerator.generateRandomName()
        const randomUsername = randomDataGenerator.generateRandomUsername()
        const randomEmail = randomDataGenerator.generateRandomEmail()
        const randomPhone = randomDataGenerator.generateRandomBDPhoneNumber()

        //Arguments = fullname, Username, email, phone, n
        OnAdminUserPage.AddUser(randomName, randomUsername, randomEmail, randomPhone, 2)
    })

    it('Navigate to Customer List page', () => {
        NavigateTo.CustomerManagement()

        // Generated random data
        const randomName = randomDataGenerator.generateRandomName()
        const randomPhone = randomDataGenerator.generateRandomBDPhoneNumber()
        const randomEmail = randomDataGenerator.generateRandomEmail()
        const randomDOB = randomDataGenerator.generateRandomDOB()

        //Arguments = CusName, phone, email, DOB, address
        OnCustomerManagementPage.AddCustomer(randomName, randomPhone, randomEmail, randomDOB, 'XYZ, Road #2, IJK, LMNOP')
    })
})