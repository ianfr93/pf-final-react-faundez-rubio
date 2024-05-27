import React from "react";
import { Link } from "react-router-dom";
import useCount from "../../hooks/useCount";
import ItemCount from "../ItemCount/ItemCount";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import "./Item.css";

export default function Item({ item }) {
  const { count, increment, decrement } = useCount(0);

  const onAdd = (nombreDeItem, cantidadALlevar) => {
    console.log("nombreDeItem: ", nombreDeItem);
    console.log("cantidadALlevar: ", cantidadALlevar);

    console.log({ count, item });
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
          count={count}
          increment={increment}
          decrement={decrement}
        />
        <button className="item--cart__button" onClick={() => onAdd(item, count)}>
          <FontAwesomeIcon icon={faCartPlus} />
        </button>
      </div>
    </div>
  );
}
