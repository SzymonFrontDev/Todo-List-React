import React, { useState } from 'react';
import "./style.css";


const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    const TrimmedNewTaskContent = newTaskContent.trim();
    if (!TrimmedNewTaskContent) {
      return;
    }
    addNewTask(TrimmedNewTaskContent);
    setNewTaskContent("");
  }

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <input
        value={newTaskContent}
        className="form__newTask"
        placeholder="Co jest do zrobienia?"
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <button className="form__button">Dodaj zadanie</button>
    </form>
  )
};

export default Form;