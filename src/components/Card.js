import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ movie }) => {
  return (

    <div>
      <h2>{`#${movie.ranking} - ${movie.title} (${movie.year})`}</h2>
      <img src={movie.img.src} alt={movie.img.alt} width='200' />
      <p>{`Distributor: ${movie.distributor}`}</p>
      <p>{`Amount: ${movie.amount}`}</p>
    </div>

  );
};

Card.propTypes = {
  movie: PropTypes.object
};

export default Card;