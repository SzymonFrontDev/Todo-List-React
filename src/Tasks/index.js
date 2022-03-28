import "./style.css";

const Tasks = (props) => (
    <ul className="task__list">
        {
            props.tasks.map(task => (
                <li
                    key={task.id}
                    className={
                        `list__item ${task.done && props.hideDone ?
                            "list__item--done" : ""}`} >
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