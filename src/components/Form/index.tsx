import style from "./Form.module.scss";
import { Button } from "../Button";
import { useState } from "react";
import { ITask } from "../../Interfaces/ITask";
import { v4 as uuid } from "uuid";

export function Form({
  setTasks
}: {
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}) {
  const [time, setTime] = useState("00:00");
  const [task, setTask] = useState("");

  return (
    <form
      className={style.novaTarefa}
      onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setTasks((currentTasks: ITask[]) => [
          ...currentTasks,
          {
            id: uuid(),
            task: task,
            time: time,
            completed: false,
            selected: false
          }
        ]);
        setTime("00:00");
        setTask("");
      }}
    >
      <div className={style.inputContainer}>
        <label htmlFor="task">Adicione um novo estudo</label>
        <input
          type="text"
          name="task"
          id="task"
          placeholder="O que você quer estudar"
          value={task}
          onChange={(event) => {
            setTask(event.target.value);
          }}
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="time">Tempo</label>
        <input
          type="time"
          step="1"
          name="time"
          id="time"
          min="00:00:00"
          max="01:30:00"
          value={time}
          onChange={(event) => {
            setTime(event.target.value);
          }}
          required
        ></input>
      </div>
      <Button type="submit">Enviar</Button>
    </form>
  );
}
