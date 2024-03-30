import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './features/todoSlice';

//The global store 
export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});


