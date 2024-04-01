import { useState } from "react";

function AddTask({ handleAddTask }) {
  return (
    <section className="h-screen w-1/3 bg-background px-12 py-28">
      <h1 className="mb-6 text-3xl font-medium leading-[48px] text-primary">
        Add Task
      </h1>
      <TaskInput handleAddTask={handleAddTask} />
    </section>
  );
}

function TaskInput({ handleAddTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <p className="leading-6">Task Title</p>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter task title"
          className="rounded-lg border border-grey4 px-3 py-4"
        ></input>
      </div>
      <div className="flex flex-col gap-2">
        <p className="leading-6">Task Description</p>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter task description"
          className="rounded-lg border border-grey4 px-3 py-4"
          rows="4"
        ></textarea>
      </div>
      <button
        onClick={() => {
          handleAddTask(title, description);
          setTitle("");
          setDescription("");
        }}
        className="mt-16 w-full rounded bg-primary py-3 text-sm font-semibold text-[#fff]"
      >
        Add Task
      </button>
    </div>
  );
}

export default AddTask;
