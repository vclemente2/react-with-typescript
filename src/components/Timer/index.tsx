import { useEffect, useState } from "react";
import { ITask } from "../../Interfaces/ITask";
import { Button } from "../Button";
import { Clock } from "./Clock";
import style from "./Timer.module.scss";
import { timeToSecond } from "../../common/utils/time";

interface TimerProps {
  selectedTask: ITask | undefined;
  completeTask: () => void;
}

export function Timer({ selectedTask, completeTask }: TimerProps) {
  const [time, setTime] = useState<number>(0);

  useEffect(() => {
    if (selectedTask?.time) setTime(timeToSecond(selectedTask.time));
    if (selectedTask?.selected) setTime(0);
  }, [selectedTask]);

  function countdown(countdownTime: number) {
    setTimeout(() => {
      if (countdownTime > 0) {
        setTime(countdownTime - 1);
        return countdown(countdownTime - 1);
      }

      completeTask();
    }, 1000);
  }

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha uma tarefa e inicie o cronometro.</p>
      <div className={style.relogioWrapper}>
        <Clock time={time} />
      </div>
      <Button
        onClick={() => {
          countdown(time);
        }}
      >
        Começar!
      </Button>
    </div>
  );
}
