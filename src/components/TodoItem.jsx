import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  deleteTodo,
  toggleTodo,
  updateTodo,
} from "../redux/features/todoSlice";

const TodoItem = ({ todo }) => {
  const [text, setText] = useState(todo.text);
  const [isEditable, setIsEditable] = useState(false);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTodo({type:"todos/toggleTodo", id: todo.id }));
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
    <li
      onDoubleClick={handleDoubleClick}
      className={todo.completed ? "line-through" : ""}
    >
      <input type="checkbox" onChange={handleToggle} checked={todo.completed} />
      {isEditable ? (
        <input
          type="text"
          value={text}
          onChange={handleChange}
          onBlur={handleBlurAndUpdate}
          autoFocus
        />
      ) : (
        <span>{todo.text}</span>
      )}
      <button onClick={handleRemove}>X</button>
    </li>
  );
};

export default TodoItem;
