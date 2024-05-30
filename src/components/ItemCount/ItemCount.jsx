import React, { useState } from "react";
import "./ItemCount.css"; 

const ItemCount = ({ stock, initialCount, onCountChange }) => {
  const [count, setCount] = useState(initialCount);

  const handleIncrement = () => {
    if (count < stock) {
      const newCount = count + 1;
      setCount(newCount);
      onCountChange(newCount);
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      const newCount = count - 1;
      setCount(newCount);
      onCountChange(newCount);
    }
  };

  return (
    <div className="item--count__container">
      <div className="item--count--counter__container">
        <button
          className="item--count-button"
          onClick={handleDecrement}
          disabled={count === 0}
        >
          -
        </button>
        <span>{count}</span>
        <button
          className="item--count-button"
          onClick={handleIncrement}
          disabled={count === stock}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
