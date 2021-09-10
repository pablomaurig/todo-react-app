import React, { useEffect, useState } from "react";

const NewTask = ({ onSave, onCancel }) => {
  const [task, setTask] = useState({});

  useEffect(() => {
    setTask({});
  }, []);

  return (
    <div className="newTask">
      <h2 className="title">New task</h2>
      <div>
        <input
          type="text"
          onChange={(e) => setTask({ ...task, title: e.target.value })}
          value={task.title}
        />
      </div>
      <div>
        <textarea
          onChange={(e) => setTask({ ...task, description: e.target.value })}
        >
          {task.description}
        </textarea>
      </div>
      <button onClick={() => onSave(task)}>Save</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default NewTask;
