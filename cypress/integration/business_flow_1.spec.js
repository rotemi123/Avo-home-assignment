import {
    searchStoreAndNavigate,
    openCart,
    closeCart,
    login,
    removeItemFromCart
} from "../support/commands"

describe('Register as a user', () => {
    it('Register as a user', function () {
        searchStoreAndNavigate("st");
        cy.get('[href="/my-account/auth"]').click();
        cy.contains("Create").click();
        cy.get("label + div ").eq(0).type("Rotem").as("First Name");
        cy.get("label + div ").eq(1).type("Weiss").as("Last Name");
        cy.get("label + div ").eq(2).type("rotemvy@game.com").as("Email");
        cy.get("label + div ").eq(3).type("123123").as("Password");
        cy.get("button").contains("Sign Up").click();

    });
})