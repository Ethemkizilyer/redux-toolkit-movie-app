import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {  fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice'
import MovieListing from '../MovieListing/MovieListing'

const Home = () => {
const dispatch=useDispatch()
const movieText="Harry"
const showText="Friends"

useEffect(()=>{
dispatch(fetchAsyncMovies(movieText));
dispatch(fetchAsyncShows(showText));



},[dispatch])

  return (
    <div>
    <div className="banner-img"></div>
      <MovieListing/>
    
    </div>
  )
}

export default Home