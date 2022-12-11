
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss"
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { darkTheme, lightTheme } from "./common/theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./common/global";
import { useState } from "react";


function App() {
    const [theme, setTheme] = useState("light");
  return (
    <div className="app">
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <BrowserRouter>
          <GlobalStyles />
          <ToastContainer />
          <Header theme={theme} setTheme={setTheme} />
          <div className="container">
            <Routes>
              <Route
                path="/"
                element={<Home theme={theme} setTheme={setTheme} />}
              />
              <Route path="/movie/:imdbID" element={<MovieDetail />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
