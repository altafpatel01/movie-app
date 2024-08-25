import React from "react";

function Firstpart({inputval , hsetinputtask , hsetTodo}) {
  return (
    <div className="flex mt-4 flex-col items-center ">
      <input
        value={inputval}
        onChange={hsetinputtask}
        type="text"
        placeholder="Enter to task"
        className="  w-[300px] h-[30px] text-[1.25rem] border rounded-sm capitalize"
      ></input>
      <button onClick={hsetTodo} className=" text-white border bg-red-700 border-sky-600 w-[40px] mt-4 h-[40px] rounded-[20px]">
        +
      </button>
    </div>
  );
}

export default Firstpart;
