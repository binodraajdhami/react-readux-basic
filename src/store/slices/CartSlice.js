import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    reducers: {
        addToCart: (state, action) => {
            state.data.push(action.payload);
        },
        removeCart: (state, action) => {
            state.data = state.data.filter(item => item.id != action.payload.id);
        }
    }
})

export default CartSlice.reducer;
export const { addToCart, removeCart } = CartSlice.actions