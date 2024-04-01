import TodoInput from "./TodoInput";

function AddTodo({ storeToLs }) {
  return (
    <section className="bg-background px-6 py-10 sm:h-screen sm:w-1/3 sm:py-28 md:px-8 lg:px-12">
      <h1 className="mb-3 text-3xl font-medium leading-[48px] text-primary sm:mb-6">
        Add Task
      </h1>
      <TodoInput storeToLs={storeToLs} />
    </section>
  );
}

export default AddTodo;
