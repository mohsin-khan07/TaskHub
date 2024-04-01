import TodoInput from "./TodoInput";

function AddTodo() {
  return (
    <section className="h-screen w-1/3 bg-background px-12 py-28">
      <h1 className="mb-6 text-3xl font-medium leading-[48px] text-primary">
        Add Task
      </h1>
      <TodoInput />
    </section>
  );
}

export default AddTodo;
