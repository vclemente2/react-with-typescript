import style from "./App.module.scss";
import { Form } from "../components/Form";
import { List } from "../components/List";
import { useState } from "react";
import { Timer } from "../components/Timer";
import { ITask } from "../Interfaces/ITask";

function App() {
  const [tasks, setTasks] = useState<ITask[] | []>([]);
  const [selectedTask, setSelectedTask] = useState<ITask>();

  function selectTask(task: ITask): void {
    setSelectedTask(task);
    setTasks((currentTasks) =>
      currentTasks.map((item) => ({
        ...item,
        selected:
          item.id === task.id ? (item.selected === false ? true : false) : false
      }))
    );
  }

  function completeTask(): void {
    if (selectedTask) {
      setSelectedTask(undefined);
      setTasks((currentTasks: Array<ITask>) =>
        currentTasks.map((task) => {
          if (task.id === selectedTask.id) {
            return {
              ...task,
              selected: false,
              completed: true
            };
          }
          return task;
        })
      );
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} selectTask={selectTask} />
      <Timer selectedTask={selectedTask} completeTask={completeTask} />
    </div>
  );
}

export default App;
