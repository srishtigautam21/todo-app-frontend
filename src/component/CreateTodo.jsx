import React from "react";
// import { useState } from "react";
import "./Todo.css";

const CreateTodo = ({ todo, setTodo, handleTodoDisplay }) => {
  const handleAddTodo = async () => {
    await fetch("http://localhost:3000/todo", {
      method: "POST",
      body: JSON.stringify({
        title: todo.title,
        description: todo.description,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    handleTodoDisplay();
  };
  return (
    <div>
      <input
        type='text'
        placeholder='text'
        value={todo.title}
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
      />
      <br />
      <input
        type='text'
        placeholder='description'
        value={todo.description}
        onChange={(e) => setTodo({ ...todo, description: e.target.value })}
      />
      <br />
      <button
        onClick={() => {
          if (todo.title !== "" && todo.description !== "") {
            handleAddTodo();
          }
        }}
      >
        Add a Todo
      </button>
    </div>
  );
};

export default CreateTodo;
