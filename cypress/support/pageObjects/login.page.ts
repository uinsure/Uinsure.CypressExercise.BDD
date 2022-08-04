class LoginPage {
    get email() {
        return cy.get('#login-email-address');
    }

    get password() {
        return cy.get('#login-password');
    }

    get signInButton() {
        return cy.get('[data-testid="login-sign-in"]');
    }
}

export default new LoginPage();
