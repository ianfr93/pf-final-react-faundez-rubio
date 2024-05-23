import React, { useState } from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faShareAlt, faTruck, faUndo } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

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
    <div className="item-detail-container">
      <div className="item-detail-header">
        <h2>{product.titulo}</h2>
        <div className="item-detail-breadcrumbs">
          <span>Inicio</span> / <span>Categoría</span> / <span>{product.titulo}</span>
        </div>
      </div>
      <div className="item-detail-content">
        <div className="item-detail-image-gallery">
          <img className="item-detail__image" src={product.imagen} alt={product.titulo} />
        </div>
        <div className="item-detail-info">
          <div className="item-detail-ratings">
            <FontAwesomeIcon icon={faStar} /> 4.5 / 5 (23 Reseñas)
          </div>
          <p className="item-detail__description">{product.descripcion}</p>
          <p className="item-detail__price">Precio: ${product.precio}</p>
          <p className="item-detail__stock">Stock disponible: {product.stock}</p>
          <ItemCount stock={product.stock} count={count} onCountChange={handleCountChange} />
          <button className="item-detail__button" onClick={handleAddToCart}>Agregar al carrito</button>
          <div className="item-detail-icons">
            <FontAwesomeIcon icon={faTruck} /> Envío gratis
            <FontAwesomeIcon icon={faUndo} /> 30 días de devolución
          </div>
          <div className="item-detail-social">
            <span>Compartir:</span>
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faInstagram} />
          </div>
          <div className="medios-de-pago">
            <img src="https://comyuonline.cl/wp-content/uploads/2022/05/webpay.png" alt="Medios de Pago" />
          </div>
        </div>
      </div>
      <div className="item-detail-extra-info">
        <h3>Detalles del producto</h3>
        <p>Descripción extendida del producto con todas sus características y beneficios...</p>
      </div>
      <div className="item-detail-related-products">
        <h3>Productos relacionados</h3>
        {/* Aquí iría el componente de productos relacionados */}
      </div>
    </div>
  );
}

export default ItemDetail;
