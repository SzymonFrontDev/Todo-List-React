import React from "react";
import { HashRouter, Switch, Route, Redirect,} from "react-router-dom";
import TasksPage from "./features/tasks/TasksPage"
import TaskPage from "./features/tasks/TaskPage"
import AuthorPage from "./features/tasks/author/AuthorPage";
import { StyledNavLink, NavLinkList } from "./styled.js";


export default () => (
  <HashRouter>
    <nav>
      <NavLinkList>
        <li>
          <StyledNavLink to="/zadania">Zadania</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/autor">O autorze</StyledNavLink>
        </li>
      </NavLinkList>
      <Switch>
      <Route path="/zadania/:id">
          <TaskPage />
        </Route>
        <Route path="/zadania">
          <TasksPage />
        </Route>
        <Route path="/autor">
          <AuthorPage />
        </Route>
        <Route path="/">
          <Redirect to="/zadania" />
        </Route>
      </Switch>
    </nav>
  </HashRouter>
);