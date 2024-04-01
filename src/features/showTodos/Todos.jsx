import Filters from "./Filters";
import TodosList from "./TodosList";

function Todos({ storeToLs }) {
  return (
    <section className="w-2/3 px-10 pt-28">
      <h1 className="mb-6 text-3xl font-medium leading-[48px] text-primary">
        To do tasks
      </h1>
      <Filters />
      <TodosList storeToLs={storeToLs} />
    </section>
  );
}

export default Todos;
