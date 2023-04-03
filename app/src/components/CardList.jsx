/* eslint-disable class-methods-use-this */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React from 'react';
import { Card } from 'flowbite-react';
import 'animate.css';
import PropTypes from 'prop-types';

class CardList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { refs: [] };
    this.observer = null;
  }

  componentDidMount() {
    const refs = this.createRefs();
    this.setState({ refs });
    setTimeout(() => this.startIntersectionObserver(), 700);
  }

  startIntersectionObserver = () => {
    const { refs } = this.state;
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
    refs.forEach((ref) => {
      if (ref.current) {
        this.observer.observe(ref.current);
      }
    });
  };

  createRefs = () => {
    const { photos } = this.props;
    const refs = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < photos.length; i++) {
      refs.push(React.createRef());
    }
    return refs;
  };

  transformCard = (e) => {
    if (e.target.id === 'card') e.target.classList.add('scale-125', 'z-50');
  };

  originalCard = (e) => {
    e.target.classList.remove('scale-125', 'z-50');
  };

  render() {
    const { photos } = this.props;
    const { refs } = this.state;
    return (
      photos.length > 0
          && photos.map((photo, i) => (
            <div
              className="scale-100 transition-all cursor-pointer"
              key={photo.url}
              onMouseOver={this.transformCard}
              onMouseOut={this.originalCard}
              id="card"
              ref={refs[i]}
            >
              <Card imgAlt="..." imgSrc={photo.url} className="pointer-events-none">
                <p className="text-sm font-normal text-gray-700 md:text-base pointer-events-none">
                  {photo.title}
                </p>
              </Card>
            </div>
          ))
    );
  }
}

export default CardList;

CardList.propTypes = {
  photos: PropTypes.instanceOf(Array).isRequired,
};
