import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './ImageCarousel.css'; 

function ImageCarousel() {
  return (
    <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
      <div>
        <img src="/src/assets/banner-1.jpg" alt="Banner 1" />
      </div>
      <div>
        <img src="/src/assets/banner-2.jpg" alt="Banner 2" />
      </div>
      <div>
        <img src="/src/assets/banner-3.jpg" alt="Banner 3" />
      </div>
      <div>
        <img src="/src/assets/banner-4.jpg" alt="Banner 4" />
      </div>
    </Carousel>
  );
}

export default ImageCarousel;
