import React from 'react';
import PropTypes from 'prop-types';
import '../assets/css/styleTitle.css';

function Title({ titlePage }) {
  return (
    <div className="title">
      <h1 className="text-white text-3xl lg:text-4xl md:text-4xl font-sans whitespace-nowrap">{ titlePage }</h1>
    </div>
  );
}

Title.propTypes = {
  titlePage: PropTypes.string.isRequired,
};

export default Title;
