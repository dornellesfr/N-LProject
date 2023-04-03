import React from 'react';
import PropTypes from 'prop-types';
import '../assets/css/styleVideo.css';

export default class MyVideo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.componentRef = React.createRef();
    this.observer = null;
  }

  componentDidMount() {
    setTimeout(() => this.startIntersectionObserver(), 700);
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

  render() {
    const { id, item } = this.props;
    return (
      <section
        id={id}
        className="flex justify-center md:p-10 w-full transition-all"
        ref={this.componentRef}
        style={{ transitionDuration: '1000ms' }}
      >
        <video
          className="flex w-full h-auto max-w-full border border-gray-200 rounded-lg p-4 sm:h-64 xl:h-96 2xl:h-96 sm:w-10/12 xl:w-9/12 2xl:w-7/12 m-auto"
          controls
          autoPlay
          muted
        >
          <source src={item} type="video/mp4" />
        </video>
      </section>
    );
  }
}

MyVideo.propTypes = {
  id: PropTypes.string.isRequired,
  item: PropTypes.node.isRequired,
};
