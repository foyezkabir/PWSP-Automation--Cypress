/*
   ---------- RESET PASSWORD CONFIRM & CANCEL PROCESS FLOW ----------
*/

// Step 1: Import Locators
    // Import the locators for the Reset Password functionality such as the reset button, modal confirm button, and modal cancel button.

// Step 2: Define Customer Management Class
    // Define a class that encapsulates customer management functionality. This class will contain methods related to customer operations, including resetting a customer's password.

// Step 3: Implement ResetPasswordConfirm Method
    // Within the class, implement the ResetPasswordConfirm method which includes the following steps:
        //   a. Initiate Reset Password Process - Click the reset password button to open the password reset confirmation modal.
        //   b. Confirm Password Reset - In the modal, click the confirm button to proceed with the password reset.
        //   c. Wait for Reset Process to Complete - Wait for the system to process the password reset. This involves a brief waiting period for the operation to be executed.

// Step 4: Implement ResetPasswordCancel Method
    // Similarly, implement the ResetPasswordCancel method with the following steps:
        //   a. Initiate Reset Password Process - Like in ResetPasswordConfirm, click the reset password button to open the modal.
        //   b. Cancel Password Reset - In the modal, click the cancel button to abort the password reset process.
        //   c. Wait for Cancellation to Process - Wait for the system to revert back from the password reset operation.

// Step 5: Export the Customer Management Class Instance
    // Export an instance of the customer management class. This allows other parts of the application or test suite to use the class for customer-related operations.

// Step 6: Usage in Test Cases
    // In test files, import the exported class instance and use its methods to perform actions like confirming or canceling a password reset as part of various test scenarios.

/*
   ---------- END OF RESET PASSWORD CONFIRM & CANCEL PROCESS FLOW ----------
*/
