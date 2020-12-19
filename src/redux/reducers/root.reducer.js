import { combineReducers } from "redux";
import cartReducer from "./cart/cart.reducer";
import DirectoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";
import userReducer from "./user/user.reducer";

export default combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: DirectoryReducer,
    shop: shopReducer
});