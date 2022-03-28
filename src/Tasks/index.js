import React from 'react';
import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask }) => (
    <ul className="task__list">
        {
            tasks.map(task => (
                <li
                    key={task.id}
                    className={
                        `list__item ${task.done && hideDone ?
                            "list__item--done" : ""}`} >
                    <button className="list__button--done" >
                        {task.done ? "✔" : ""}
                    </button>
                    <span className={`${task.done ? "task--done" : ""}`}>
                        {task.content}</span>
                    <button className="button__removeTask"
                        onClick={() => removeTask(task.id)}
                    >
                        🗑</button>
                </li>
            ))
        }
    </ul>
);


export default Tasks;