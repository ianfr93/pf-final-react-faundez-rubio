import React from "react";
import { Link } from "react-router-dom";
import "./CategoryListMobile.css";

function CategoryListMobile() {
  return (
    <nav>
      <ul className="category-list-mobile">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/category/gamer-zone">Gamer Zone</Link>
        </li>
        <li>
          <Link to="/category/arma-tu-pc">Arma tu PC</Link>
        </li>
        <li>
          <Link to="/category/tiendas">Tiendas</Link>
        </li>
        <li>
          <Link to="/category/servicios">Servicios</Link>
        </li>
        <li>
          <Link to="/category/seguir-mi-pedido">Seguir mi pedido</Link>
        </li>
        <li>
          <Link to="/category/contacto">Contacto</Link>
        </li>
      </ul>
    </nav>
  );
}

export default CategoryListMobile;
