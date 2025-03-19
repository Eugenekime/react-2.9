import "./assets/styles/global.css";
import NewTaskForm from "./components/NewTaskForm";
import TaskList from "./components/TaskList";
import Task from "./components/Task";
import Footer from "./components/Footer";
import TaskFilter from "./components/TasksFilter";
import { formatDistanceToNow } from "date-fns";

function App() {
  const createdTime = formatDistanceToNow(new Date());
  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
      </header>
      <NewTaskForm />
      <TaskList>
        <Task text={"Some task"} creationTime={createdTime} />
      </TaskList>
      <Footer>
        <TaskFilter />
      </Footer>
    </section>
  );
}

export default App;
