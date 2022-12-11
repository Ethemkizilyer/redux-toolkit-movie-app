import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { show } from "../../data";
import "./MovieDetail.scss"
import {
  fetchAsyncMovieOrShowDetail,
  getSelectedMovieOrShow,
  removeSelectedMovieOrShow,
} from "../../features/movies/movieSlice";


const MovieDetail = () => {
  const [gec, setGec] = useState();

  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedMovieOrShow);
  console.log(imdbID);

  console.log(show);

  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetail(imdbID));
    return()=>{
      dispatch(removeSelectedMovieOrShow());
    }
  }, [dispatch, imdbID]);
  console.log(gec);
  return (
    <div className="movie-section">
      {Object.keys(show).length === 0 ? (<div>...Loading</div>) : (
      <>
        <div className="section-left">
          <div className="movie-title">{show.Title}</div>
          <div className="movie-rating">
            <span>
              IMDB Rating <i className="fa fa-star"> : {show.imdbRating}</i>
            </span>
            <span>
              IMDB Votes <i className="fa fa-thumbs-up"> : {show.imdbVotes}</i>
            </span>
            <span className="bu">
              Runtime{" "}
              <i className="fa fa-film"> : {show.Runtime.toLowerCase()}</i>
            </span>
            <span>
              Year <i className="fa fa-calendar"> : {show.Year}</i>
            </span>
          </div>
          <div className="movie-plot">{show.Plot}</div>
          <div className="movie-info">
            <div>
              <span>Director</span>
              <span>{show.Director}</span>
            </div>
            <div>
              <span>Stars</span>
              <span>{show.Actors}</span>
            </div>
            <div>
              <span>Genres</span>
              <span>{show.Genre}</span>
            </div>
            <div>
              <span>Languages</span>
              <span>{show.Language}</span>
            </div>
            <div>
              <span>Awards</span>
              <span>{show.Awards}</span>
            </div>
          </div>
        </div>
        <div className="section-right">
          <img src={show.Poster} alt={show.Title} />
        </div>
      </>)}
    </div>
  );
};

export default MovieDetail;
