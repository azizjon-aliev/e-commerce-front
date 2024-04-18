import IProduct from "../../types/IProduct.ts";
import {createSlice} from "@reduxjs/toolkit";

interface CartState {
    items: IProduct[],
    isOpened: boolean,
    totalPrice: number,
}

const initialState: CartState = {
    items: [],
    isOpened: false,
    totalPrice: 0,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        editItemQuantity: (state, action) => {
            const {id, quantity} = action.payload;

            const item = state.items.find(item => item.id === id);
            if (item) {
                item.quantity = quantity;
            }

            state.totalPrice = state.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
        },

        addItem: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);

            if (existingItem) {
                existingItem.quantity++;
            } else {
                state.items.push(action.payload);
            }

            state.totalPrice = state.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id);

            state.totalPrice = state.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
        },
        toggleCart: (state) => {
            state.isOpened = !state.isOpened;
        }
    }
})

export default cartSlice.reducer;