import { createSlice } from "@reduxjs/toolkit";

const ProductSice = createSlice({
    name: 'product',
    initialState: {
        data: [
            {
                id: 1,
                title: 'Dell Laptop',
                content: 'Donec cursus odio ac sodalses hendrerit.',
                price: 40000
            },
            {
                id: 2,
                title: 'Acer Laptop',
                content: 'Donec cursus odio ac sodalses hendrerit.',
                price: 30000
            },
            {
                id: 3,
                title: 'HP Laptop',
                content: 'Donec cursus odio ac sodalses hendrerit.',
                price: 30000
            }
        ],
        loading: false,
        error: ''
    },
    reducers: {
        addToCart: (state, action) => {
            state.data.push(action.payload);
        },
        removeFromCart: (state, action) => {
            state.data = state.data.filter(item => item.id != action.payload.id)
        }
    }
});
export default ProductSice;
export const { addToCart, removeFromCart } = ProductSice.actions;