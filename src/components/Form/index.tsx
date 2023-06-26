import style from "./Form.module.scss";
import { Button } from "../Button";
import { useState } from "react";
import { StudyList } from "../../Interfaces/StudyList";

export function Form({ tasks, setTasks }) {
  const [time, setTime] = useState();
  const [task, setTask] = useState();

  return (
    <form
      className={style.novaTarefa}
      onSubmit={(event) => {
        event.preventDefault();
        setTasks([...tasks, { task: task, time: time }]);
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
      <Button>Enviar</Button>
    </form>
  );
}
