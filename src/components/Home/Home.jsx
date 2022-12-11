import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {  fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice'
import MovieListing from '../MovieListing/MovieListing'

const Home = ({theme,setTheme}) => {
const dispatch=useDispatch()
const movieText="Matrix"
const showText="Family"

useEffect(()=>{
dispatch(fetchAsyncMovies(movieText));
dispatch(fetchAsyncShows(showText));



},[dispatch])

  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing theme={theme} setTheme={setTheme} />
    </div>
  );
}

export default Home