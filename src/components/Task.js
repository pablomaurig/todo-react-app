import React from "react";
import trash from "../../src/images/trash.svg";
import edit from "../../src/images/edit.svg";

const Task = ({
  title,
  description,
  checked,
  handleDelete,
  handleChek,
  handleEdit,
}) => {
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
      <div>
        <button onClick={handleEdit} title="edit">
          <img src={edit} className="icon" alt="edit" />
        </button>
        <button onClick={handleDelete} title="delete">
          <img src={trash} className="icon" alt="delete" />
        </button>
      </div>
    </div>
  );
};

export default Task;
