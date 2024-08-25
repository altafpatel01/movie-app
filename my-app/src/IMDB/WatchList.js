import React from "react";
import { useState, useEffect } from "react";
import WatchListTable from "./WatchListTable";
import genres from "../utitlty/gener";
function WatchList({ watchlist, deleteWatchListMovie, setWatchList }) {
  const [search, setSearch] = useState("");
  const [genress, setGenres] = useState(["All Genre"]);
  const [currentGenre, setCurrent] = useState("All Genres");
  let handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    let temp = watchlist.map((movieobj) => {
      return genres[movieobj.genre_ids[0]];
    });
    temp = new Set(temp);
    setGenres(["All Genres", ...temp]);
  }, [watchlist]);

  let handleCurrentGenre = (movieobj) => {
    setCurrent(movieobj);
  };

  return (
    <div>
      <div className="flex flex-row justify-center items-center mt-10 gap-6 flex-wrap ">
        {genress.map((movieobj) => {
          return (
            <div
              onClick={() => {
                handleCurrentGenre(movieobj);
              }}
              className={
                currentGenre === movieobj
                  ? "capitalize text-white bg-blue-400  font-sans flex items-center justify-center border rounded-lg text-xl min-w-32 h-8 p-2 text-center"
                  : "capitalize text-white overflow-hidden bg-gray-400  font-sans flex items-center justify-center border rounded-lg text-xl min-w-32 p-2 h-8 text-center"
              }
            >
              {movieobj}
            </div>
          );
        })}

        {/* <div className="capitalize text-white bg-blue-500  font-sans flex items-center justify-center border rounded-lg text-xl w-32 h-8 text-center">
          action
        </div>
        <div className="capitalize text-white bg-blue-500  font-sans flex items-center justify-center border rounded-lg text-xl w-32 h-8 text-center">
          crime
        </div> */}
      </div>
      <div className="flex flex-row justify-center items-center my-10 ">
        <input
          onChange={handleSearch}
          value={search}
          className="border-2 rounded-sm py-2 focus:border-gray-500 focus:border-1 text-center border-black w-52 h-9 placeholder:p-2 text-start-2 placeholder-gray-600 caret-black  "
          placeholder="Search you movie"
        />
      </div>
      <WatchListTable
        watchlist={watchlist}
        search={search}
        deleteWatchListMovie={deleteWatchListMovie}
        setWatchList={setWatchList}
        currentGenre={currentGenre}
      />
    </div>
  );
}

export default WatchList;
