import React from "react"
import Carousel from 'react-bootstrap/Carousel';
import ImagemElementFeminina from '../../imgs/Coleçãinvernofeminino.png';
import ImagemCarrouselElement from '../../imgs/Carrousel Element.png';
import ElementCarousel from "../../imgs/Skaterboardcarousel.png"


function CarouselHome() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100 img-carousel"
          src={ElementCarousel}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-carousel"
          src={ImagemElementFeminina}
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-carousel"
          src={ImagemCarrouselElement}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselHome;
