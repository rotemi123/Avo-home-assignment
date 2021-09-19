import {
    searchStoreAndNavigate,
    openCart,
    closeCart,
    login,
    removeItemFromCart
} from "../support/commands"

describe('Go to cart and checkout your items', () => {
    it('Execute checkout with wrong credit card number', function () {
        searchStoreAndNavigate("lex");
        login();
        openCart();
        cy.wait(4000);
        cy.get('[href="/cart/checkout"]').click();
        cy.wait(3000);
        cy.get('[data-testid="store.cart.deliveryDetails.aptUnit"]').type("3");
        cy.get('[data-testid="store.cart.deliveryDetails.phone"]').type("2343256457");
        cy.wait(4000);
        cy.get("#card-element input").type("2010 1494 7776 5720 0926 234");
        cy.get("[data-testid='store.placeOrderButton'").click();
        //TODO add assertion cypress click the checkout button but wont print error massage
        cy.get("p").contains("Your card number is incorrect.")
    });
})