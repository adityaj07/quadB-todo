import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


function App() {


  return (
    <div>
      <h1>Todo App</h1>
      <div className=''>
      <TodoForm />
      <TodoList />

      </div>
    </div>
  );
}

export default App;