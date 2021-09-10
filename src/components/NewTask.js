import React, { useEffect, useState } from "react";

const NewTask = ({ onSave, onCancel }) => {
  const [task, setTask] = useState({});

  useEffect(() => {
    setTask({});
  }, []);

  return (
    <div className="newTask">
      <h2 className="title">New task</h2>
      <div className="form-group">
        <input
          className="form-control"
          type="text"
          onChange={(e) => setTask({ ...task, title: e.target.value })}
          value={task.title}
        />
      </div>
      <div className="form-group">
        <textarea
          className="form-control"
          onChange={(e) => setTask({ ...task, description: e.target.value })}
        >
          {task.description}
        </textarea>
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
