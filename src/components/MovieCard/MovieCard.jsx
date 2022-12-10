import React from 'react'
import "./MovieCard.scss"

const MovieCard = ({movie}) => {
  console.log(movie)
  return (
    <div className="cart-item">
      <div className="cart-inner">
        <div className="card-top">
          <img src={movie.Poster} alt={movie.Title} />
        </div>
        <div className="card-bottom">
          <div className="carf-info">
            <h4>{movie.Title}</h4>
            <p>{movie.Year}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard