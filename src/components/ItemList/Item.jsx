import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from '../../context/CartContext';
import "./Item.css";

export default function Item({ item }) {
  const { addToCart } = useContext(CartContext);
  const [count, setCount] = useState(0);

  const handleCountChange = (newCount) => {
    setCount(newCount);
  };

  const handleAddToCart = () => {
    if (count > 0) {
      addToCart(item, count);
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
          initialCount={count}
          onCountChange={handleCountChange}
        />
        <button className="item--cart__button" onClick={handleAddToCart}>
          <FontAwesomeIcon icon={faCartPlus} />
        </button>
      </div>
    </div>
  );
}
