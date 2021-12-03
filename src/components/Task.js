import React from "react";

function Task({ text, category, handleDeleteClick }) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDeleteClick} >Delete</button>
    </div>
  );
}

export default Task;