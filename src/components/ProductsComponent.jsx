
import ProductComponent from './ProductComponent';
import CartContext from './CartContext';

import '../css/ProductsComponent.css'
import { useContext } from 'react';

const ProductsComponent = () => {
    
    const { products } = useContext(CartContext);

    return(
        <div className="products-component">
            <div className='products-info'>
                <h3>Productos en la tienda!</h3>
                <p>Mira los nuevos productos incluidos en nuestra tienda.</p>
            </div>
            <div className="product-list">
                {products.map(product => (
                    product.category === "men's clothing" || product.category === "jewelery" 
                    ? <ProductComponent key={product.id} id={product.id} img={product.image} title={product.title} price={product.price}/> 
                    : ''
                ))}
            </div>
        </div>
    );
}

export default ProductsComponent;