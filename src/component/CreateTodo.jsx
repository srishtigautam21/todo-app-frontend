import React from "react";

const CreateTodo = () => {
  return (
    <div>
      <input type='text' placeholder='text' />
      <br />
      <input type='text' placeholder='description' />
      <br />
      <button>Add a Todo</button>
    </div>
  );
};

export default CreateTodo;
