import Filters from "./Filters";
import TodosList from "./TodosList";

function Todos() {
  return (
    <section className="px-6 py-10 sm:w-2/3 sm:pt-28 md:px-10">
      <h1 className="mb-3 text-3xl font-medium leading-[48px] text-primary sm:mb-6">
        To do tasks
      </h1>
      <Filters />
      <TodosList />
    </section>
  );
}

export default Todos;
