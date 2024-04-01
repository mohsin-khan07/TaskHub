import { useSelector } from "react-redux";
import Todo from "./Todo";

function TodosList() {
  const todos = useSelector((store) => store.todos);

  return (
    <section className="flex flex-col gap-2">
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          id={todo.id}
          title={todo.title}
          description={todo.description}
          completed={todo.completed}
        />
      ))}
    </section>
  );
}

export default TodosList;
