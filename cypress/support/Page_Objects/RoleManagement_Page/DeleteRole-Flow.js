/*
   ---------- DELETE ROLE CONFIRM & DELETE ROLE CANCEL PROCESS FLOW ----------
*/

// Step 1: Import Locators
    // Import the locators for the role deletion elements such as the delete icon, confirm button, and cancel button.

// Step 2: Define Role Management Class
    // Define a class that encapsulates role management functionality. This class will contain methods related to role operations, including deleting a role.

// Step 3: Implement DeleteRoleConfirm Method
    // Within the class, implement the DeleteRoleConfirm method which includes the following steps:
        //   a. Locate and Select Delete Icon - Find the delete icon in the role management section and click on it to open the delete confirmation dialog.
        //   b. Confirm Role Deletion - In the confirmation dialog, click the confirm button to proceed with the deletion.
        //   c. Wait for Deletion to Process - Wait for the system to process the deletion request.

// Step 4: Implement DeleteRoleCancel Method
    // Similarly, implement the DeleteRoleCancel method with the following steps:
        //   a. Locate and Select Delete Icon - Similar to DeleteRoleConfirm, find and click the delete icon.
        //   b. Cancel Role Deletion - In the confirmation dialog, click the cancel button to abort the deletion process.
        //   c. Wait for Cancellation to Process - Wait for the system to revert back from the deletion dialog.

// Step 5: Export the Role Management Class Instance
    // Export an instance of the role management class. This allows other parts of the application or test suite to use the class for role-related operations.

// Step 6: Usage in Test Cases
    // In test files, import the exported class instance and use its methods to perform actions like confirming or canceling the deletion of a role as part of various test scenarios.

/*
   ---------- END OF DELETE ROLE CONFIRM & DELETE ROLE CANCEL PROCESS FLOW ----------
*/
