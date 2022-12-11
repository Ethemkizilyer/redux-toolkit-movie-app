import React from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import { Settings } from "../../common/apis/settings";
import { getAllMovies, getAllShows } from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss"

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  // console.log(movies);
  // console.log(shows);
  let renderMovies,
    renderShows = "";

  renderMovies =
    movies.Response === "True" ? (
      movies.Search?.map((movie, index) => {
        return <MovieCard key={index} movie={movie} />;
      })
    ) : (
      <div className="movies-error">
        {" "}
        <h3>ethem</h3>
      </div>
    );

  // renderShows =
  //   shows.Response !== null ? (
  //     shows?.map((show, index) => {
  //       return <MovieCard key={index} movie={show} />
  //     })
  //   ) : (
  //     <div className="shows-error">
  //       <h3>ethem</h3>
  //     </div>
  //   );
  // renderMovies=(movies?.Response === null ? (movies.Search.map((movie,index)=>{
  //  return <MovieCard key={index}  movie={movie}/>
  // })) : (<div className="movies-error"> <h3>ethem</h3></div>));

  renderShows =
    shows?.Response === "True" ? (
      shows.Search.map((show, index) => {
        return <MovieCard key={index} movie={show} />;
      })
    ) : (
      <div className="shows-error">
        {" "}
        <h3>ethem</h3>
      </div>
    );

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
          <Slider {...Settings}>{renderMovies}</Slider>
        </div>
      </div>
      <div className="show-list">
        <h2>Shows</h2>
        <div className="movie-container">
          <Slider {...Settings}>{renderShows}</Slider>
        </div>
      </div>
    </div>
  );
};

export default MovieListing;
