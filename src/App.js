import { useState } from "react";
import Header from "./components/Header";
import NewTask from "./components/NewTask";
import Task from "./components/Task";
import "./App.css";

const INITIAL_STATE = [
  {
    id: 1,
    title: "Sacar al perro",
    description: "Dos veces al día",
    checked: true,
  },
  {
    id: 2,
    title: "Darle de comer al perro",
    description: "Una vez al día",
    checked: false,
  },
  {
    id: 3,
    title: "Lavar al auto",
    description: "Cada quince días",
    checked: false,
  },
  {
    id: 4,
    title: "Hacer ejercicios de NT2",
    description: "Cuando se pueda",
    checked: false,
  },
];

function App() {
  const [tasksList, setTasksList] = useState(INITIAL_STATE);
  const [newTasks, setNewTasks] = useState({});
  const [createNew, setCreateNew] = useState(false);

  const uncompletedCount = tasksList.filter((task) => !task.checked).length;

  const handleNewTask = () => {
    setCreateNew(true);
  };
  const handleCancel = () => {
    setCreateNew(false);
    setNewTasks({});
  };
  const handleSave = (task) => {
    const { title, description, id } = task;
    if (id) {
      const newTasksList = tasksList.map((oldTask) => {
        if (oldTask.id === id) {
          const updatedTask = {
            ...oldTask,
            title,
            description,
          };
          return updatedTask;
        }
        return oldTask;
      });

      setTasksList(newTasksList);
    } else {
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
    setNewTasks({});
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
  const handleEditTask = (id) => {
    setNewTasks(tasksList.find((task) => task.id === id));
    setCreateNew(true);
  };

  return (
    <div className="App">
      <Header />
      <main>
        {createNew ? (
          <NewTask
            taskToEdit={newTasks}
            onSave={handleSave}
            onCancel={handleCancel}
          />
        ) : (
          <div className="count-container">
            <h3>
              Total tasks: <b>{tasksList.length}</b>
            </h3>
            <button className="button" onClick={handleNewTask}>
              Add new task
            </button>
            <h3>
              Uncompleted tasks: <b>{uncompletedCount}</b>
            </h3>
          </div>
        )}
        <div className="container">
          {tasksList.length > 0 ? (
            <>
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
                    handleEdit={() => handleEditTask(task.id)}
                    handleDelete={() => handleDeleteTask(task.id)}
                  />
                ))}
            </>
          ) : (
            !createNew && <h2 className="title">Please, create a task</h2>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
