function TasksList() {
  return (
    <section className="w-2/3 px-10 pt-28">
      <h1 className="text-primary mb-6 text-3xl font-medium leading-[48px]">
        To do tasks
      </h1>
      <Filters />
      <List />
    </section>
  );
}

function Filters() {
  const filtersStyle =
    "border-primary text-primary flex w-24 cursor-pointer items-center justify-center rounded-lg border py-2 text-sm font-medium";

  return (
    <section className="mb-10 flex gap-4">
      <div className={filtersStyle}>
        <p>All</p>
      </div>
      <div className={filtersStyle}>
        <p>Done</p>
      </div>
      <div className={filtersStyle}>
        <p>To Do</p>
      </div>
    </section>
  );
}

function List() {
  return (
    <section className="flex flex-col gap-2">
      <Task task="Complete project proposal for upcoming client meeting" />
      <Task task="Review and respond to emails in inbox." />
      <Task task="Schedule meeting with team members to discuss project timeline." />
      <Task task="Make Presentation for tomorrow" isCompleted={true} />
    </section>
  );
}

function Task({ task, isCompleted }) {
  return (
    <section className="border-secondary flex gap-3.5 rounded border p-4">
      <input type="checkbox" name="checkbox" id="checkbox" className="w-5" />
      <p className={`${isCompleted ? "text-grey3 line-through" : ""}`}>
        {task}
      </p>
    </section>
  );
}

export default TasksList;
