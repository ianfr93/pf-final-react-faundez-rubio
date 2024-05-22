import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CategoryList from '../CategoryList/CategoryList'; 
import CategoryListMobile from '../CategoryListMobile/CategoryListMobile'; 
import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons'; 

function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className='navbar__wrapper'>
      <div className='menu-toggle' onClick={() => setShowMenu(!showMenu)}>
        <div className='bar'></div>
        <div className='bar'></div>
        <div className='bar'></div>
      </div>
      {showMenu ? <CategoryListMobile /> : <CategoryList />}
      <div className="right-items">
        <li className="login-item">
          <Link to="/login" className="login-link">
            <FontAwesomeIcon icon={faGoogle} className="user-icon" />
            <span>Ingresar</span>
          </Link>
        </li>
        <CartWidget />
      </div>
    </div>
  );
}

export default NavBar;
