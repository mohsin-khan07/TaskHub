import { useSelector } from "react-redux";
import Todo from "./Todo";

function TodosList({ storeToLs }) {
  const todos = useSelector((store) => store.todos);
  const filter = useSelector((store) => store.filter);

  let filteredTodos;

  if (filter === "done")
    filteredTodos = todos.filter((todo) => todo.completed === true);
  else if (filter === "toDo")
    filteredTodos = todos.filter((todo) => todo.completed === false);
  else filteredTodos = todos;

  return (
    <section className="flex flex-col gap-2">
      {filteredTodos.map((todo) => (
        <Todo
          key={todo.id}
          id={todo.id}
          title={todo.title}
          description={todo.description}
          completed={todo.completed}
          storeToLs={storeToLs}
        />
      ))}
    </section>
  );
}

export default TodosList;
