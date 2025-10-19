import React from "react";

function ToDoList() {
  const tasks = ["Learn React", "Build a project", "Read documentation"];

  return (
    <div>
        <ul className="todo-list">
            <li>{tasks[0]}</li>
            <li>{tasks[1]}</li>
            <li>{tasks[2]}</li>
        </ul>
        
    </div>
  );
}

export default ToDoList;
