import { cartTypes } from "./cart.types";

export const toggleDropDown = () => ({
    type: cartTypes.TOOGLE_CART_HIDDEN,
    payload: null
});

export const addItemToCart = (item) => ({
    type: cartTypes.ADD_ITEMS,
    payload: item
});

export const RemoveItemFromCart = (item) => ({
    type: cartTypes.RemoveItemFromCart,
    payload: item
})

export const RemoveItemFromCheckout = (item) => ({
    type: cartTypes.RemoveItemFromCheckout,
    payload: item
})