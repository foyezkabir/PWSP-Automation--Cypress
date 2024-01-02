describe('PWSP Login', () => {
    it.only('TC-1: Login with Valid username & Password', () => {
      // Visit the PWSP login page
        cy.visit('/')
      //cy.visit('https://pwspadmindemo.shadintech.com/pages/login');
  
      // Fill in the Username field
      cy.get("#email").type('mahadihasanjoy')
      cy.get("#email").invoke('prop', 'value').then(test => {
        expect(test).to.equal('mahadihasanjoy')
      })
  
      // Fill in the password field
      cy.get("#password").type('Shadhin1995@')
      cy.get("#password").invoke('prop', 'value').then(test1 => {
        expect(test1).to.equal('Shadhin1995@')
      })
  
      // Click on the login button
      cy.get('[type="submit"]').click();
      cy.wait(5000)

    });

    it('TC-2: Login with Invalid username & Valid Password', () => {
        // Visit the PWSP login page
        cy.visit('/')

        cy.get("#email").type('mahadihasan')
        cy.get("#password").type('Shadhin1995@')
        cy.get('[type="submit"]').click()
        cy.wait(5000)

      });

      it('TC-3: Login with Valid username & Invalid Password', () => {
        // Visit the PWSP login page
        cy.visit('/')
    
        cy.get("#email").type('mahadihasanjoy')
        cy.get("#password").type('Shadhin1995')
        cy.get('[type="submit"]').click()
        cy.wait(5000)
    });

    it('TC-4: Login with filled username & empty Password field', () => {
        // Visit the PWSP login page
        cy.visit('/')

        cy.get("#email").type('mahadihasanjoy')
        //cy.get("#password").type(' ')
        cy.get('[type="submit"]').click()
        cy.wait(3000)
    });

    it('TC-5: Login with empty username & filled Password field', () => {
        // Visit the PWSP login page
        cy.visit('/')

        //cy.get("#email").type(' ')
        cy.get("#password").type('Shadhin1995@')
        cy.get('[type="submit"]').click()
        cy.wait(3000)
    });

    //1st way
    it('TC-6: Login with both empty username & Password field', () => {
        // Visit the PWSP login page
          cy.visit('/')

        cy.get("#email").type(' ')
        cy.get("#password").type(' ')
        cy.get('[type="submit"]').click()
        cy.wait(2000)
    });

    // 2nd way
    it('TC-7: Login with All Fields Empty', () => {
        // Visit the PWSP login page
        cy.visit('/')

        cy.get('[type="submit"]').click()
        cy.wait(3000)
    });

    it('TC-8: Login with Leading and Trailing Spaces in Password', () => {
        // Visit the PWSP login page
        cy.visit('/')

        cy.get("#email").type('mahadihasanjoy')
        cy.get("#password").type('  Shadhin1995@  ')
        cy.get('[type="submit"]').click()
    });

     // Additional test cases
     it('TC-9: Login with Excessively Long Username and Valid Password', () => {
        // Visit the PWSP login page
        cy.visit('/')

        cy.get("#email").type('mahadihasana'.repeat(30) + 'joy')
        cy.get("#password").type('Shadhin1995@')
        cy.get('[type="submit"]').click()
        cy.wait(5000)
    });

    it('TC-10: Login with Valid Username and Excessively Long Password', () => {
        // Visit the PWSP login page
        cy.visit('/')

        cy.get("#email").type('mahadihasanjoy')
        cy.get("#password").type('a'.repeat(300))
        cy.get('[type="submit"]').click()
        cy.wait(5000)
    });

    it('TC-11: Login with Username Containing Special Characters', () => {
        // Visit the PWSP login page
        cy.visit('/')

        cy.get("#email").type('mahadihasanjoy#$*=-')
        cy.get("#password").type('Shadhin1995@')
        cy.get('[type="submit"]').click()
        cy.wait(5000)
    });

    it('TC-12: Login with Password Containing Special Characters', () => {
        // Visit the PWSP login page
        cy.visit('/')

        cy.get("#email").type('mahadihasanjoy')
        cy.get("#password").type('!@#%^&*()_+')
        cy.get('[type="submit"]').click()
        cy.wait(5000)
    });

    it('TC-13: Login with Username in Different Case', () => {
        // Visit the PWSP login page
        cy.visit('/')

        cy.get("#email").type('MAHADIHASANJOY')
        cy.get("#password").type('Shadhin1995@')
        cy.get('[type="submit"]').click()
        cy.wait(5000)
    });

    it('TC-14: Login with SQL Injection Strings in Username/Password', () => {
        // Visit the PWSP login page
        cy.visit('/')

        cy.get("#email").type("' OR '1'='1")
        cy.get("#password").type("' OR '1'='1")
        cy.get('[type="submit"]').click()
    });

    it('TC-15: Login Attempt After Multiple Failed Attempts', () => {
        // Visit the PWSP login page
        cy.visit('/')

        for(let i = 0; i < 5; i++) {
            cy.get("#email").type('invalidUser')
            cy.get("#password").type('invalidPassword')
            cy.get('[type="submit"]').click()
            cy.wait(1500) // Adjust waiting time as needed
        }
    });

    it('TC-16: Login with Disabled or Inactive User Account', () => {
        // Visit the PWSP login page
        cy.visit('/')

        cy.get("#email").type('disabledUser')
        cy.get("#password").type('Shadhin1995@')
        cy.get('[type="submit"]').click()
        cy.wait(5000)
    });

    it('TC-17: Login with Unregistered Account', () => {
        // Visit the PWSP login page
        cy.visit('/')
        
        cy.get("#email").type('Unregistered user')
        cy.get("#password").type('Shadhin1995@')
        cy.get('[type="submit"]').click()
        cy.wait(5000)
    });

    it('TC-18: Login with a Script or HTML Tags in Username/Password', () => {
        // Visit the PWSP login page
        cy.visit('/')

        cy.get("#email").type('<script>alert("XSS")</script>')
        cy.get("#password").type('<h1>HTML Injection</h1>')
        cy.get('[type="submit"]').click()
    });
});