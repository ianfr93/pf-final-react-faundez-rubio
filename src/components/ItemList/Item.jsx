import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import "./Item.css";
import { CartContext } from '../../context/CartContext';

export default function Item({ item }) {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (count) => {
    if (count > 0) {
      addToCart({ ...item, quantity: count });
    }
  };

  return (
    <div className="item__container">
      <div className="item--img_container">
        <img className="item--img" src={item.imagen} alt={item.titulo} />
      </div>
      <Link to={`/product/${item.id}`} className="item--title">
        <h2>{item.titulo}</h2>
      </Link>
      <p className="item--description">{item.descripcion}</p>
      <p className="item--price">${item.precio}</p>

      <div className="item-actions__container">
        <ItemCount
          stock={item.stock}
          initialCount={0} 
          addToCart={handleAddToCart} 
        />
        <button className="item--cart__button" onClick={() => handleAddToCart(1)}>
          <FontAwesomeIcon icon={faCartPlus} />
        </button>
      </div>
    </div>
  );
}
