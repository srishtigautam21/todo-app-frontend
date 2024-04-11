import React from "react";

const CompleteTodos = ({ completeTodoArr }) => {
  console.log(completeTodoArr, "vbhjdsb");
  return (
    <div>
      {completeTodoArr?.map((todo, index) => {
        return (
          <div key={index} className='container'>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div className='todoHeading'>{todo.title}</div>

              <button>Delete Todo</button>

              <div className='todoDesc'>{todo.description}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CompleteTodos;
