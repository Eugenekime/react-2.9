import "../assets/styles/taskFilter.css";

function TaskFilter() {
  return (
    <>
      <ul className="filters">
        <li>
          <button className="selected">All</button>
        </li>
        <li>
          <button>Active</button>
        </li>
        <li>
          <button>Completed</button>
        </li>
      </ul>
      <button className="clear-completed">Clear completed</button>
    </>
  );
}

export default TaskFilter;
