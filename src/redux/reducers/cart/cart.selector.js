import { createSelector } from "reselect";

export const selectCartItems = createSelector([
    (state) => state.cart.cartItems
], (cartItems) => cartItems);


export const selectCartItemsCount = createSelector([selectCartItems], (cartItems) => {
    return cartItems.reduce((acc, item) => acc + item.quantity, 0)
});

export const selectTotalPrice = createSelector([selectCartItems], (cartItems) => {
    return cartItems.reduce((acc, item) => acc + (item.quantity * item.price), 0)
});

