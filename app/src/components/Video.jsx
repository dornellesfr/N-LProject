import React from 'react';
import PropTypes from 'prop-types';
import '../assets/css/styleVideo.css';

export default class MyVideo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { id, item } = this.props;
    return (
      <section
        id={id}
        className="flex justify-center observed md:p-10 w-full observed"
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
  item: PropTypes.element.isRequired,
};
