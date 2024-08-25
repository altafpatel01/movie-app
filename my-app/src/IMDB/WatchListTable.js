import React from "react";
// import { useState } from "react";
import genres from "../utitlty/gener";

function WatchListTable({ watchlist,deleteWatchListMovie,search, setWatchList,currentGenre }) {
 
//  let Resultnotfound=()=>{
//   <div className="flex justify-center items-center text-gray-700 text-3xl p-40">Result not found</div>
//  }
 let sortIncreasing = ()=>{
   let sortedIncreasing = watchlist.sort((a,b)=>{
    return a.vote_average -b.vote_average
    
   })
   setWatchList([...sortedIncreasing])
 }
 let sortDecreasing = ()=>{
 let sortedDecreasing = watchlist.sort((a,b)=>{
   return b.vote_average -a.vote_average
  })
  setWatchList([...sortedDecreasing])
 }


  return (
    <div>
      <div className="flex overflow-x-scroll ">
        <table className="w-full text-black text-center p-2 m-2 border">
          <thead className="border">
            <tr>
              <th className=" w-[400px]">Name</th>
              <th>
               <div className="flex flex-row gap-2 justify-center items-center`">
                <div onClick={sortIncreasing}><i className="fa-solid fa-arrow-up"></i></div>
                <div>Rating</div>
                <div onClick={sortDecreasing}><i className="fa-solid fa-arrow-down"></i></div>
                </div>
                </th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {watchlist.filter((movieobj)=>{
              if(currentGenre==='All Genres')
              {
                return true
              }else{
                return genres[movieobj.genre_ids[0]]===currentGenre
              }
            }).filter((movieobj)=>{
             
              return movieobj.title.toLowerCase().includes(search.toLowerCase())
             
            } ).map((wm) => {
              
              return (
                <tr className="border hover:bg-gray-100">
                  <td>
                    <div className="flex  flex-row justify-start gap-8 p-2 item-center">
                      <div
                        style={{backgroundImage:(`url(https://image.tmdb.org/t/p/original/${wm.poster_path})`)} }
                      
                        className="w-20 h-16 bg-cover"
                        alt="movie poster"
                      ></div>
                      <p className="text-center  self-center ">{wm.title}</p>
                    </div>
                  </td>
                  <td>{wm.vote_average}</td>
                  <td>{wm.popularity}</td>
                  <td>{genres[wm.genre_ids[0]]}</td>
                  <td ><div onClick={()=>(deleteWatchListMovie(wm))} className="text-red-600 hover:text-black">Delete</div></td>
                </tr>
              );
             })}
           
          </tbody>
        </table>
      </div>
    </div>

  );
}

export default WatchListTable;

// .genre_ids[0]