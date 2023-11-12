
import { useContext } from 'react';
import CartContext from './CartContext';
import { Link } from 'react-router-dom';

import '../css/HeaderComponent.css';

const HeaderComponent = () => {
    const { productCart } = useContext(CartContext);
    let totalArticles = 0;
    productCart.map(product => {
        totalArticles += product.quantity;
    });
    return(
        <div className="header-component">
            <div className="header-content">
                <div>
                    <h2>FAKE-STORE.</h2>
                </div>
                <ul>
                    <li>
                        <Link to="/">Store</Link>
                    </li>
                    <li>
                        <a href="#">Contactame</a>
                    </li>
                    <li className='li-content'>
                        <Link to="/cart"><i className="fas fa-shopping-cart"></i></Link>
                        {totalArticles > 0 ? <strong className="notification-product"> {totalArticles} </strong> : ''}
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default HeaderComponent;