import React, { useState, useContext } from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faTruck, faUndo, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { CartContext } from '../../context/CartContext'; 


function ItemDetail({ product }) {
  const { addToCart } = useContext(CartContext); 
  const [count, setCount] = useState(0);
  const [selectedImage, setSelectedImage] = useState(product.imagen);

  if (!product) {
    return <h1>Producto no encontrado</h1>;
  }

  const handleAddToCart = () => {
    if (count > 0) {
      addToCart(product, count);
    }
  };

  const handleCountChange = (newCount) => {
    setCount(newCount);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
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
          <img className="item-detail__image" src={selectedImage} alt={product.titulo} />
          <div className="image-thumbnails">
            {product.imagenes?.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${product.titulo}-${index}`}
                className={`thumbnail ${selectedImage === img ? 'selected' : ''}`}
                onClick={() => handleImageClick(img)}
              />
            ))}
          </div>
        </div>
        <div className="item-detail-info">
          <div className="item-detail-ratings">
            <FontAwesomeIcon icon={faStar} /> 4.5 / 5 (23 Reseñas)
          </div>
          <p className="item-detail__description">{product.descripcion}</p>
          <p className="item-detail__price">Precio: ${product.precio}</p>
          <p className="item-detail__stock">Stock disponible: {product.stock}</p>
          <div className="item-actions__container">
            <ItemCount stock={product.stock} initialCount={count} onCountChange={handleCountChange} />
            <button className="item--cart__button" onClick={handleAddToCart}>
              <FontAwesomeIcon icon={faCartPlus} />
            </button>
          </div>
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
        <table className="item-detail-table">
          <tbody>
            <tr>
              <td>Marca</td>
              <td>{product.marca}</td>
            </tr>
            <tr>
              <td>Modelo</td>
              <td>{product.modelo}</td>
            </tr>
            <tr>
              <td>Dimensiones</td>
              <td>{product.dimensiones}</td>
            </tr>
            <tr>
              <td>Peso</td>
              <td>{product.peso}</td>
            </tr>
            <tr>
              <td>Color</td>
              <td>{product.color}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="item-detail-related-products">
        <h3>Productos relacionados</h3>
        {/* Aquí iría el componente de productos relacionados */}
      </div>
    </div>
  );
}

export default ItemDetail;
