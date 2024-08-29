import React from 'react'
import Movielogo from './Movielogo.jpg'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className=' w-lvw min-[400px] h-14 bg-white flex items-center  justify-start overflow-x-hidden-hidden   space-x-2 mobile:space-x-2'>
        <img className='w-[60px] h-[50px]   ' src={Movielogo} alt=''>
        </img>
        <div className='mobile:justify-start mobile:text-xs  mobile:space-x-3 mobile:items-start  flex flex-row space-x-4 '>      
           <Link  className='text-blue-500 font-bold     mobile:text-[15px]  text-xl hover:translate-y-[-1.5px] ' to='/'>Home</Link>
        <Link className='text-blue-500 font-bold text-xl mobile:text-[15px] hover:translate-y-[-1.5px]' to='/watchlist'>Watchlist</Link>
        <Link className='text-blue-500 font-bold text-xl mobile:text-[15px] hover:translate-y-[-1.5px] pr-2' to='/about'>About</Link>
        </div>
 
    </div>
  )
}

export default Navbar