function AddTask() {
  return (
    <section className="bg-background h-screen w-1/3 px-12 py-28">
      <h1 className="text-primary mb-6 text-3xl font-medium leading-[48px]">
        Add Task
      </h1>
      <TaskInput />
      <button className="bg-primary mt-16 w-full rounded py-3 text-sm font-semibold text-[#fff]">
        Add Task
      </button>
    </section>
  );
}

function TaskInput() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <p className="leading-6">Task Title</p>
        <input
          type="text"
          placeholder="Enter task title"
          className="border-grey4 rounded-lg border px-3 py-4"
        ></input>
      </div>
      <div className="flex flex-col gap-2">
        <p className="leading-6">Task Description</p>
        <textarea
          placeholder="Enter task description"
          className="border-grey4 rounded-lg border px-3 py-4"
          rows="4"
        ></textarea>
      </div>
    </div>
  );
}

export default AddTask;
