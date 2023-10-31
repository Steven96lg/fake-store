
import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import ProductsComponent from './components/ProductsComponent'
import CartComponent from "./components/CartComponent";
import CartContext from "./components/CartContext";
import FooterComponent from './components/FooterComponent';

const RouterComponent = () => {

    const [products, setProducts] = useState([])
    const [productCart, setProductCart] = useState([])

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
        .then(response => {
            setProducts(response.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[])

    return (
         <CartContext.Provider value={{
            products,
            productCart,
            setProductCart
            }}>
            <Routes>
                <Route path="/" element={<ProductsComponent />} />
                <Route path="/cart" element={<CartComponent />} />
            </Routes>
            <FooterComponent />
         </CartContext.Provider>
    );
}

export default RouterComponent;