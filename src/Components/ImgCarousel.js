import Carousel from "react-bootstrap/Carousel";
import "./Carousel.css";

import React from 'react';

const ImgCarousel = () => {
    return (
        <div className="carousel">
            <Carousel controls={false} fade={true} interval={10000}>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cdn.valio.fi/mediafiles/386f2e19-962c-4625-a43f-fec05f6a3909/1000x752-recipe-hero/4x3/chilipannusampylat.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://kasityopuoti.fi/wp-content/uploads/2020/02/tuohikorut-1024x700.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.novitaknits.com/media/catalog/product/cache/7dbe654b8b993771ad606e4b2818e8c5/5/e/5e6b5e3d5fc76151145e041c_1_1.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default ImgCarousel;

