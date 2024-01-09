export class RandomDataGenerator {

    generateRandomBDPhoneNumber() {

        const prefixes = ['13', '16', '17', '18', '19'];
        let phoneNumber = '';
        const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
        phoneNumber += prefix;

        for (let i = 0; i < 8; i++) {
            phoneNumber += Math.floor(Math.random() * 10).toString();
        }

        return phoneNumber;
    }

    generateRandomEmail() {

        const domains = ["example.com", "mail.com", "test.org"];
        const characters = "abcdefghijklmnopqrstuvwxyz";
        const allCharacters = characters + "0123456789";

        let email = "";
        const emailLength = Math.floor(Math.random() * 10) + 5;

        email += characters.charAt(Math.floor(Math.random() * characters.length));

        for (let i = 1; i < emailLength; i++) {
            email += allCharacters.charAt(Math.floor(Math.random() * allCharacters.length));
        }

        email += "@" + domains[Math.floor(Math.random() * domains.length)];

        return email;
    }

    generateRandomName() {

        const firstNames = ["John", "Jane", "Alice", "Bob", "Emma", "Noah", "Olivia", "Liam", "Sophia", "Mason"];
        const lastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez"];

        const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
        const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];

        return `${firstName} ${lastName}`;
    }

    generateRandomDOB() {

        const currentYear = new Date().getFullYear();
        const minAge = 18;
        const maxAge = 60;
        const minYear = currentYear - maxAge;
        const maxYear = currentYear - minAge;

        const year = Math.floor(Math.random() * (maxYear - minYear + 1)) + minYear;
        const month = Math.floor(Math.random() * 12) + 1;

        let day;
        if ([4, 6, 9, 11].includes(month)) {
            day = Math.floor(Math.random() * 30) + 1;
        } else if (month === 2) {
            day = Math.floor(Math.random() * 28) + 1;
        } else {
            day = Math.floor(Math.random() * 31) + 1;
        }

        const formattedMonth = month < 10 ? `0${month}` : month;
        const formattedDay = day < 10 ? `0${day}` : day;

        return `${formattedDay}-${formattedMonth}-${year}`;
    }

    generateRandomUsername() {

        const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_";
        let username = "";
        const usernameLength = Math.floor(Math.random() * 10) + 5; // Random length between 5 and 15

        for (let i = 0; i < usernameLength; i++) {
            username += characters.charAt(Math.floor(Math.random() * characters.length));
        }

        return username;
    }

    generateRandomAdminRole() {

        const roles = [
            "Administrator",
            "Editor",
            "Moderator",
            "Business Analyst",
            "IT Support",
            "QA Manager",
            "Lead Viewer",
            "Lead Auditor",
            "Sr. Developer",
            "BQA Intern"
        ];

        // Randomly select a role from the list
        const randomRole = roles[Math.floor(Math.random() * roles.length)];

        // Optional: Add randomness for custom roles
        if (randomRole === "Custom Role") {
            const roleSuffix = Math.floor(Math.random() * 100); // Generate a number between 0 and 99
            return `${randomRole} ${roleSuffix}`;
        }

        return randomRole;
    }

    generateRandomRoleDescription() {

        const introPhrases = [
            "This role focuses on ",
            "The primary responsibility is ",
            "In this position, you will handle ",
            "The main tasks involve "
        ];

        const tasks = [
            "managing user permissions and settings, ",
            "overseeing content creation and approval, ",
            "monitoring system performance and metrics, ",
            "providing customer support and assistance, ",
            "developing and maintaining system features, ",
            "conducting data analysis and reporting, ",
            "ensuring compliance with policies and regulations, "
        ];

        const closingPhrases = [
            "and ensuring a high level of system security.",
            "while working closely with other team members.",
            "and collaborating with various departments.",
            "with opportunities for professional growth.",
            "and contributing to strategic planning."
        ];

        // Randomly select one phrase from each array
        const intro = introPhrases[Math.floor(Math.random() * introPhrases.length)];
        const task = tasks[Math.floor(Math.random() * tasks.length)];
        const closing = closingPhrases[Math.floor(Math.random() * closingPhrases.length)];

        // Combine the selected phrases
        return intro + task + closing;
    }
}

// Creating an instance of the RandomDataGenerator class
const randomData = new RandomDataGenerator();

// Example usage
// console.log("Random BD Phone Number:", randomData.generateRandomBDPhoneNumber());
// console.log("Random Email:", randomData.generateRandomEmail());
// console.log("Random Name:", randomData.generateRandomName());
// console.log("Random DOB:", randomData.generateRandomDOB());
// console.log("Random Username:", randomData.generateRandomUsername());
// console.log("Random Role:", randomData.generateRandomAdminRole());
// console.log("Random RoleDescription:", randomData.generateRandomRoleDescription());