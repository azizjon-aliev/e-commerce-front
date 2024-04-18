import Header from "./UI/Header.tsx";
import ProductList from "./Product/ProductList.tsx";
import {useAppSelector} from "../hooks/redux.ts";

function App() {
    const {items: productItems} = useAppSelector(state => state.productReducer)

    return (
        <>
            <Header/>
            <ProductList title='Product list 1' items={productItems}/>
        </>
    )
}

export default App
