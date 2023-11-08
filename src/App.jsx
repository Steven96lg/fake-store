
import { useState, useEffect } from "react";
import axios from "axios";
import CartContext from "./components/CartContext";
import BannerComponent from './components/BannerComponent';
import RouterComponent from './RouterComponent';
import FooterComponent from './components/FooterComponent';

import './App.css';

function App() {

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

  return(
    <CartContext.Provider value={{
      products,
      productCart,
      setProductCart
      }}>
      <div>
        <BannerComponent />
        <RouterComponent />
        <FooterComponent />
      </div>
    </CartContext.Provider>
  );
}

export default App
