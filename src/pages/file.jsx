import React from "react";
import { useSelector } from "react-redux";

function File() {
  const todoArr = useSelector((state) => state.todos);
  return (
    <div>
      {todoArr.map((el) => {
        return (
          <div key={el.id}>
            <h1>{el.todo}</h1>
            {el.completed ? <p>Done</p> : <p>Not Done</p>}
            {/* <button onClick={() => handleUpdate(el.id)}>Update</button>
            <button onClick={() => handleDelete(el.id)}>Delete</button> */}
          </div>
        );
      })}
    </div>
  );
}

export default File;
