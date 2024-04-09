import React from "react";
// import { useState } from "react";
import "./CreateTodo.css";

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
    <div className='wrapper'>
      <div className='todo-input-wrapper'>
        <div className='heading'>Todo App</div>
        <input
          type='text'
          placeholder='title'
          className='input-todo'
          value={todo.title}
          onChange={(e) => setTodo({ ...todo, title: e.target.value })}
        />
        <br />
        <input
          type='text'
          className='input-todo'
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
          className='button'
        >
          Add a Todo
        </button>
      </div>
    </div>
  );
};

export default CreateTodo;
