
import CartContext from './CartContext'

import '../css/ProductsComponent.css'
import { useContext } from 'react'

const ProductComponent = ({id, title, price, img}) => {

    const { products, productCart, setProductCart } = useContext(CartContext);
    
    const getProduct = () => {
        let productToCart = products.find(product => product.id === id);
        
        if (productToCart) {
            // Verificar si el producto ya está en el carrito
            const existingProductIndex = productCart.findIndex(item => item.id === id);

            if (existingProductIndex !== -1) {
                // Si el producto ya está en el carrito, actualiza la cantidad
                const updatedProductCart = [...productCart];
                updatedProductCart[existingProductIndex].quantity += 1;
                setProductCart(updatedProductCart);
            } else {
                // Si el producto no está en el carrito, agrégalo
                setProductCart([...productCart, { ...productToCart, quantity: 1 }]);
            }
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