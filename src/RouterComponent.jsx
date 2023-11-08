
import { Routes, Route } from "react-router-dom";
import ProductsComponent from './components/ProductsComponent'
import CartComponent from "./components/CartComponent";

const RouterComponent = () => {

    return (
        <Routes>
            <Route path="/" element={<ProductsComponent />} />
            <Route path="/cart" element={<CartComponent />} />
        </Routes>
    );
}

export default RouterComponent;