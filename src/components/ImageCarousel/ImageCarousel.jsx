import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './ImageCarousel.css'; // Archivo CSS para estilos personalizados

function ImageCarousel() {
  return (
    <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
      <div>
        <img src="https://via.placeholder.com/1500x500?text=Banner+1" alt="Banner 1" />
      </div>
      <div>
        <img src="https://via.placeholder.com/1500x500?text=Banner+2" alt="Banner 2" />
      </div>
      <div>
        <img src="https://via.placeholder.com/1500x500?text=Banner+3" alt="Banner 3" />
      </div>
    </Carousel>
  );
}

export default ImageCarousel;
