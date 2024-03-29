import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [];

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const { text } = action.payload;
      state.push({ id: nanoid(), text, completed: false });
    },
    toggleTodo: (state, action) => {
      const { id } = action.payload;
      const todo = state.find((todo) => todo.id === id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    updateTodo: (state, action) => {
      const { id, updatedText } = action.payload;
      const todo = state.find((todo) => todo.id === id);
      if (todo) {
        todo.text = updatedText;
      }
    },
    deleteTodo: (state, action) => {
      const { id } = action.payload;
      state = state.filter((todo) => todo.id !== id);
    },
  },
});

export const { addTodo, toggleTodo, updateTodo, deleteTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
