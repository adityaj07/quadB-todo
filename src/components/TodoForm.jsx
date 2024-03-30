import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/features/todoSlice";

function TodoForm() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") return;
    console.log(text.trim());
    dispatch(addTodo(text.trim()));
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What needs to be done?"
        className="transparent outline-none border-none px-2 py-3 border border-zinc-400/50 rounded-md"
      />
      <button type="submit" className="p-2 bg-white hover:bg-gray-200/90 rounded-md w-[5rem] shadow transition-colors duration-200 font-bold">Add</button>
    </form>
  );
}

export default TodoForm;
