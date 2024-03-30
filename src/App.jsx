import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="flex flex-col pt-12 items-center h-screen w-[80%] lg:w-[70%] mx-auto ">
      <h1 className="text-5xl mb-6 text-white font-black ">Todo App</h1>
      <div className="bg-yellow-400 rounded-lg w-full space-y-4 flex flex-col justify-center items-center p-4 ">
        <TodoForm />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
