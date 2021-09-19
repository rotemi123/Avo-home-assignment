export const login = () => {
    cy.wait(4000);
    cy.get('[href="/my-account/auth"]').click();
    cy.get('[type="email"]').type("rotem@weiss.com");
    cy.get('[type="password"]').type(123123);
    cy.get('[data-testid="store.myAccount.signIn.signInBtn"]').click();
}

export const searchStoreAndNavigate = (store) => {
    cy.visit('https://www.avonow.com/');
    cy.get('input').type(store);
    cy.get("[data-testid='store.companiesPortal.companyNameButton']").first().click();
}

export const openCart = () => {
    cy.get('[id="shopping-cart-button"]').click();
}

export const closeCart = () => {
    cy.contains('Close').click();
}

export const removeItemFromCart = () => {
    cy.get('[role="group"]').first().get("button").first().click();
}

export const addItemsToCart = (numberOfItems) => {
    for (let i = 0; i <= numberOfItems; i++) {
        cy.get("[data-testid='store.addToCartButton']").first().click({force: true});
    }
}