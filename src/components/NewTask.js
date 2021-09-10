import React, { useState } from "react";

const NewTask = ({ onSave, onCancel, taskToEdit }) => {
  const [task, setTask] = useState(taskToEdit);

  return (
    <div className="newTask">
      <h2 className="title">New task</h2>
      <div className="form-group">
        <input
          className="form-control"
          type="text"
          onChange={(e) => setTask({ ...task, title: e.target.value })}
          value={task.title ? task.title : ""}
        />
      </div>
      <div className="form-group">
        <textarea
          className="form-control"
          defaultValue={task.description ? task.description : ""}
          onChange={(e) => setTask({ ...task, description: e.target.value })}
        />
      </div>
      <button className="button" onClick={() => onSave(task)}>
        Save
      </button>
      <button className="button cancel" onClick={onCancel}>
        Cancel
      </button>
    </div>
  );
};

export default NewTask;
