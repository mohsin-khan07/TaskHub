import { useSelector } from "react-redux";

function Todos({ tasks, handleCheckbox }) {
  const store = useSelector((store) => store);
  return (
    <section className="w-2/3 px-10 pt-28">
      <h1 className="mb-6 text-3xl font-medium leading-[48px] text-primary">
        To do tasks
      </h1>
      <Filters />
      <List tasks={tasks} handleCheckbox={handleCheckbox} />
    </section>
  );
}

function Filters() {
  const filtersStyle =
    "border-primary text-primary flex w-24 items-center justify-center rounded-lg border py-2 text-sm font-medium";

  return (
    <section className="mb-10 flex gap-4">
      <button className={filtersStyle}>
        <p>All</p>
      </button>
      <button className={filtersStyle}>
        <p>Done</p>
      </button>
      <button className={filtersStyle}>
        <p>To Do</p>
      </button>
    </section>
  );
}

function List({ tasks, handleCheckbox }) {
  return (
    <section className="flex flex-col gap-2">
      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          taskTitle={task.title}
          isCompleted={task.isCompleted}
          handleCheckbox={handleCheckbox}
        />
      ))}
    </section>
  );
}

function Task({ id, taskTitle, isCompleted, handleCheckbox }) {
  return (
    <section className="flex items-center gap-3.5 rounded border border-secondary p-4 text-grey2">
      <Checkbox id={id} active={isCompleted} handleCheckbox={handleCheckbox} />
      <p className={`${isCompleted ? "text-grey3 line-through" : ""}`}>
        {taskTitle}
      </p>
    </section>
  );
}

function Checkbox({ id, active, handleCheckbox }) {
  return (
    <div
      onClick={() => handleCheckbox(id)}
      className={`flex h-5 w-5 items-center justify-center rounded border ${active ? "bg-primary" : "border-secondary"}`}
    >
      <img src="checkIcon.svg" className="w-2.5" alt="checkbox"></img>
    </div>
  );
}

export default Todos;
