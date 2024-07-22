class login{
    // all the details related to login will be available here


    email = "#input-email"
    password = "#input-password"
    login = "input[value='Login']"

    visit(){
        cy.visit('https://tutorialsninja.com/demo/');
    }

    setupEmail(enter){
        cy.get(this.email).type(enter);
    }

    setupPassword(enter){
        cy.get(this.password).type(enter);
    }

    clickLogin(){
        cy.get(this.login).click();
    }

}

export default login;
