import { useEffect, useState } from "react";
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
  const [createNew, setCreateNew] = useState(false);
  const [totalCount, setTotalCount] = useState(() => tasksList.length);
  const [doneCount, setDoneCount] = useState(
    () => tasksList.filter((task) => task.checked === true).length
  );
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

  useEffect(() => {
    setTotalCount(tasksList.length);
    setDoneCount(tasksList.filter((task) => task.checked === true).length);
  }, [tasksList]);

  return (
    <div className="App">
      <Header />
      <main>
        {createNew ? (
          <NewTask onSave={handleSave} onCancel={handleCancel} />
        ) : (
          <div className="count-container">
            <h3>
              Total tasks: <b>{totalCount}</b>
            </h3>
            <button className="button" onClick={handleNewTask}>
              Add new task
            </button>
            <h3>
              Completed tasks: <b>{doneCount}</b>
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
