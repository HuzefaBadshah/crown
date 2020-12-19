import { cartTypes } from "./cart.types";
import { addItemsToCart, RemoveItemFromCheckout } from "./cart.utils";

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case cartTypes.TOOGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        case cartTypes.ADD_ITEMS:
            return {
                ...state,
                cartItems: addItemsToCart(state.cartItems, action.payload)
            }
        case cartTypes.RemoveItemFromCart:
            return {
                ...state,
                cartItems: state.cartItems.filter((item) => { 
                    console.log('item:  ', item, action.payload);
                    return item.id !== action.payload.id
                })
            }
            case cartTypes.RemoveItemFromCheckout: 
            return {
                ...state,
                cartItems: RemoveItemFromCheckout(state.cartItems, action.payload)
            }
        default:
            return state;
    }
}
export default cartReducer;