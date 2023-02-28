import React from 'react';
import PropTypes from 'prop-types';
import '../assets/css/styleBackground.css';

function Background({ img }) {
  return (
    <div id="bg-services" className="fixed w-screen h-screen overflow-hidden" style={{ backgroundImage: `url(${img})` }} />
  );
}

Background.propTypes = {
  img: PropTypes.string.isRequired,
};

export default Background;
