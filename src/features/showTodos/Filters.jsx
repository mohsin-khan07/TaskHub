import { useDispatch } from "react-redux";
import { selectAll, selectDone, selectToDo } from "../../store";
import { useState } from "react";

function Filters() {
  const [activeFilter, setActiveFilter] = useState(0);

  return (
    <section className="mb-5 flex flex-wrap gap-2 sm:mb-10 sm:gap-4">
      <Filter
        num={0}
        activeFilter={activeFilter}
        selectFilter={selectAll}
        selectActive={setActiveFilter}
      >
        All
      </Filter>
      <Filter
        num={1}
        activeFilter={activeFilter}
        selectFilter={selectDone}
        selectActive={setActiveFilter}
      >
        Done
      </Filter>
      <Filter
        num={2}
        activeFilter={activeFilter}
        selectFilter={selectToDo}
        selectActive={setActiveFilter}
      >
        To Do
      </Filter>
    </section>
  );
}

function Filter({ num, activeFilter, selectFilter, selectActive, children }) {
  const filtersStyle =
    "flex w-24 items-center justify-center rounded-lg py-2 text-sm font-medium";

  const activeStyle = "bg-primary text-[#fff]";

  const dispatch = useDispatch();

  return (
    <button
      onClick={() => {
        dispatch(selectFilter());
        selectActive(num);
      }}
      className={`${filtersStyle} ${activeFilter === num ? activeStyle : "border border-primary text-primary"}`}
    >
      {children}
    </button>
  );
}

export default Filters;
