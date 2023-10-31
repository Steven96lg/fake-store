
import CartContext from './CartContext';
import '../css/CartComponent.css'
import { useContext } from 'react';

const CartComponent = () => {

    const { productCart } = useContext(CartContext);

    return(
        <div className='cart-component'>
            <h2>Carrito de Compras</h2>

            <div className="cart-content">
                <div className="product-list">
                    {
                        productCart.map(product => (
                            <div className="product-card">
                                <div className='img-product'>
                                    <img src={product.image} alt={product.title} />
                                </div>
                                <div className="info-card">
                                    <div className='info-card-price'>
                                        <strong>$ {product.price}</strong>
                                        <button className='add-btn'><i className="fas fa-plus-circle"></i></button>
                                        <span> Catidad: 0</span> 
                                        <button className='delete-btn'><i className="fas fa-trash"></i></button>
                                    </div>
                                    <div className="info-card-name">
                                        <span>{product.title}</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="product-info">

                </div>
            </div>
        </div>
    );
}

export default CartComponent;