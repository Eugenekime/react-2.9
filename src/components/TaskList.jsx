import "../assets/styles/taskList.css";
import Task from "./Task";
import { formatDistanceToNow } from "date-fns";

function TaskList() {
  const createdTime = formatDistanceToNow(new Date());
  return (
    <ul className="todo-list">
      <Task text={"Some task"} creationTime={createdTime} />
    </ul>
  );
}

export default TaskList;
