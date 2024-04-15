import React from "react";
import "./Navigation.css";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();
  return (
    <div className='navigation-wrapper'>
      <div className='navigation'>
        <div onClick={() => navigate("/")}>Todo App</div>
        <div onClick={() => navigate("/completedTodos")}>Completed Todos</div>
      </div>
    </div>
  );
};

export default Navigation;
