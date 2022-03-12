import "./style.css";

const Tasks = (props) => (
    <ul className="task__list">
        {
            props.tasks.map(task => (
                <li
        className={
            `list__item ${task.done && props.hideDoneTasks ?
             "list__item--done" : ""}`} key={task.id} >
        <button className="list__button--done" >
            {task.done ? "✔" : ""}
        </button>
        <span className={`${task.done ? "task--done" : ""}`}>
            {task.content}</span>
        <button className="button__removeTask">🗑</button>
    </li>
  ))
}
    </ul>
);


export default Tasks;