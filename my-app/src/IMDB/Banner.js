import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
function Banner() {

  const [banners , setBanners]= useState([])
  const[posterpath ,setposterpath]=useState('https://wallpaperaccess.com/full/555988.jpg')
  const[title ,setTitle]=useState('Avenger')

  // let color = ['#03055B','#C0D396','#B0D135','#00B3E6']
  let [count ,setCount]=useState(-1)

useEffect(()=>{
  axios.get( `https://api.themoviedb.org/3/movie/popular?api_key=4b8cb805493142571d04dbf00faf0288&language=en-US&page=1`).then(function(res){
       setBanners(res.data.results)
  })
})


  let handleBanners = ()=>{
    // console.log(banners.length)
    if(count===banners.length-2){
       count=0
      
    }
    let temps =count+1
    setCount(temps)
     let temp= banners[temps+1].poster_path
     let titles= banners[temps+1].title
     setTitle(titles)
    setposterpath(temp)
    
  }
  return (
    <>
    <div className='w-svw h-[620px] flex-col items-center  relative'>
        <div className=' w-lvw h-[620px] bg-cover aspect-video flex items-center justify-center'  style={posterpath==='https://wallpaperaccess.com/full/555988.jpg'?{backgroundImage:`url(https://wallpaperaccess.com/full/555988.jpg)`} :{backgroundImage:`url(https://image.tmdb.org/t/p/original/${posterpath})`}} onClick={handleBanners} >
        </div>
       <span className='z-1 absolute bottom-0 w-full   h-8 text-center bg-black text-white bg-opacity-50 font-bold' >{title}</span>
       
    </div>
    {/* {<div className={`w-[200px] h-[200px] bg-cover  border border-black`} style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${posterpath})`}} onClick={handleBanners}></div>} */}
    
    </>
  )
}

export default Banner;