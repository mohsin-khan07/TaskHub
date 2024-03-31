import AddTask from "./components/AddTask";
import TasksList from "./components/TasksList";

function App() {
  return (
    <div className="flex">
      <AddTask />
      <TasksList />
    </div>
  );
}

export default App;
