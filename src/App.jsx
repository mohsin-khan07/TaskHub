import Todos from "./features/showTodos/Todos";
import AddTodo from "./features/addTodos/AddTodo";

function App() {
  return (
    <div className="flex">
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;
