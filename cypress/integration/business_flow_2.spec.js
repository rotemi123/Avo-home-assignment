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
        cy.get('[data-testid="store.cart.deliveryDetails.aptUnit"]').type("3");
        cy.get('[data-testid="store.cart.deliveryDetails.phone"]').type("2343256457");
        cy.wait(4000);
        cy.get("[placeholder='Card number']").type("2010 1494 7776 5720 0926 234");
    });
})