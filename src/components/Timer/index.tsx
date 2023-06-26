import { Button } from "../Button";
import { Clock } from "./Clock";
import style from "./Timer.module.scss";

export function Timer() {
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha uma tarefa e inicie o cronometro.</p>
      <div className={style.relogioWrapper}>
        <Clock />
      </div>
      <Button>Começar!</Button>
    </div>
  );
}
