import React from "react";
import "./ItemCount.css";
import useCount from "../../hooks/useCount"; // Asegúrate de importar correctamente tu hook

export default function ItemCount({ stock, initialCount, addToCart }) {
  const { count, increment, decrement } = useCount(initialCount);

  const handleAddToCart = () => {
    addToCart(count);
  };

  return (
    <div className="item--count__container">
      <div className="item--count--counter__container">
        <button
          className="item--count-button"
          onClick={decrement}
          disabled={count === 0} // Desactivar cuando count es 0
        >
          -
        </button>
        <span className="item--count-button">{count}</span>
        <button
          className="item--count-button"
          onClick={increment}
          disabled={count >= stock}
        >
          +
        </button>
      </div>
  
    </div>
  );
}
