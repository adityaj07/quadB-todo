import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { markAllComplete } from "../redux/features/todoSlice";
import { useDispatch } from "react-redux";

function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => {
    return state.todos;
  });

  const handleMarkAllComplete = () => {
    dispatch(markAllComplete());
  };

  return (
    <>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
      <button onClick={handleMarkAllComplete}>Mark all complete</button>
    </>
  );
}

export default TodoList;
