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
    <div className="w-[80%] md:w-[50%] p-2">
      {/* The list which lists all the todos */}
      <ul className="flex flex-col gap-3 my-3 ">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
      {/* Button to mark all todos as complete */}
      <button
        onClick={handleMarkAllComplete}
        className="p-3 bg-[#202020] text-white hover:bg-gray-800/90 rounded-md w-full shadow transition-colors duration-200"
      >
        Mark all as complete
      </button>
    </div>
  );
}

export default TodoList;
