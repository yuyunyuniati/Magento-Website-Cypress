describe('Create an Account', () => {
    function randomMail(){
      const randomString = Math.random().toString(36).substring(2,10)
      const mail = randomString + "@gmail.com"
      return mail
    }
  
    function randomName(){
      const randomString = Math.random().toString(36).substring(2,10)
      const name = "User"+randomString
      return name
    }
  
    let gmail = randomMail()
    let firstName = randomName()
  
    beforeEach(() => {
      cy.visit('/')
    })
    
    
    it('Positive Test - Create account success', () => {
      cy.contains ('Create an Account', {timeout: 50000}).click()
      cy.get('#firstname').type(firstName)
      cy.get('[name="lastname"').type('yuyun')
      cy.get('#email_address').type(gmail)
      cy.get('#password').type('Yuyun1227')
      cy.get('#password-confirmation').type('Yuyun1227')
      cy.get('.action.submit.primary').click()
      cy.url().should('include','https://magento.softwaretestingboard.com/customer/account/')
      cy.contains('Thank you for registering with Main Website Store.').should('be.visible')
    })
  
    it('Negative Test - Create account alerdy exists', () => {
      cy.contains ('Create an Account', {timeout: 30000}).click()
      cy.get('#firstname').type('yuyun')
      cy.get('[name="lastname"').type('yuniati')
      cy.get('#email_address').type('yuyun1227@gmail.com')
      cy.get('#password').type('Password123')
      cy.get('#password-confirmation').type('Password123')
      cy.get('.action.submit.primary').click()
      cy.contains('There is already an account with this email address.').should('be.visible')
    })

    it('Positive Test - success login', () => {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/login')
        cy.get('#email').type('yuyun1227@gmail.com')
        cy.get('#pass').type('Yuyun1227')
        cy.get('#send2').click()
      })

      it('Negative Test - failed login', () => {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/login')
        cy.get('#email').type('yuyun123@gmail.com')
        cy.get('#pass').type('Yuyun1227')
        cy.get('#send2').click()
      })
    })
    
 