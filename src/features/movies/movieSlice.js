import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { data } from "../../data";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const movieText = "Harry";
    console.log(data);
    try {
      
      // const { data } = await axios.get(
      //   `http://www.omdbapi.com/?apikey=f09c43b8&s=${movieText}`
      // );

      console.log(data);
      return data;
    } catch (error) {
      console.log(error.message);
    }

    //  getData()
  }
);
export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async () => {
    const seriesText = "Harry";
    try {
      // const { data } = await axios.get(
      //   `http://www.omdbapi.com/?apikey=f09c43b&s=${seriesText}&type=series`
      // );

      console.log(data);
      return data;
    } catch (error) {
      console.log(error.message);
    }

    //  getData()
  }
);
export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
  "movies/fetchAsyncMovieOrShowDetail",
  async (id) => {

    try {
      // const { data } = await axios.get(
      //   `http://www.omdbapi.com/?apikey=f09c43b&i=${id}&Plot=full`
      // );

      console.log(data);
      return data;
    } catch (error) {
      console.log(error.message);
    }

    //  getData()
  }
);

const initialState = {
  movies: [],
  shows: [],
  selectMovieOrShow: [],
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSelectedMovieOrShow:(state)=>{
      state.selectMovieOrShow={};
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncMovies.pending, (state) => {
        return state;
      })
      .addCase(fetchAsyncMovies.fulfilled, (state, { payload }) => {
        return { ...state, movies: payload };
      })
      .addCase(fetchAsyncMovies.rejected, (state) => {
        return {};
      })
      .addCase(fetchAsyncShows.fulfilled, (state, { payload }) => {
        return { ...state, shows: payload };
      })
      .addCase(fetchAsyncMovieOrShowDetail.fulfilled, (state, { payload }) => {
        return { ...state, selectMovieOrShow: payload };
      });
  },
});

export const { removeSelectedMovieOrShow } = movieSlice.actions;

export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) => state.movies.selectMovieOrShow;

export default movieSlice.reducer;
