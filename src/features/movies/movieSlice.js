import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const movieText = "Harry";
    try {
      const { data } = await axios.get(
        `http://www.omdbapi.com/?apikey=f09c43b7&s=${movieText}`
      );

      console.log(data);
      return data;
    } catch (error) {
      console.log(error.message);
    }

    //  getData()
  }
);
export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const seriesText = "Harry";
    try {
      const { data } = await axios.get(
        `http://www.omdbapi.com/?apikey=f09c43b7&s=${seriesText}&type=series`
      );

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
  shows: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
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
  },
});

export const { addMovies } = movieSlice.actions;

export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;

export default movieSlice.reducer;
