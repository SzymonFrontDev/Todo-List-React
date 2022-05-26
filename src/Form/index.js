import React, { useState, useRef } from 'react';
import { Button, Content, Item } from "./styled";


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

  const inputRef = useRef(null);

 const focusInput = () => {
   inputRef.current.focus();
 };

  return (
    <Content onSubmit={onFormSubmit}>
      <Item ref={inputRef}
        value={newTaskContent}
        placeholder="Co jest do zrobienia?"
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <Button onClick={focusInput}>Dodaj zadanie</Button>
    </Content>
  )
};

export default Form;