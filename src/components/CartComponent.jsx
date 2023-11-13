
import CartContext from './CartContext';
import '../css/CartComponent.css'
import { useContext, useState } from 'react';

const CartComponent = () => {

    const { productCart, setProductCart } = useContext(CartContext);
    const [buyall, setBuyall] = useState(false)
    let totalPrice = 0;
    let totalArticles = 0;
    productCart.map(product => {
        totalPrice += product.price * product.quantity;
        totalArticles += product.quantity;
    });

    //Event addProduct
    const addProduct = (id) => {
        const updatedProductCart = [...productCart];
        const productIndex = updatedProductCart.findIndex(product => product.id === id);

        if (productIndex !== -1) {
            // Si el producto está en el carrito, aumenta la cantidad
            updatedProductCart[productIndex].quantity += 1;
            setProductCart(updatedProductCart);
        }
    };

    //Event removeProduct
    const removeProduct = (id) => {
        const updatedProductCart = [...productCart];
        const productIndex = updatedProductCart.findIndex(product => product.id === id);

        if (productIndex !== -1) {
            // Si el producto está en el carrito, aumenta la cantidad
            updatedProductCart[productIndex].quantity -= 1;
            setProductCart(updatedProductCart);

            if (updatedProductCart[productIndex].quantity === 0) {
                updatedProductCart.splice(productIndex, 1);
            }
        }
    };

    //Event buyCart
    const buyCart = () => {
        setProductCart([])
        setBuyall(true)
        setTimeout(() => {
            setBuyall(false)
        }, 5000)
    }

    //Event emptyCart
    const emptyCart = () => {
        setProductCart([])
    };
    
    return(
        <div className='cart-component'>
            <h2>Carrito de Compras</h2>
            { productCart.length === 0 ? <p>Aun no tienes productos en tu carrito de compras.</p> : null }
            {buyall === true &&
                <div style={{color: 'green', textAlign: 'center', fontSize: '20px', marginTop: '20px'}}>
                    <strong>Gracias por comprar en FAKE-STORE.</strong>
                    <p>Tu pedido sera enviado en las proximas 24 horas.</p>
                </div>
            }
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
                                        <button className='add-btn' onClick={() => addProduct(product.id)}><i className="fas fa-plus-circle"></i></button>
                                        <span> Catidad: {product.quantity}</span> 
                                        <button className='delete-btn' onClick={() => removeProduct(product.id)}><i className="fas fa-trash"></i></button>
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
                        <span>Total de productos: {totalArticles}</span>
                        <br />
                        <br />
                        <span>Total a pagar: ${totalPrice.toFixed(2)}</span>
                        <div className='btns'>
                            <button className='buy-btn' onClick={buyCart}>Comprar todo</button>
                            <button className='empty-btn' onClick={emptyCart}>Vaciar carrito</button>
                        </div>
                     </div> 
                    : ''
                   }
                </div>
            </div>
        </div>
    );
}

export default CartComponent;