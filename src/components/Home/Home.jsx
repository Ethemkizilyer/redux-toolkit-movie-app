import axios from 'axios'
import React, { useEffect } from 'react'
import MovieListing from '../MovieListing/MovieListing'

const Home = () => {
useEffect(()=>{
const movieText="Harry"


const getData=async()=>{
  try {
    const data = await axios.get(
      `http://www.omdbapi.com/?apikey=f09c43b8&s=${movieText}`
    );
    console.log(data)
  } catch (error) {
    console.log(error.msg);
  }
 
}
//  getData()

},[])

  return (
    <div>
    <div className="banner-img"></div>
      <MovieListing/>
    
    </div>
  )
}

export default Home