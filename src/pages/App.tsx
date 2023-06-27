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
        selected: item.id === task.id ? true : false
      }))
    );
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} selectTask={selectTask} />
      <Timer />
    </div>
  );
}

export default App;
