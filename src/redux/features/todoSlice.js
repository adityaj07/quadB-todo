import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("todos")) || [];

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = { id: nanoid(), text: action.payload, completed: false };
      state.push(newTodo);
      localStorage.setItem("todos", JSON.stringify(state));
    },
    toggleTodo: (state, action) => {
      const { id } = action.payload;
      const todo = state.find((todo) => todo.id === id);
      if (todo) {
        todo.completed = !todo.completed;
        localStorage.setItem("todos", JSON.stringify(state));
      }
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      const todo = state.find((todo) => todo.id === id);
      if (todo) {
        todo.text = text;
        localStorage.setItem("todos", JSON.stringify(state));
      }
    },
    deleteTodo: (state, action) => {
      const { id } = action.payload;
      const newState = state.filter((todo) => todo.id !== id);
      localStorage.setItem("todos", JSON.stringify(newState));
      return newState;
    },
  },
});

export const { addTodo, toggleTodo, updateTodo, deleteTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
