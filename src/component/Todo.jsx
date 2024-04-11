import "./Todo.css";

const Todo = ({
  todoArr,
  handleTodoDisplay,
  setTodoArr,
  setCompleteTodoArr,
  completeTodoArr,
}) => {
  const handleTodoComplete = async (todo) => {
    // const id = todo._id;
    console.log(todo._id, typeof todo._id);
    try {
      const response = await fetch("http://localhost:3000/completed", {
        method: "PUT",
        body: JSON.stringify({ id: todo._id }), //always send body in the form of a JSON
        headers: {
          "Content-type": "application/json",
        },
      });
      const data = await response.json();
      if (response.status === 200) {
        // handleTodoDisplay();
        //Add completed todo to new completed todo arr
        setCompleteTodoArr(todoArr.map((todo) => todo.completed === true));
        setTodoArr(todoArr.filter((todo) => todo.completed !== true));
        console.log(data, "here");
      }
    } catch (e) {
      console.log(e);
    }

    console.log("response", response.status, data);
  };
  return (
    <div>
      <div className='heading' style={{ textAlign: "center", margin: "10px" }}>
        Todos
      </div>
      {todoArr?.map((todo, index) => {
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
              {todo?.completed === true ? (
                <div className='completedTodo'>Todo completed</div>
              ) : (
                <button onClick={() => handleTodoComplete(todo)}>
                  Complete
                </button>
              )}
            </div>
            <div className='todoDesc'>{todo.description}</div>
          </div>
        );
      })}
    </div>
  );
};
export default Todo;
