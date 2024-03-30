import { createSlice, nanoid } from "@reduxjs/toolkit";

// intialising initial state from localstorage if available otherwise it is initialized as empty array
const initialState = JSON.parse(localStorage.getItem("todos")) || [];

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    // Reducer to add Todo
    addTodo: (state, action) => {
      const newTodo = { id: nanoid(), text: action.payload, completed: false };
      state.push(newTodo);
      localStorage.setItem("todos", JSON.stringify(state)); // setting the new array from the state to localstorage
    },
    // Reducer to mark todo as complete
    toggleTodo: (state, action) => {
      const { id } = action.payload;
      const todo = state.find((todo) => todo.id === id);
      if (todo) {
        todo.completed = !todo.completed;
        localStorage.setItem("todos", JSON.stringify(state));
      }
    },
    // Reducer to update Todo
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      const todo = state.find((todo) => todo.id === id);
      if (todo) {
        todo.text = text;
        localStorage.setItem("todos", JSON.stringify(state));
      }
    },
    // Reducer to delete Todo
    deleteTodo: (state, action) => {
      const { id } = action.payload;
      const newState = state.filter((todo) => todo.id !== id);
      localStorage.setItem("todos", JSON.stringify(newState));
      return newState;
    },
    // Reducer to mark all todos as complete
    markAllComplete: (state) => {
      state.forEach((todo) => {
        todo.completed = true;
      });
      localStorage.setItem("todos", JSON.stringify(state));
    },
  },
});

export const { addTodo, toggleTodo, updateTodo, deleteTodo, markAllComplete } =
  todoSlice.actions;
export default todoSlice.reducer;
