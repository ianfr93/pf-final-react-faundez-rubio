import React from 'react';
import logo from '../../assets/blanco.svg';
import './Brand.css'; 

function Brand() {
  return (
    <div className="brand-container"> 
      <a href="/">
        <img src={logo} alt="Logo de Shoppy" className="brand-logo" />
      </a>
    </div>
  );
}

export default Brand;
