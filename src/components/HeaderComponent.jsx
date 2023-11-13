
import { useContext, useState } from 'react';
import CartContext from './CartContext';
import { Link } from 'react-router-dom';

import '../css/HeaderComponent.css';

const HeaderComponent = () => {
    const { productCart } = useContext(CartContext);
    let totalArticles = 0;
    productCart.map(product => {
        totalArticles += product.quantity;
    });

    const [changeIcon, setChangeIcon] = useState(true)

    //ShowMenu
    const showMenu = () => {
       let getUl = document.getElementById('ul')
       getUl.style.display = 'flex'
       setChangeIcon(false)
    }
    //CloseMenu
    const closeMenu = () => {
        let getUl = document.getElementById('ul')
        getUl.style.display = 'none'
        setChangeIcon(true)
     }

    return(
        <div className="header-component">
            <div className="header-content">
                <div>
                    <h2>FAKE-STORE.</h2>
                </div>
                {changeIcon 
                    ? (<span className='menuHamburger' onClick={showMenu} ><i className="fas fa-bars"></i></span>) 
                    : (<span className='menuHamburger' onClick={closeMenu} ><i className="fas fa-bars"></i></span>)
                }
                <ul id='ul'>
                    <li>
                        <Link to="/">Store</Link>
                    </li>
                    <li>
                        <a href="https://steven-portafolio.netlify.app/" target='_blank'>Contactame</a>
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