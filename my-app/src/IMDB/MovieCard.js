import React from "react";

function MovieCard({
  poster_path,
  name,
  Rating,
  handleWatchList,
  movieobj,
  deleteWatchListMovie,
  watchlist
}) {

  

  function doesContain(movieobj) {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id === movieobj.id) {
        return true;
      }
    }
    return false;
  }
  return (
    <div className="">
      <div
        className="drop-shadow-2xl shadow-2xl w-[150px] h-[250px] mobile:w-[130px] mobile:h-[150px] flex relative border rounded-lg bg-cover hover:scale-110 duration-300 hover:cursor-pointer"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
        }}
      >
        {doesContain(movieobj) ? (
          <div
            onClick={() => (deleteWatchListMovie(movieobj))}
            className="absolute top-1 right-2 bg-gray-800 rounded-md "
          >
            &#10060;
          </div>
        ) : (
          <div
            onClick={() => (handleWatchList(movieobj))}
            className="absolute top-1 right-2 bg-gray-800 rounded-md "
          >
            &#128525;
          </div>
        )}
       
        <div className="w-full font-serif capitalize h-8  truncate bg-opacity-50 border-transparent   bg-black text-center text-white flex-wrap px-1 border rounded-br-lg rounded-bl-lg  absolute bottom-0  ">
          {name}
        </div>
        <div className="absolute top-1 font-serif text-white text-sm left-1 p-0.5 border rounded-md border-transparent bg-black bg-opacity-50">
          {Rating} ⭐
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
