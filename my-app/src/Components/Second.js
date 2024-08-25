import React from "react";
import Fouth from "./Fouth";

function Second({addtodo ,delTodo}) {
  return (
    <div>
      {addtodo.map((addtodo, index) => {
        return <Fouth  addtodo={addtodo} index={index} delTodo={delTodo}/>;
      })}
    </div>
  );
}

export default Second;
