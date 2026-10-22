import userData from '../fixtures/users/userData.json'

describe('Orange HRM Tests', () => {

  const selectorList = {
    usernameFild: "[name='username']",
    passwordFild: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: "[role='alert']",
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    firstNameField: "[name='firstName']",
    middleNameField: "[name='middleName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateField: "[placeholder='yyyy-mm-dd']",
    dateCloseButton: ".--close",
    submitButton: "[type='submit']",
    genericCombobox: ".oxd-select-text--arrow",
    ninthItemCombobox: ".oxd-select-dropdown > :nth-child(2)",
    thirdItemCombobox: ".oxd-select-dropdown > :nth-child(3)",
    sixthItemCombobox: ".oxd-select-dropdown > :nth-child(6)",
    genderRadioButton: ".oxd-radio-wrapper",
  }

  it('Login - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameFild).type(userData.userSucces.username)
    cy.get(selectorList.passwordFild).type(userData.userSucces.password)
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorList.dashboardGrid)
  })

  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameFild).type(userData.userFail.username)
    cy.get(selectorList.passwordFild).type(userData.userFail.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredentialAlert)
  })

  it.only('User Info Update - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameFild).type(userData.userSucces.username)
    cy.get(selectorList.passwordFild).type(userData.userSucces.password)
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorList.dashboardGrid)
    cy.get(selectorList.myInfoButton).click()
    cy.get(selectorList.firstNameField).clear().type('Paul')
    cy.get(selectorList.middleNameField).clear().type('Doe')
    cy.get(selectorList.lastNameField).clear().type('Smith')
    cy.get(selectorList.genericField).eq(3).clear().type('12345')
    cy.get(selectorList.genericField).eq(4).clear().type('abc')
    cy.get(selectorList.genericField).eq(5).clear().type('abcd')
    cy.get(selectorList.genericField).eq(6).clear().type('2026-10-19')
    cy.get(selectorList.dateCloseButton).click()
    cy.get(selectorList.genericCombobox).eq(0).click()
    cy.get(selectorList.ninthItemCombobox).click()
    cy.get(selectorList.genericCombobox).eq(1).click()
    cy.get(selectorList.thirdItemCombobox).click()
    cy.get(selectorList.genericField).eq(8).clear().type('2004-10-19')
    cy.get(selectorList.dateCloseButton).click()
    cy.get(selectorList.submitButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get(selectorList.genderRadioButton).eq(0).click()
    cy.get(selectorList.genericCombobox).eq(2).click()
    cy.get(selectorList.sixthItemCombobox).click()
    cy.get(selectorList.genericField).eq(9).clear().type('123')
    cy.get(selectorList.submitButton).eq(1).click()
    cy.get('body').should('contain', 'Successfully Saved')
    cy.get('.oxd-toast-close')
  })
})