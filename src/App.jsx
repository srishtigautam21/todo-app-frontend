import { useState } from "react";

import "./App.css";
import CreateTodo from "./component/CreateTodo";
import Todo from "./component/Todo";

function App() {
  return (
    <>
      <CreateTodo />
      <Todo />
    </>
  );
}

export default App;
