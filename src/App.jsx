import { useState, useEffect } from "react";
import Navigation from "./component/Navigation";
import "./App.css";
import CreateTodo from "./component/CreateTodo";
import Todo from "./component/Todo";

function App() {
  const [todo, setTodo] = useState({
    title: "",
    description: "",
  });
  const [todoArr, setTodoArr] = useState([]);

  const handleTodoDisplay = async () => {
    const response = await fetch("http://localhost:3000/todos", {
      method: "GET",
    });
    const data = await response.json();
    console.log(data.todos);
    setTodoArr(data.todos);
    setTodo({ title: "", description: "" });
  };
  useEffect(() => {
    handleTodoDisplay();
  }, []);

  return (
    <>
      <Navigation />
      <CreateTodo
        todo={todo}
        setTodo={setTodo}
        handleTodoDisplay={handleTodoDisplay}
      />
      <Todo
        todoArr={todoArr}
        handleTodoDisplay={handleTodoDisplay}
        setTodoArr={setTodoArr}
      />
    </>
  );
}

export default App;
