import { combineReducers } from "@reduxjs/toolkit";
import ProductSlice from "./slices/ProductSlice";
import CartSlice from "./slices/CartSlice";

const reducers = combineReducers({
    product: ProductSlice.reducer,
    cart: CartSlice
});

export default reducers;