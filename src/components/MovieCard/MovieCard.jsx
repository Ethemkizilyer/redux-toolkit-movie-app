import React from 'react'
import { Link } from 'react-router-dom';
import "./MovieCard.scss"

const MovieCard = ({movie}) => {
  // console.log(movie)
  return (
    <div className="cart-item">
      
      <div className="cart-inner">
        <div className="card-top">
          <img src={movie?.Poster} alt={movie.Title} />
        </div>
        <div className="card-bottom">
          <div className="card-info">
            <h4>{movie.Title}</h4>
            <p>{movie.Year}</p> <Link className='Link' to={`/movie/${movie.imdbID}`}>Details</Link>
          </div>     
        </div>
  
      </div>
      
    </div>
  );
}

export default MovieCard