import React, { Fragment, useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import Page from "./Page";
import Loader from "./Loading";
import ErrorPage from "./ErrorPage";

function Movie({ handleWatchList, deleteWatchListMovie, watchlist }) {
  const [movies, setmovie] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [error, setError] = useState(false);
  const[isLoading, setisLoading]= useState(false)
  
  const handlePrev = () => {
    if (pageNo === 1) {
      setPageNo(1);
    } else {
      setPageNo(pageNo - 1);
    }
  };
  const handleNext = () => {
    setPageNo(pageNo + 1);
  };

  useEffect(() => {
    setisLoading(true)
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=4b8cb805493142571d04dbf00faf0288&language=en-US&page=${pageNo}`
      )
      .then((res) => {
        setmovie(res.data.results);
        setisLoading(false)
        setError(null); // Clear previous errors on successful data fetch
      })
      .catch((error) => {
        console.error('Error fetching data:', {error});
        setmovie([])
        setisLoading(false)
        setError(true);
      });
  }, [pageNo]);


  return (
   <Fragment>
    {
      isLoading?<Loader/>:error?<ErrorPage/>:<>
       <div className="w-lvw  ">
      <div className="text-2xl text-center font-bold mt-20 mb-10 px-16">
        Trending Movies
      </div>
      <div className="flex flex-row flex-wrap px-8  gap-8 justify-center ">
      {error && <p className="text-red-500">{error}</p>}
        {movies.map((movieobj) => {
          return (
            <MovieCard
              deleteWatchListMovie={deleteWatchListMovie}
              watchlist={watchlist}
              key={movieobj.id}
              poster_path={movieobj.poster_path}
              handleWatchList={handleWatchList}
              movieobj={movieobj}
              name={movieobj.title}
              Rating={movieobj.vote_average}
            />
          );
        })}
        <Page handleNext={handleNext} handlePrev={handlePrev} page={pageNo} />
      </div>
    </div></>
    }
   </Fragment>
  );
}

export default Movie;

// https://api.themoviedb.org/3/movie/popular?api_key=55fa555ba5bbbab0194ee8abf0f9f686&language=en-US&page=2
