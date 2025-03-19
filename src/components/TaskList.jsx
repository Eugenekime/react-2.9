import "../assets/styles/taskList.css";

function TaskList({ children }) {
  return <ul className="todo-list">{children}</ul>;
}

export default TaskList;
