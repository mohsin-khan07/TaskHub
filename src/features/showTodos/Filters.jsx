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

export default Filters;
