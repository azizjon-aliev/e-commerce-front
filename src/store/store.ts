import {combineReducers, configureStore} from "@reduxjs/toolkit";
import cartReducer from "./reducers/CartSlice";
import productReducer from "./reducers/ProductSlice";

const rootReducer = combineReducers({
    cartReducer: cartReducer,
    productReducer: productReducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];