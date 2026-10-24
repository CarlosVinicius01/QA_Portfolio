class loginPage {

    selectorsList() {
        const selectors = {
            usernameFild: "[name='username']",
            passwordFild: "[name='password']",
            loginButton: "[type='submit']",
            wrongCredentialAlert: "[role='alert']",
        }

        return selectors
    }

    accessLoginPage() {
        cy.visit('/auth/login')
    }

    loginWithUser(username, password) {
        cy.get(this.selectorsList().usernameFild).type(username)
        cy.get(this.selectorsList().passwordFild).type(password)
        cy.get(this.selectorsList().loginButton).click()
    }

    loginWithInvalidUser(username, password) {
        cy.get(this.selectorsList().usernameFild).type(username)
        cy.get(this.selectorsList().passwordFild).type(password)
        cy.get(this.selectorsList().loginButton).click()
        cy.get(this.selectorsList().wrongCredentialAlert)
    }

    loginWithInfoUpdate(username, password) {
        cy.get(this.selectorsList().usernameFild).type(username)
        cy.get(this.selectorsList().passwordFild).type(password)
        cy.get(this.selectorsList().loginButton).click()
    }

}
export default loginPage