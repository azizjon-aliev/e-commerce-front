import React, {FC, useEffect, useState} from 'react';
import {cartSlice} from "../../store/reducers/CartSlice.ts";
import {useAppDispatch} from "../../hooks/redux.ts";
import IProduct from "../../types/IProduct.ts";

interface CartItemProps {
    key: number | string;
    item: IProduct;
}

const CartItem: FC<CartItemProps> = ({ item}) => {
    const {removeItem, editItemQuantity} = cartSlice.actions;
    const dispatch = useAppDispatch();
    const [quantity, setQuantity] = useState<number>(item.quantity);

    const handelQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuantity(Number(e.target.value));
        editItemQuantity(item.id, quantity);
    }

    useEffect(() => {
        setQuantity(item.quantity);
    }, [item.quantity]);

    return (
        <div className='cart-box'>
            <img src={item.image} alt='' className='cart-img'/>
            <div className='detail-box'>
                <div className='cart-product-title'>{item.title}</div>
                <div className='cart-price'>{item.price} c</div>
                <input
                    type='number'
                    min={1}
                    value={quantity}
                    onChange={e => handelQuantityChange(e)}
                    className='cart-quantity'
                />
            </div>
            {/* Remove Cart */}
            <i className='bx bxs-trash-alt cart-remove' onClick={() => dispatch(removeItem(item))}></i>
        </div>
    );
};

export default CartItem;