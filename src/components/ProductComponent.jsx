
import CartContext from './CartContext'

import '../css/ProductsComponent.css'
import { useContext } from 'react'

const ProductComponent = ({id, title, price, img}) => {

    const { products, productCart, setProductCart } = useContext(CartContext);
    
    const getProduct = () => {
        let productToCart = products.find(product => product.id === id);
        if (productToCart) {
            setProductCart([...productCart, {...productToCart}]);
        }
    }

    return(
        <div className="product-box">
            <div className='img-box'>
                <img src={img} alt="" />
            </div>
            <div className='info-product'>
                <p>{title}</p>
                <div className='cart-box'>
                    <strong>${price}</strong>
                    <button className='btn-add-to-cart' onClick={getProduct}>Agregar al carrito</button>
                </div>
            </div>
        </div>
    );
}

export default ProductComponent;