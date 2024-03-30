import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  deleteTodo,
  toggleTodo,
  updateTodo,
} from "../redux/features/todoSlice";
import { MdDelete } from "react-icons/md";

const TodoItem = ({ todo }) => {
  const [text, setText] = useState(todo.text);
  const [isEditable, setIsEditable] = useState(false);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTodo({ id: todo.id }));
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleDoubleClick = () => {
    setIsEditable(true);
  };

  const handleBlurAndUpdate = () => {
    setIsEditable(false);
    if (text !== todo.text) {
      dispatch(updateTodo({ id: todo.id, text: text }));
    }
  };

  const handleRemove = () => {
    dispatch(deleteTodo({ id: todo.id }));
  };

  return (
    // The list li element which renders a todo
    <li
      onDoubleClick={handleDoubleClick} // to make todo editable
      className={` w-full bg-white/80 flex justify-between items-center gap-4 px-4 py-3 rounded-lg`}
    >
      <div
        className={`${
          todo.completed
            ? "line-through text-black/20 transition-colors duration-100"
            : ""
        }`}
      >
        <input
          type="checkbox"
          onChange={handleToggle}
          checked={todo.completed}
          className="mr-5 accent-purple-500 scale-125"
        />
        {isEditable ? (
          <input
            type="text"
            value={text}
            onChange={handleChange}
            onBlur={handleBlurAndUpdate}
            className="transparent outline-none border-none py-2 border border-zinc-400/50 rounded-md bg-transparent"
            autoFocus
          />
        ) : (
          <span>{todo.text}</span>
        )}
      </div>

      <button
        onClick={handleRemove}
        className="hover:bg-gray-300/20 p-2 rounded-md transition-colors duration-200"
      >
        <MdDelete className="w-6 h-6" />
      </button>
    </li>
  );
};

export default TodoItem;
