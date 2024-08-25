import React from 'react'

function Fouth({addtodo ,index,  delTodo}) {
  return (
    <div className="container w-6/12 h-14 mt-14 flex justify-between px-8 mx-auto items-center rounded-md bg-white">
      <p className="capitalize">{addtodo}</p>
      <div className="flex flex-row gap-2">
        <input type="checkbox"></input>
        <button onClick={()=>delTodo(index)} className=" border border-solid px-4 py-0.5 bg-red-600 text-white rounded-md">
          Delete
        </button>
      </div>
    </div>
  )
}

export default Fouth;