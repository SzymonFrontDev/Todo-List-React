import React, { useEffect } from 'react';
import { useSelector } from "react-redux";
import Form from "../../tasks/TasksPage/Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import { selectTasks } from '../../tasks/tasksSlice';


function TasksPage() {

  const { tasks } = useSelector(selectTasks);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />
      <Section
        title="Lista zadań"
        body={
          <TaskList
          />
        }
        extraHeaderContent={
          <Buttons
          />
        }
      />
    </Container>
  )
};

export default TasksPage;
