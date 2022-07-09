import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { Button, Content, Item } from "./styled";
import { addTask } from '../../tasksSlice';

const Form = () => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);

  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();
    const TrimmedNewTaskContent = newTaskContent.trim();
    if (!TrimmedNewTaskContent) {
      return;
    }

    dispatch(addTask({
      content: TrimmedNewTaskContent,
      done: false,
      id: nanoid(),
    }));

    setNewTaskContent("");
  }

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