import React, {FC, useEffect, useState} from 'react';
import IProduct from "../../types/IProduct.ts";
import CartItem from "./CartItem.tsx";
import {useAppDispatch, useAppSelector} from "../../hooks/redux.ts";
import {cartSlice} from "../../store/reducers/CartSlice.ts";

interface CartProps {
    title: string;
    items: IProduct[];
}

const Cart: FC<CartProps> = ({title, items}) => {
    const {toggleCart} = cartSlice.actions;
    const {isOpened, totalPrice} = useAppSelector(state => state.cartReducer)
    const dispatch = useAppDispatch();

    return (
        <div className={isOpened ? 'cart active' : 'cart'}>
            <h2 className='cart-title'>{title}</h2>

            {/* Cart items */}
            {items.length > 0 ? (
                <div className='cart-items'>
                    {items.map((item) => (
                        <CartItem key={item.id} item={item}/>
                    ))}
                </div>
            ) : (
                <div className='cart-empty'>Корзина пуста</div>
            )}
            {/* Total */}
            <div className='total'>
                <div className='total-title'>Общая сумма заказа</div>
                <div className='total-price'>{totalPrice} c</div>
            </div>
            {/* Buy button */}
            <button type='button' className='btn-buy'>
                Оформить заказ
            </button>
            {/* Cart close */}
            <i
                className='bx bx-x'
                id='close-cart'
                onClick={() => dispatch(toggleCart())}
            ></i>
        </div>
    );
};

export default Cart;