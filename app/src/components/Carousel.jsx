import React from 'react';
import PropTypes, { number } from 'prop-types';
import { Carousel as Carou } from 'flowbite-react';
import '../assets/css/styleCarousel.css';

function Carousel({ imgs }) {
  return (
    <div className="carousel">
      <Carou slideInterval={5000}>
        { imgs.map((img) => <img key={imgs} src={img} alt="..." />) }
      </Carou>
    </div>
  );
}

Carousel.propTypes = {
  imgs: PropTypes.arrayOf(number).isRequired,
};

export default Carousel;
