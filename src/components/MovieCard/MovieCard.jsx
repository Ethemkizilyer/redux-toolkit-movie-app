import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import {  useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import "./MovieCard.scss"

const MovieCard = ({movie}) => {
  const {user}= useSelector((state)=>state.auth)
  const navigate=useNavigate()

  const ert=()=>{
    user?.username
      ? navigate(`/movie/${movie.imdbID}`)
      : toast.error("Please login or register!");

  }

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
            <p>{movie.Year}</p> 
            <button className='detail' onClick={ert}>Details</button>
           
          </div>     
        </div>
  
      </div>
      
    </div>
  );
}

export default MovieCard