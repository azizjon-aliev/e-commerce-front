import IProduct from "../../types/IProduct.ts";
import {createSlice} from "@reduxjs/toolkit";

interface ProductState {
    items: IProduct[],
}


const generateProducts = (numProducts: number): IProduct[] => {
    return Array.from({ length: numProducts }, (_, index) => {
        return {
            id: index + 1,
            image: `https://via.placeholder.com/150`,
            title: `Product ${index + 1}`,
            price: Math.floor(Math.random() * 100) + 1,
            quantity: 1,
        };
    });
}

const initialState: ProductState = {
    items: generateProducts(100),
}

export const productSlice = createSlice({
    name: 'product',
    initialState: initialState,
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
    }
});

export default productSlice.reducer;