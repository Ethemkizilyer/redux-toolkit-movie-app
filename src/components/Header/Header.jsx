import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {  fetchAsyncMovies, fetchAsyncShows } from "../../features/movies/movieSlice";
import user from "../../images/user.png"
import "./Header.scss"
import { toast } from "react-toastify";

const Header = ({ setTheme ,theme}) => {
  const toggleTheme = () => {
    console.log(theme)
    // if the theme is not light, then set it to dark
    if (theme === "light") {
      setTheme("dark");
      // otherwise, it should be light
    } else {
      setTheme("light");
    }
  };

  const [term, setTerm] = useState("");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (term === "") {
      return toast.error("Please enter search term!");
    }
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
    setTerm("");
    console.log(term);
  };

  return (
    <div className="header">
      <div className="logo">
        <Link
          style={{
            fontSize: "2rem",
            color: `${theme == "dark" ? "red" : "orange"} `,
          }}
          to="/"
        >
          Movie App
        </Link>
      </div>
      <div className="search-bar">
        <form onSubmit={submitHandler}>
          <input
            type="text "
            value={term}
            placeholder="Search Movies or Shows"
            onChange={(e) => setTerm(e.target.value)}
          />
          <button type="submit">
            {" "}
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>

      <div className="user-image">
        <div>
          <button style={{ border: "none" }} onClick={toggleTheme}>
            {theme === "light" && (
              <i
                style={{ backgroundColor: "#E2E2E2" }}
                className="fa fa-moon fa-2x"
              ></i>
            )}
            {theme === "dark" && (
              <i
                style={{ color: "yellow", backgroundColor: "#363537" }}
                className="fa fa-sun fa-2x"
              ></i>
            )}
          </button>
        </div>
        <img src={user} alt="" />
      </div>
    </div>
  );
};

export default Header;
