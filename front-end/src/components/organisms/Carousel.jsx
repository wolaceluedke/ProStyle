import React from "react"
import Carousel from 'react-bootstrap/Carousel';
import ImagemStreetWear from '../../imgs/Imagem-streetwear-nacional.png';
import ImagemElementFeminina from '../../imgs/Coleçãinvernofeminino.png';
import ImagemCarrouselElement from '../../imgs/Carrousel Element.png';


function CarouselHome() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100 img-carousel"
          src={ImagemStreetWear}
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
