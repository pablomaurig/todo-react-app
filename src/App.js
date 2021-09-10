import { useState } from "react";
import Header from "./components/Header";
import NewTask from "./components/NewTask";
import Task from "./components/Task";
import "./App.css";

const INITIAL_STATE = [
  {
    id: 1,
    title: "task one",
    description: "description one",
    checked: true,
  },
  {
    id: 2,
    title: "task two",
    description: "description two",
    checked: false,
  },
  {
    id: 3,
    title: "task three",
    description: "description three",
    checked: false,
  },
];

function App() {
  const [tasksList, setTasksList] = useState(INITIAL_STATE);
  const [createNew, setCreateNew] = useState(false);
  console.log(tasksList);

  const handleNewTask = () => {
    setCreateNew(true);
  };
  const handleCancel = () => {
    setCreateNew(false);
  };
  const handleSave = (task) => {
    const { title, description } = task;
    if (title || description) {
      const id =
        tasksList.length > 0 ? Math.max(...tasksList.map((t) => t.id)) + 1 : 1;
      const newTask = {
        id: id,
        ...task,
        checked: false,
      };
      setTasksList([...tasksList, newTask]);
    }
    setCreateNew(false);
  };
  const handleCkeck = (id) => {
    const newTasksList = tasksList.map((task) => {
      if (task.id === id) {
        const updatedTask = {
          ...task,
          checked: !task.checked,
        };
        return updatedTask;
      }
      return task;
    });

    setTasksList(newTasksList);
  };
  const handleDeleteTask = (id) => {
    setTasksList(tasksList.filter((task) => task.id !== id));
  };
  return (
    <div className="App">
      <Header />
      <main>
        {createNew ? (
          <NewTask onSave={handleSave} onCancel={handleCancel} />
        ) : (
          <button onClick={handleNewTask}>Add new task</button>
        )}
        <div>
          <h2 className="title">My tasks</h2>
          {tasksList
            .slice(0)
            .reverse()
            .map((task) => (
              <Task
                key={task.id}
                id={task.id}
                title={task.title}
                description={task.description}
                checked={task.checked}
                handleChek={() => handleCkeck(task.id)}
                handleDelete={() => handleDeleteTask(task.id)}
              />
            ))}
        </div>
      </main>
    </div>
  );
}

export default App;
