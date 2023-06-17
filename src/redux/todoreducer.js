import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      //if you want to add more than one value in action.payload, create an object like const {email, password} = action.payload, while using dispatch, write it like this dispatch(addUser({email, password}))
      const obj = {
        id: Date.now(),
        todo: action.payload,
        completed: false,
      };
      state.push(obj);
    },
    updateTodo: (state, action) => {
      const newTodo = state.find((item) => item.id === action.payload);
      if (newTodo) {
        newTodo.completed = !newTodo.completed;
      }
    },
    deleteTodo: (state, action) => {
      const newTodo = state.filter((item) => item.id !== action.payload);
      return newTodo;
    },
  },
});

export const { addTodo, updateTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
