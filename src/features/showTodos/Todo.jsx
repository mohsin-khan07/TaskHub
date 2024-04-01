import { useDispatch } from "react-redux";
import { completeTodo, deleteTodo } from "../../store";

function Todo({ id, title, description, completed }) {
  return (
    <section className="flex items-center justify-between gap-3.5 rounded border border-secondary p-4">
      <Checkbox id={id} completed={completed} />
      <div className="flex w-full flex-col gap-1 text-grey2">
        <p className={`${completed ? "text-grey3 line-through" : ""}`}>
          {title}
        </p>
        {description ? <p className="text-sm text-grey3">{description}</p> : ""}
      </div>
      <div className="flex gap-5">
        <DeleteBtn id={id} />
      </div>
    </section>
  );
}

function Checkbox({ id, completed }) {
  const dispatch = useDispatch();

  const handleCheckbox = (id) => {
    dispatch(completeTodo(id));
  };

  return (
    <div
      onClick={() => {
        handleCheckbox(id);
      }}
      className={`flex h-5 w-5 items-center justify-center rounded border ${completed ? "bg-primary" : "border-secondary"}`}
    >
      <img src="checkIcon.svg" className="w-2.5" alt="checkbox"></img>
    </div>
  );
}

function DeleteBtn({ id }) {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="w-5 cursor-pointer" onClick={() => handleDelete(id)}>
      <img src="deleteIcon.svg" alt="delete"></img>
    </div>
  );
}

export default Todo;
