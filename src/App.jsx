import { useSelector } from "react-redux";
import Todos from "./features/showTodos/Todos";
import AddTodo from "./features/addTodos/AddTodo";

function App() {
  const todos = useSelector((store) => store.todos);

  const storeToLs = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  return (
    <div className="flex">
      <AddTodo storeToLs={storeToLs} />
      <Todos storeToLs={storeToLs} />
    </div>
  );
}

export default App;
