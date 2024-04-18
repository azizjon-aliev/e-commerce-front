import React, {FC} from 'react';
import IProduct from "../../types/IProduct.ts";
import ProductItem from "./ProductItem.tsx";

interface ProductListProps {
    title: string;
    items: IProduct[];
}

const ProductList: FC<ProductListProps> = ({title, items}) => {
    return (
        <section className='shop container'>
            <h2 className='section-title'>{title}</h2>
            {/* Content */}
            <div className='shop-content'>
                {items.map((item) => <ProductItem key={item.id} item={item}/>)}
            </div>
        </section>
);
};

export default ProductList;