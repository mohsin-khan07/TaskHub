import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store";

function TodoInput() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  const handleAddTodo = (title, description) => {
    dispatch(addTodo(title, description));
  };

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
          handleAddTodo(title, description);
          setTitle("");
          setDescription("");
        }}
        className="mt-16 w-full rounded bg-primary py-3 text-sm font-semibold text-[#fff]"
      >
        Add Todo
      </button>
    </div>
  );
}

export default TodoInput;
