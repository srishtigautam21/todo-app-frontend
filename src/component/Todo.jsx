const Todo = ({ todoArr }) => {
  return (
    <div>
      {todoArr?.map((todo, index) => {
        return (
          <div key={index} className='container'>
            <div className='todoHeading'>{todo.title}</div>
            <div className='todoDesc'>{todo.description}</div>
          </div>
        );
      })}
    </div>
  );
};
export default Todo;
