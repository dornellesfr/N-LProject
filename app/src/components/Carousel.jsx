import React from 'react';
import PropTypes, { number } from 'prop-types';
import { Carousel as Carou } from 'flowbite-react';

function Carousel({ imgs }) {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
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
