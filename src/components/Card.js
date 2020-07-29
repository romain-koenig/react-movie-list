import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ movie }) => {
  return (

    <div className="card">
      <img className='casrd-img-top' src={movie.img.src} alt={movie.img.alt} width='200' />
      <div className="card-body">
        <h2>{`#${movie.ranking} - ${movie.title} (${movie.year})`}</h2>
      </div>
      <ul className="list-group list-group-flush">
      <li className='list-group-item'>{`Distributor: ${movie.distributor}`}</li>
      <li className='list-group-item'>{`Amount: ${movie.amount}`}</li>
      </ul>
    </div>

  );
};

Card.propTypes = {
  movie: PropTypes.object
};

export default Card;