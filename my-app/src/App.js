import React, { useEffect, useState } from "react";
import Carousel from "./IMDB/Carousel"
import "./main.css";
import "./App.css";
import About from "./IMDB/About";
import Movie from "./IMDB/Movie";
import MovieWatchList from "./IMDB/MovieWatchList";
import Navbar from "./IMDB/Navbar";
import Footers from "./IMDB/Footers";

// import Banner from "./IMDB/Banner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Page from "./IMDB/Page";

function App() {
  const [watchlist, setWatchList] = useState([]);

  let handleWatchList = (movieobjs) => {
    let newWatchLsit = [...watchlist, movieobjs];
    localStorage.setItem("MoviesApp", JSON.stringify(newWatchLsit));
    setWatchList(newWatchLsit);
    // console.log(newWatchLsit);
  };

  let deleteWatchListMovie = (movieobj) => {
    let filterWatchList = watchlist.filter((movie) => {
      return movie.id !== movieobj.id;
    });
    localStorage.setItem("MoviesApp", JSON.stringify(filterWatchList));
    
    setWatchList(filterWatchList);
  };

  useEffect(() => {
    let localStoragemovies = localStorage.getItem("MoviesApp");
    if (!localStoragemovies) return;
    else {
      setWatchList(JSON.parse(localStoragemovies));
    }
  }, []);

  return (
    <main>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
              
                <Carousel />
                <Movie
                  handleWatchList={handleWatchList}
                  watchlist={watchlist}
                  deleteWatchListMovie={deleteWatchListMovie}
                />
                <Footers/>
              </>
            }
          />
          <Route
            path="/watchlist"
            element={
              <MovieWatchList
                watchlist={watchlist}
                deleteWatchListMovie={deleteWatchListMovie}
                setWatchList={setWatchList}
              />
            }
          />
          <Route path="/yes" element={<><About /></> } />
          {/* <Movie /> */}
          {/* <MovieWatchList /> */}
          {/* <Banner /> */}
        </Routes>
      </BrowserRouter>
    </main>
  );
}
export default App;
