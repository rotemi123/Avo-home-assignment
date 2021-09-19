import {
    searchStoreAndNavigate,
    openCart,
    closeCart,
    login,
    removeItemFromCart
} from "../support/commands"

const registerFields = "label + div ";
const firstName = "Rotem";

describe('Register as a user', () => {
    it('Register as a user', function () {
        searchStoreAndNavigate("st");
        cy.get('[href="/my-account/auth"]').click();
        cy.contains("Create").click();
        cy.get(registerFields).eq(0).type(firstName).as("First Name");
        cy.get(registerFields).eq(1).type("Weiss").as("Last Name");
        cy.get(registerFields).eq(2).type("rotemvy+"+ Math.random() +"@game.com").as("Email");
        cy.get(registerFields).eq(3).type("123123").as("Password");
        cy.get("button").contains("Sign Up").click();
        cy.wait(3000);
        cy.get('button#my-account-link').should('include.text', "Hello, " + firstName + "!");
    });
})