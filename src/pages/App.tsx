import style from "./App.module.scss";
import { Form } from "../components/Form";
import { List } from "../components/List";
import { useState } from "react";
import { Timer } from "../components/Timer";

function App() {
  const [tasks, setTasks] = useState([{ task: "React", time: "02:00:00" }]);
  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} tasks={tasks} />
      <List tasks={tasks} />
      <Timer />
    </div>
  );
}

export default App;
