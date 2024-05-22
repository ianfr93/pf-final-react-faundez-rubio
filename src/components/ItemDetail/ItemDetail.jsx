import React, { useState } from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";

function ItemDetail({ product }) {
  const [count, setCount] = useState(1);

  if (!product) {
    return <h1>Producto no encontrado</h1>;
  }

  const handleAddToCart = () => {
    console.log("Agregado al carrito:", product, "Cantidad:", count);
  };

  const handleCountChange = (newCount) => {
    setCount(newCount);
  };

  return (
    <div className="item-detail">
      <h2>{product.titulo}</h2>
      <img className="item-detail__image" src={product.imagen} alt={product.titulo} />
      <p className="item-detail__description">{product.descripcion}</p>
      <p className="item-detail__price">Precio: ${product.precio}</p>
      <p className="item-detail__stock">Stock disponible: {product.stock}</p>
      <ItemCount stock={product.stock} count={count} onCountChange={handleCountChange} />
      <button className="item-detail__button" onClick={handleAddToCart}>Agregar al carrito</button>
      <div className="medios-de-pago">
        <img src="https://comyuonline.cl/wp-content/uploads/2022/05/webpay.png" alt="Medios de Pago" />
      </div>
    </div>
  );
}

export default ItemDetail;
