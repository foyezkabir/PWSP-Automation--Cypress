describe("PWSP SignUp", () => {

	it('TC-1: SignUp with Valid information', () => {
		// Visit the PWSP login page
		cy.visit('/')
		//cy.visit('https://pwspadmindemo.shadintech.com/pages/login')

		cy.contains('Sign Up').click()
		cy.wait(1500)

		cy.get('.form-body').find('#name').then(Fullname => {
			cy.wrap(Fullname).type('Foyez Kabir').invoke('prop', 'value').then(NameVlaue => {
				expect(NameVlaue).to.equal('Foyez Kabir')
			})
		})
		cy.get('.form-body').find('[type="tel"]').then(Phone => {
			cy.wrap(Phone).type('1783367087').invoke('prop', 'value').then(PhoneVlaue => {
				expect(PhoneVlaue).to.equal('+8801783367087')
			})
		})

		cy.get('.form-body').find('#current_password').then(Password => {
			cy.wrap(Password).type('Kabirwiit18#').invoke('prop', 'value').then(PasswordVlaue => {
				expect(PasswordVlaue).to.equal('Kabirwiit18#')
			})
		})

		cy.get('.form-body').find('#confirm_new_password').then(ConfirmPassword => {
			cy.wrap(ConfirmPassword).type('Kabirwiit18#').invoke('prop', 'value').then(ConfirmPasswordVlaue => {
				expect(ConfirmPasswordVlaue).to.equal('Kabirwiit18#')
			})
		})

		cy.get('.form-body').find('#email').then(Email => {
			cy.wrap(Email).type('Kabirwiit18@gmail.com').invoke('prop', 'value').then(EmailVlaue => {
				expect(EmailVlaue).to.equal('Kabirwiit18@gmail.com')
			})
		})

		cy.get('.form-body').find('[placeholder="DD-MM-YYYY"]').click().then(DOB => {
			cy.wrap(DOB).type('16-11-1998').invoke('prop', 'value').then(DOBValue => {
				expect(DOBValue).that.equal('16-11-1998')
			})
		})

		cy.get('[type="submit"]').click()
		cy.wait(2000)

	})

	it('TC-2: Go to Login page from SignUp page', () => {
		// Visit the PWSP login page
		cy.visit('/')
		//cy.visit('https://pwspadmindemo.shadintech.com/pages/login')

		cy.contains('Sign Up').click()
		cy.wait(1500)

		cy.get('.btn-link').click()
		cy.wait(1500)
	})

	it('TC-3: SignUp with Invalid name and all other Valid information', () => {
		// Visit the PWSP login page
		cy.visit('/')
		//cy.visit('https://pwspadmindemo.shadintech.com/pages/login')

		cy.contains('Sign Up').click()
		cy.wait(1500)

		cy.get('.form-body').find('#name').then(Fullname => {
			cy.wrap(Fullname).type('#$%^$%^').invoke('prop', 'value').then(NameVlaue => {
				expect(NameVlaue).to.equal('#$%^$%^')
				cy.wait(1500)

			})
		})
		cy.get('.form-body').find('[type="tel"]').then(Phone => {
			cy.wrap(Phone).type('1783367087').invoke('prop', 'value').then(PhoneVlaue => {
				expect(PhoneVlaue).to.equal('+8801783367087')
			})
		})

		cy.get('.form-body').find('#current_password').then(Password => {
			cy.wrap(Password).type('Kabirwiit18#').invoke('prop', 'value').then(PasswordVlaue => {
				expect(PasswordVlaue).to.equal('Kabirwiit18#')
			})
		})

		cy.get('.form-body').find('#confirm_new_password').then(ConfirmPassword => {
			cy.wrap(ConfirmPassword).type('Kabirwiit18#').invoke('prop', 'value').then(ConfirmPasswordVlaue => {
				expect(ConfirmPasswordVlaue).to.equal('Kabirwiit18#')
			})
		})

		cy.get('.form-body').find('#email').then(Email => {
			cy.wrap(Email).type('Kabirwiit18@gmail.com').invoke('prop', 'value').then(EmailVlaue => {
				expect(EmailVlaue).to.equal('Kabirwiit18@gmail.com')
			})
		})

		cy.get('.form-body').find('[placeholder="DD-MM-YYYY"]').click().then(DOB => {
			cy.wrap(DOB).type('16-11-1998').invoke('prop', 'value').then(DOBValue => {
				expect(DOBValue).that.equal('16-11-1998')
			})
		})

		cy.get('[type="submit"]').click()
		cy.wait(2000)

	})

	it('TC-4: SignUp with Missmatched passwords and all other Valid information', () => {
		// Visit the PWSP login page
		cy.visit('/')
		//cy.visit('https://pwspadmindemo.shadintech.com/pages/login')

		cy.contains('Sign Up').click()
		cy.wait(1500)

		cy.get('.form-body').find('#name').then(Fullname => {
			cy.wrap(Fullname).type('Foyez Kabir').invoke('prop', 'value').then(NameVlaue => {
				expect(NameVlaue).to.equal('Foyez Kabir')

			})
		})
		cy.get('.form-body').find('[type="tel"]').then(Phone => {
			cy.wrap(Phone).type('1783367087').invoke('prop', 'value').then(PhoneVlaue => {
				expect(PhoneVlaue).to.equal('+8801783367087')
			})
		})

		cy.get('.form-body').find('#current_password').then(Password => {
			cy.wrap(Password).type('Kabirwiit18#').invoke('prop', 'value').then(PasswordVlaue => {
				expect(PasswordVlaue).to.equal('Kabirwiit18#')
			})
		})

		cy.get('.form-body').find('#confirm_new_password').then(ConfirmPassword => {
			cy.wrap(ConfirmPassword).type('Kabirwiit18').invoke('prop', 'value').then(ConfirmPasswordVlaue => {
				expect(ConfirmPasswordVlaue).to.equal('Kabirwiit18')
				cy.wait(1500)
			})
		})

		cy.get('.form-body').find('#email').then(Email => {
			cy.wrap(Email).type('Kabirwiit18@gmail.com').invoke('prop', 'value').then(EmailVlaue => {
				expect(EmailVlaue).to.equal('Kabirwiit18@gmail.com')
			})
		})

		cy.get('.form-body').find('[placeholder="DD-MM-YYYY"]').click().then(DOB => {
			cy.wrap(DOB).type('16-11-1998').invoke('prop', 'value').then(DOBValue => {
				expect(DOBValue).that.equal('16-11-1998')
			})
		})

		cy.get('[type="submit"]').click()
		cy.wait(2000)

	})

	it('TC-5: SignUp with Invalid Email and all other Valid information', () => {
		// Visit the PWSP login page
		cy.visit('/')
		//cy.visit('https://pwspadmindemo.shadintech.com/pages/login')

		cy.contains('Sign Up').click()
		cy.wait(1500)

		cy.get('.form-body').find('#name').then(Fullname => {
			cy.wrap(Fullname).type('Foyez Kabir').invoke('prop', 'value').then(NameVlaue => {
				expect(NameVlaue).to.equal('Foyez Kabir')

			})
		})
		cy.get('.form-body').find('[type="tel"]').then(Phone => {
			cy.wrap(Phone).type('1783367087').invoke('prop', 'value').then(PhoneVlaue => {
				expect(PhoneVlaue).to.equal('+8801783367087')
			})
		})

		cy.get('.form-body').find('#current_password').then(Password => {
			cy.wrap(Password).type('Kabirwiit18#').invoke('prop', 'value').then(PasswordVlaue => {
				expect(PasswordVlaue).to.equal('Kabirwiit18#')
			})
		})

		cy.get('.form-body').find('#confirm_new_password').then(ConfirmPassword => {
			cy.wrap(ConfirmPassword).type('Kabirwiit18#').invoke('prop', 'value').then(ConfirmPasswordVlaue => {
				expect(ConfirmPasswordVlaue).to.equal('Kabirwiit18#')
				cy.wait(1500)
			})
		})

		cy.get('.form-body').find('#email').then(Email => {
			cy.wrap(Email).type('Kabirwiit18gmail.com').invoke('prop', 'value').then(EmailVlaue => {
				expect(EmailVlaue).to.equal('Kabirwiit18gmail.com')
				cy.wait(1500)
			})
		})

		cy.get('.form-body').find('[placeholder="DD-MM-YYYY"]').click().then(DOB => {
			cy.wrap(DOB).type('16-11-1998').invoke('prop', 'value').then(DOBValue => {
				expect(DOBValue).that.equal('16-11-1998')
			})
		})

		cy.get('[type="submit"]').click()
		cy.wait(2000)

	})

	it('TC-6: SignUp with Invalid Phone and all other Valid information', () => {
		// Visit the PWSP login page
		cy.visit('/')
		//cy.visit('https://pwspadmindemo.shadintech.com/pages/login')

		cy.contains('Sign Up').click()
		cy.wait(1500)

		cy.get('.form-body').find('#name').then(Fullname => {
			cy.wrap(Fullname).type('Foyez Kabir').invoke('prop', 'value').then(NameVlaue => {
				expect(NameVlaue).to.equal('Foyez Kabir')

			})
		})
		cy.get('.form-body').find('[type="tel"]').then(Phone => {
			cy.wrap(Phone).type('178336708').invoke('prop', 'value').then(PhoneVlaue => {
				expect(PhoneVlaue).to.equal('+880178336708')
				cy.get('.form-body').click()
				cy.wait(1500)
				cy.get('.phn-error-message').should('contain', 'Enter a valid phone number')
			})
		})

		cy.get('.form-body').find('#current_password').then(Password => {
			cy.wrap(Password).type('Kabirwiit18#').invoke('prop', 'value').then(PasswordVlaue => {
				expect(PasswordVlaue).to.equal('Kabirwiit18#')
			})
		})

		cy.get('.form-body').find('#confirm_new_password').then(ConfirmPassword => {
			cy.wrap(ConfirmPassword).type('Kabirwiit18#').invoke('prop', 'value').then(ConfirmPasswordVlaue => {
				expect(ConfirmPasswordVlaue).to.equal('Kabirwiit18#')
				cy.wait(1500)
			})
		})

		cy.get('.form-body').find('#email').then(Email => {
			cy.wrap(Email).type('Kabirwiit18@gmail.com').invoke('prop', 'value').then(EmailVlaue => {
				expect(EmailVlaue).to.equal('Kabirwiit18@gmail.com')
				cy.wait(1500)
			})
		})

		cy.get('.form-body').find('[placeholder="DD-MM-YYYY"]').click().then(DOB => {
			cy.wrap(DOB).type('16-11-1998').invoke('prop', 'value').then(DOBValue => {
				expect(DOBValue).that.equal('16-11-1998')
			})
		})

		cy.get('[type="submit"]').click()
		cy.wait(2000)

	})

	it('TC-7: SignUp with Existing Phone and all other Valid information', () => {
		// Visit the PWSP login page
		cy.visit('/')
		//cy.visit('https://pwspadmindemo.shadintech.com/pages/login')

		cy.contains('Sign Up').click()
		cy.wait(1500)

		cy.get('.form-body').find('#name').then(Fullname => {
			cy.wrap(Fullname).type('Foyez Kabir').invoke('prop', 'value').then(NameVlaue => {
				expect(NameVlaue).to.equal('Foyez Kabir')

			})
		})
		cy.get('.form-body').find('[type="tel"]').then(Phone => {
			cy.wrap(Phone).type('1783367056').invoke('prop', 'value').then(PhoneVlaue => {
				expect(PhoneVlaue).to.equal('+8801783367056')
				cy.get('.form-body').click()
				cy.wait(1500)
				cy.get('.error-message').should('contain', 'Customer Already Exists')
			})
		})

		cy.get('.form-body').find('#current_password').then(Password => {
			cy.wrap(Password).type('Kabirwiit18#').invoke('prop', 'value').then(PasswordVlaue => {
				expect(PasswordVlaue).to.equal('Kabirwiit18#')
			})
		})

		cy.get('.form-body').find('#confirm_new_password').then(ConfirmPassword => {
			cy.wrap(ConfirmPassword).type('Kabirwiit18#').invoke('prop', 'value').then(ConfirmPasswordVlaue => {
				expect(ConfirmPasswordVlaue).to.equal('Kabirwiit18#')
				cy.wait(1500)
			})
		})

		cy.get('.form-body').find('#email').then(Email => {
			cy.wrap(Email).type('Kabirwiit18@gmail.com').invoke('prop', 'value').then(EmailVlaue => {
				expect(EmailVlaue).to.equal('Kabirwiit18@gmail.com')
				cy.wait(1500)
			})
		})

		cy.get('.form-body').find('[placeholder="DD-MM-YYYY"]').click().then(DOB => {
			cy.wrap(DOB).type('16-11-1998').invoke('prop', 'value').then(DOBValue => {
				expect(DOBValue).that.equal('16-11-1998')
			})
		})

		cy.get('[type="submit"]').click()
		cy.wait(2000)

	})

	it('TC-8: SignUp by keeping mandatory field (Name field) empty', () => {
		// Visit the PWSP login page
		cy.visit('/')
		//cy.visit('https://pwspadmindemo.shadintech.com/pages/login')

		cy.contains('Sign Up').click()
		cy.wait(1500)

		// cy.get('.form-body').find('#name').then(Fullname => {
		//   cy.wrap(Fullname).type('Foyez Kabir').invoke('prop', 'value').then(NameVlaue => {
		//       expect(NameVlaue).to.equal('Foyez Kabir')

		//   })
		// })
		cy.get('.form-body').find('[type="tel"]').then(Phone => {
			cy.wrap(Phone).type('178336708').invoke('prop', 'value').then(PhoneVlaue => {
				expect(PhoneVlaue).to.equal('+880178336708')
			})
		})

		cy.get('.form-body').find('#current_password').then(Password => {
			cy.wrap(Password).type('Kabirwiit18#').invoke('prop', 'value').then(PasswordVlaue => {
				expect(PasswordVlaue).to.equal('Kabirwiit18#')
			})
		})

		cy.get('.form-body').find('#confirm_new_password').then(ConfirmPassword => {
			cy.wrap(ConfirmPassword).type('Kabirwiit18#').invoke('prop', 'value').then(ConfirmPasswordVlaue => {
				expect(ConfirmPasswordVlaue).to.equal('Kabirwiit18#')
				cy.wait(1500)
			})
		})

		cy.get('.form-body').find('#email').then(Email => {
			cy.wrap(Email).type('Kabirwiit18@gmail.com').invoke('prop', 'value').then(EmailVlaue => {
				expect(EmailVlaue).to.equal('Kabirwiit18@gmail.com')
				cy.wait(1500)
			})
		})

		cy.get('.form-body').find('[placeholder="DD-MM-YYYY"]').click().then(DOB => {
			cy.wrap(DOB).type('16-11-1998').invoke('prop', 'value').then(DOBValue => {
				expect(DOBValue).that.equal('16-11-1998')
			})
		})

		cy.get('[type="submit"]').click()
		cy.wait(2000)

	})

	it('TC-9: SignUp by keeping Optional field (Email field) empty', () => {
		// Visit the PWSP login page
		cy.visit('/')
		//cy.visit('https://pwspadmindemo.shadintech.com/pages/login')

		cy.contains('Sign Up').click()
		cy.wait(1500)

		cy.get('.form-body').find('#name').then(Fullname => {
			cy.wrap(Fullname).type('Foyez Kabir').invoke('prop', 'value').then(NameVlaue => {
				expect(NameVlaue).to.equal('Foyez Kabir')

			})
		})
		cy.get('.form-body').find('[type="tel"]').then(Phone => {
			cy.wrap(Phone).type('178336708').invoke('prop', 'value').then(PhoneVlaue => {
				expect(PhoneVlaue).to.equal('+880178336708')
			})
		})

		cy.get('.form-body').find('#current_password').then(Password => {
			cy.wrap(Password).type('Kabirwiit18#').invoke('prop', 'value').then(PasswordVlaue => {
				expect(PasswordVlaue).to.equal('Kabirwiit18#')
			})
		})

		cy.get('.form-body').find('#confirm_new_password').then(ConfirmPassword => {
			cy.wrap(ConfirmPassword).type('Kabirwiit18#').invoke('prop', 'value').then(ConfirmPasswordVlaue => {
				expect(ConfirmPasswordVlaue).to.equal('Kabirwiit18#')
				cy.wait(1500)
			})
		})

		// cy.get('.form-body').find('#email').then(Email => {
		//     cy.wrap(Email).type('Kabirwiit18@gmail.com').invoke('prop', 'value').then(EmailVlaue => {
		//         expect(EmailVlaue).to.equal('Kabirwiit18@gmail.com')
		//         cy.wait(1500)
		//   })
		// })

		cy.get('.form-body').find('[placeholder="DD-MM-YYYY"]').click().then(DOB => {
			cy.wrap(DOB).type('16-11-1998').invoke('prop', 'value').then(DOBValue => {
				expect(DOBValue).to.equal('16-11-1998')
			})
		})

		cy.get('[type="submit"]').click()
		cy.wait(2000)

	})

	it('TC-10: SignUp by keeping all mandatory & Optional fields empty', () => {
		// Visit the PWSP login page
		cy.visit('/')
		//cy.visit('https://pwspadmindemo.shadintech.com/pages/login')

		cy.contains('Sign Up').click()
		cy.wait(1500)

		cy.get('[type="submit"]').click()
		cy.wait(2000)

	})

	it('TC-11: Verify that the name field accepts blank spaces or not', () => {
		// Visit the PWSP login page
		cy.visit('/')
		//cy.visit('https://pwspadmindemo.shadintech.com/pages/login')

		cy.contains('Sign Up').click()
		cy.wait(1500)

		cy.get('.form-body').find('#name').then(Fullname => {
			cy.wrap(Fullname).type('   ').invoke('prop', 'value').then(NameVlaue => {
				expect(NameVlaue).to.equal('   ')
				cy.get('.form-body').click()
				cy.wait(1500)
				cy.get('.error-message').should('contain', 'Full name is required')

			})
		})

	})

	it('TC-12: Verify that the Password field accept less than 6 digit or not', () => {
		// Visit the PWSP login page
		cy.visit('/')
		//cy.visit('https://pwspadmindemo.shadintech.com/pages/login')

		cy.contains('Sign Up').click()
		cy.wait(1500)

		cy.get('.form-body').find('#current_password').then(Password => {
			cy.wrap(Password).type('Kabir').invoke('prop', 'value').then(PasswordVlaue => {
				expect(PasswordVlaue).to.equal('Kabir')
				cy.get('.form-body').click()
				cy.wait(1500)
				cy.get('.error-message').should('contain', 'password should be at least 6 characters long')
			})
		})

	})
})