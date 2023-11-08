
import CartContext from './CartContext';
import '../css/CartComponent.css'
import { useContext } from 'react';

const CartComponent = () => {

    const { productCart } = useContext(CartContext);
    let totalPrice = 0;
    productCart.map(product => {
        totalPrice += product.price
    });
    console.log(totalPrice)

    return(
        <div className='cart-component'>
            <h2>Carrito de Compras</h2>

            <div className="cart-content">
                <div className="product-list">
                    {
                        productCart.map(product => (
                            <div className="product-card" key={product.id}>
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
                   { productCart.length > 0 ?
                     <div className="info-price">
                        <span>Total de productos: {productCart.length}</span>
                        <br />
                        <br />
                        <span>Total a pagar: ${totalPrice}</span>
                    </div> 
                    : ''
                   }
                </div>
            </div>
        </div>
    );
}

export default CartComponent;