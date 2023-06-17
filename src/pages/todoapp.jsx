import React, { useState, useEffect, useReducer } from "react";
import { useSelector, useDispatch } from "react-redux";
import useTodoString from "../components/newfile";
import { addTodo, updateTodo, deleteTodo } from "../redux/todoreducer";

function TodoApp() {
  const [todo, updateTodoString] = useTodoString("");
  const todoArr = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  //   const initialState = {
  //     todos: [],
  //     loading: false,
  //   };

  //   const reducer = (state = initialState, action) => {
  //     switch (action.type) {
  //       case "AddTodo":
  //         return {
  //           todos: [...state.todos, action.payload],
  //         };
  //       case "UpdateTodo":
  //         return {
  //           todos: state.todos.map((item) => {
  //             if (item.id === action.payload) {
  //               return {
  //                 ...item,
  //                 completed: !item.completed,
  //               };
  //             } else {
  //               return item;
  //             }
  //           }),
  //         };
  //       case "DeleteTodo":
  //         return {
  //           todos: state.todos.filter((item) => item.id !== action.payload),
  //         };
  //       default:
  //         return {
  //           state,
  //         };
  //     }
  //   };

  //   useEffect(() => {
  //     const getData = async () => {
  //       await fetch("", {})
  //         .then((res) => res.json())
  //         .then((data) => {
  //           dispatch({ type: "Fetch_Success", payload: data });
  //         });
  //     };
  //     getData();
  //   }, []);

  //   const [state, dispatch] = useReducer(reducer, initialState);

  const handleAddTodo = () => {
    dispatch(addTodo(todo));
  };

  const handleUpdate = (id) => {
    dispatch(updateTodo(id));
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  //   console.log(state.todos);
  console.log(todoArr);

  return (
    <div>
      {/* {loading && <p>Loading...</p>} */}
      <input
        type="text"
        placeholder="Enter Todo"
        value={todo}
        onChange={(e) => updateTodoString(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      {todoArr.map((el) => {
        return (
          <div key={el.id}>
            <h1>{el.todo}</h1>
            {el.completed ? <p>Done</p> : <p>Not Done</p>}
            <button onClick={() => handleUpdate(el.id)}>Update</button>
            <button onClick={() => handleDelete(el.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default TodoApp;
