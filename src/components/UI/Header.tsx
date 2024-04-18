import React, {useEffect} from 'react';
import Cart from "../Cart/Cart.tsx";
import {cartSlice} from "../../store/reducers/CartSlice.ts";
import {useAppDispatch, useAppSelector} from "../../hooks/redux.ts";

const Header = () => {
    const {items: cartItems} = useAppSelector(state => state.cartReducer)
    const {toggleCart} = cartSlice.actions;
    const dispatch = useAppDispatch();

    return (
        <header>
            {/* Nav */}
            <div className='nav container'>
                <a href='#' className='logo'>
                    Интернет магазин люстр
                </a>
                {/* Cart icon */}
                <i
                    className='bx bx-shopping-bag'
                    id='cart-icon'
                    onClick={() => dispatch(toggleCart())}
                ></i>
                <Cart title='Корзина' items={cartItems} />
            </div>
        </header>
    );
};

export default Header;