import React from 'react';
import PropTypes from 'prop-types';
import CardList from './CardList';
import '../assets/css/styleCardListContainer.css';

function CardListContainer(props) {
  const { photos } = props;
  return (
    <div
      id="card-list-container"
      className="grid w-11/12 sm:w-10/12 lg:w-8/12 2xl:w-9/12 gap-y-12 gap-x-4 mt-8 mb-12 p-4 justify-items-center justify-center m-auto"
      style={{
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 600px))',
      }}
    >
      <CardList photos={photos} />
    </div>
  );
}

export default CardListContainer;

CardListContainer.propTypes = {
  photos: PropTypes.instanceOf(Array).isRequired,
};
