import React from 'react';
import Form from "../../tasks/TasksPage/Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons/FunctionalButtons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import Search from './Search';
import GetExampleTasksButton from './Buttons/GetExampleTasksButton/index';


function TasksPage() {

  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        extraSectionContent={<GetExampleTasksButton />}
        body={<Form />}
      />
      <Section
        title="Wyszukiwarka"
        body={<Search />}
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
