import React from 'react'
import WatchList from './WatchList'
function MovieWatchList({watchlist,deleteWatchListMovie ,setWatchList}) {
  return (
    <div>
      <WatchList watchlist={watchlist}  deleteWatchListMovie={deleteWatchListMovie} setWatchList={setWatchList}/>
    </div>
  )
}

export default MovieWatchList