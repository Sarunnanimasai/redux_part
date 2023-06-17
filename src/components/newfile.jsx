import React, { useState } from "react";

function useTodoString(stringValue = "") {
  const [todo, setTodo] = useState(stringValue);
  const updateTodoString = (value) => {
    setTodo(value);
  };
  return [todo, updateTodoString];
}

export default useTodoString;
