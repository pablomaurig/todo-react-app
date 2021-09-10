import React from "react";
import trash from "../../src/images/trash.svg";

const Task = ({ title, description, checked, handleDelete, handleChek }) => {
  // const handleEdit = () => {};
  return (
    <div className="task">
      <div onClick={handleChek}>
        <input
          onChange={handleChek}
          type="checkbox"
          checked={checked ? "checked" : ""}
        />
        <div className="details">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
      <button onClick={handleDelete}>
        <img src={trash} className="delete" alt="delete" />
      </button>
    </div>
  );
};

export default Task;
