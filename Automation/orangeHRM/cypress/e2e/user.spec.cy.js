import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage.js'
import MyInfo from '../pages/myInfo.js'

const loginPage = new LoginPage()
const myInfo = new MyInfo()

describe('Orange HRM Tests', () => {


  it('Login - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSucces.username, userData.userSucces.password)
  })

  it('Login - Fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithInvalidUser(userData.userFail.username, userData.userFail.password)
  })

  it('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSucces.username, userData.userSucces.password)
    myInfo.dataModification(
        'Paul',
        'Doe',
        'Smith',
        '12345',
        'abc',
        'abcd',
        '2026-10-19',
        'American',
        'Married',
        '2004-10-19',
        'Male',
        'O+',
        '123'
    )

  })

})