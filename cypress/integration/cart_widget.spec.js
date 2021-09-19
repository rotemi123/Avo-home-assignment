import {
    searchStoreAndNavigate,
    openCart,
    closeCart,
    login,
    removeItemFromCart
} from "../support/commands"

describe('Cart tests', () => {
    before("Navigate to page and login", () => {
        cy.viewport(1920, 868);
        searchStoreAndNavigate("lex");
        login();
    })

    it('Open cart', () => {
        openCart();
        cy.get('.MuiDialogContent-root').should('be.visible');
        closeCart();
    })

    it('Remove item from cart', () => {
        cy.viewport(1920, 868);
        openCart();
        cy.wait(4000);
        removeItemFromCart();
        closeCart();
    })

    it('Click view cart from cart widget get to view cart page', () => {
        cy.viewport(1920, 868);
        cy.wait(4000);
        cy.get('[href="/cart/my-cart"]').click();
        cy.get('[href="/cart/checkout"]').should('be.visible')
    })
})