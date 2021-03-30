import { Route, Switch } from "react-router-dom";
import React from "react";
import "./styles.css";
import TodoApp from "./TodoApp";
export default function App() {
  return (
    <Route
      render={({ location }) => (
        <Switch location={location}>
          <Route exact path="/" component={TodoApp} />
        </Switch>
      )}
    />
  );
}
