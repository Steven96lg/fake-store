
import { Link } from 'react-router-dom';

import '../css/HeaderComponent.css';

const HeaderComponent = () => {
    return(
        <div className="header-component">
            <div className="header-content">
                <div>
                    <h2>FAKES-TORE.</h2>
                </div>
                <ul>
                    <li><Link to="/">Store</Link></li>
                    <li><a href="#">Contactame</a></li>
                    <li><Link to="/cart"><i className="fas fa-shopping-cart"></i></Link></li>
                </ul>
            </div>
        </div>
    );
}

export default HeaderComponent;