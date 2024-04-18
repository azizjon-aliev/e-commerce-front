import React, {FC} from 'react';
import {cartSlice} from "../../store/reducers/CartSlice.ts";
import {useAppDispatch} from "../../hooks/redux.ts";
import IProduct from "../../types/IProduct.ts";

interface ProductItemProps {
    key: number | string;
    item: IProduct;
}

const ProductItem: FC<ProductItemProps> = ({item}) => {
    const {addItem} = cartSlice.actions;
    const dispatch = useAppDispatch();

    return (
        <div key={item.id} className='product-box'>
            <img src={item.image} alt='' className='product-img'/>
            <h2 className='product-title'>{item.title}</h2>
            <span className='price'>{item.price} c</span>
            <i className='bx bx-shopping-bag add-cart' onClick={() => dispatch(addItem(item))}></i>
        </div>
    );
};

export default ProductItem;