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
    this.componentRef = React.createRef();
    this.observer = null;
  }

  componentDidMount() {
    setTimeout(() => this.startIntersectionObserver(), 700);
  }

  componentWillUnmount() {
    this.observer.disconnect();
  }

  startIntersectionObserver = () => {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0');
          } else {
            entry.target.classList.add('opacity-0');
          }
        });
      },
      { rootMargin: '200px', threshold: 1 },
    );
    this.observer.observe(this.componentRef.current);
  };

  disableScroll = (e) => {
    e.preventDefault();
  };

  render() {
    const { id, items, text } = this.props;
    return (
      <div id={id} className="image-container-carousel w-11/12 flex flex-col m-auto gap-2 lg:flex-row sm:10/12 md:9/12 lg:8/12 xl:w-8/12 2xl:w-7/12 mt-12 md:mt-24 opacity-0 transition-all" ref={this.componentRef} style={{ transitionDuration: '1000ms' }}>
        <Carousel slideInterval={5000}>
          {items.map(
            (item) => (
              <React.Fragment key={`${item.id}-url`}>
                <img src={item.url} alt="..." style={{ pointerEvents: 'none' }} onScroll={this.disableScroll} className="h-fit overscroll-y-none w-full" />
                <figcaption key={`${item.id}-legend`} className="absolute px-4 text-sm font-bold text-white bottom-16 legend md:text-xl">
                  <p key={`${item.id}-p`} />
                </figcaption>
              </React.Fragment>
            ),
          )}
        </Carousel>
        <aside className=" first-line:uppercase first-line:tracking-widest first-letter:text-xl first-letter:font-bold first-letter:text-white w-full text-sm text-white font-bold rounded-lg bg-black opacity-90 p-6 lg:w-1/2 md:first-letter:text-7xl animate__animated animate__backInLeft aside-photo">{text}</aside>
      </div>

    );
  }
}

MyCarousel.propTypes = {
  id: PropTypes.string.isRequired,
  items: PropTypes.instanceOf(Array).isRequired,
  text: PropTypes.string.isRequired,
};

export default MyCarousel;
