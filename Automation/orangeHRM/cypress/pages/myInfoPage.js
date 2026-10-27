class MyInfoPage {

    selectorList() {

        const selectors = {
            firstNameField: "[name='firstName']",
            middleNameField: "[name='middleName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            dateField: "input[placeholder='yyyy-dd-mm']",
            dateCloseButton: ".--close",
            submitButton: "[type='submit']",
            genericCombobox: ".oxd-select-text--arrow",
            secondItemCombobox: ".oxd-select-dropdown > :nth-child(2)",
            thirdItemCombobox: ".oxd-select-dropdown > :nth-child(3)",
            fourthItemCombobox: ".oxd-select-dropdown > :nth-child(4)",
            genderRadioButton: ".oxd-radio-wrapper",

        }    

        return selectors

    }   

    fillPersonalDetails(firstName, middleName, lastName) {
        cy.get(this.selectorList().firstNameField).clear().type(firstName)
        cy.get(this.selectorList().middleNameField).clear().type(middleName)
        cy.get(this.selectorList().lastNameField).clear().type(lastName)
    }

    fillEmployeeDetails(employeeId, otherId, driversLicenseNumber, licenseExpiryDate, dateOfBirth, testeField) {
        cy.get(this.selectorList().genericField).eq(3).clear().type(employeeId)
        cy.get(this.selectorList().genericField).eq(4).clear().type(otherId)
        cy.get(this.selectorList().genericField).eq(5).clear().type(driversLicenseNumber)
        cy.get(this.selectorList().genericField).eq(6).clear().type(licenseExpiryDate)
        cy.get(this.selectorList().dateCloseButton).click()
        cy.get(this.selectorList().genericField).eq(7).clear().type(dateOfBirth)
        cy.get(this.selectorList().dateCloseButton).click()
        cy.get(this.selectorList().genderRadioButton).eq(0).click()
        cy.get(this.selectorList().genericField).eq(9).clear().type(testeField)
        
    }

    fillStatus() {
        cy.get(this.selectorList().genericCombobox).eq(0).click()
        cy.get(this.selectorList().secondItemCombobox).click()
        cy.get(this.selectorList().genericCombobox).eq(1).click()
        cy.get(this.selectorList().thirdItemCombobox).click()
        cy.get(this.selectorList().genericCombobox).eq(2).click()
        cy.get(this.selectorList().fourthItemCombobox).click()
    }

    saveFormDetails() {
        cy.get(this.selectorList().submitButton).eq(0).click()
    }

    saveFormFields() {
        cy.get(this.selectorList().submitButton).eq(1).click()
        cy.get('.oxd-toast-close')
    }

}

export default MyInfoPage