/* eslint-disable react/no-array-index-key */
/* eslint-disable class-methods-use-this */
import React from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'flowbite-react';
import '../assets/css/styleCarousel.css';

class MyCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  disableScroll = (e) => {
    e.preventDefault();
  };

  render() {
    const { id, items, text } = this.props;
    return (
      <div id={id} className="image-container-carousel flex flex-col m-auto gap-6 w-full md:flex-row md:w-11/12">
        <Carousel slideInterval={5000}>
          {items.map(
            (item) => (
              <>
                <img key={`${item.id}-url`} src={item.url} alt="..." style={{ pointerEvents: 'none' }} onScroll={this.disableScroll} className="h-fit overscroll-y-none w-full" />
                <figcaption key={`${item.id}-legend`} className="absolute px-4 text-sm font-bold text-white bottom-16 legend md:text-xl">
                  <p key={`${item.id}-p`} />
                </figcaption>
              </>
            ),
          )}
        </Carousel>
        <aside className=" first-line:uppercase first-line:tracking-widest first-letter:text-xl first-letter:font-bold first-letter:text-white w-full text-sm text-white font-bold rounded-lg bg-black opacity-90 p-6 md:w-1/2 md:first-letter:text-7xl animate__animated animate__backInLeft aside-photo">{text}</aside>
      </div>

    );
  }
}

MyCarousel.propTypes = {
  id: PropTypes.string.isRequired,
  items: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired,
};

export default MyCarousel;
