import React from 'react'

function Page({handleNext , handlePrev , page}) {
  return (
    <div className='w-lvw h-12  mt-10  flex justify-center items-center font-sans text-black gap-8'>
        <div className='bg-blue-600 text-white  w-8 h-8 flex items-center justify-center border rounded-full' onClick={handlePrev}><i className="fa-solid fa-arrow-left"></i></div>
        <div className='font-extrabold'>{page}</div>
        <div className='bg-blue-600 text-white  w-8 h-8 flex items-center justify-center border rounded-full' onClick={handleNext}><i className="fa-solid fa-arrow-right"></i></div>

    </div>
  )
}

export default Page