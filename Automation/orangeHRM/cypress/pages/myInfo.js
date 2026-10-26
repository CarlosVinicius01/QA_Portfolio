
class MyInfo {

    selectorList() {
        const selectors = {
            dashboardGrid: ".orangehrm-dashboard-grid",
            myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
            sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
            wrongCredentialAlert: "[role='alert']",
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

        return selectors
    }

    dashboardGrid() {
        cy.get(this.selectorList().dashboardGrid)
    }

    myInfoButton() {
        return cy.get(this.selectorList().myInfoButton)
    }

    accessDashboardPage() {
        cy.visit('/web/index.php/dashboard/index')
    }

    dataModification(
        firstName,
        middleName,
        lastName,
        employeeId,
        otherId,
        driverLicenseNumber,
        licenseExpiryDate,
        nationality,
        maritalStatus,
        dateOfBirth,
        gender,
        bloodType,
        testeField
    ) {
        this.dashboardGrid()
        this.myInfoButton().click()

        cy.get(this.selectorList().firstNameField)
            .clear().type(firstName)

        cy.get(this.selectorList().middleNameField)
            .clear().type(middleName)

        cy.get(this.selectorList().lastNameField)
            .clear().type(lastName)

        cy.get(this.selectorList().genericField).eq(3)
            .clear().type(employeeId)

        cy.get(this.selectorList().genericField).eq(4)
            .clear().type(otherId)

        cy.get(this.selectorList().genericField).eq(5)
            .clear().type(driverLicenseNumber)

        cy.get(this.selectorList().genericField).eq(6)
            .clear().type(licenseExpiryDate)

        cy.get(this.selectorList().dateCloseButton).click()

        cy.get(this.selectorList().genericCombobox).eq(0).click()
        cy.get(this.selectorList().ninthItemCombobox).click()

        cy.get(this.selectorList().genericCombobox).eq(1).click()
        cy.get(this.selectorList().thirdItemCombobox).click()

        cy.get(this.selectorList().genericField).eq(8)
            .clear().type(dateOfBirth)

        cy.get(this.selectorList().dateCloseButton).click()

        cy.get(this.selectorList().submitButton).eq(0).click()

        cy.get('body').should('contain', 'Successfully Updated')

        cy.get(this.selectorList().genderRadioButton).eq(0).click()

        cy.get(this.selectorList().genericCombobox).eq(2).click()
        cy.get(this.selectorList().sixthItemCombobox).click()

        cy.get(this.selectorList().genericField).eq(9)
            .clear().type(testeField)

        cy.get(this.selectorList().submitButton).eq(1).click()

        cy.get('body').should('contain', 'Successfully Saved')

        cy.get('.oxd-toast-close')
    }
}

export default MyInfo
