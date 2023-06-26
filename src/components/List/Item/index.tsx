import { ITask } from "../../../Interfaces/ITask";
import style from "./Item.module.scss";

export function Item({ task, time }: ITask) {
  return (
    <li className={style.item}>
      <h3>{task}</h3>
      <span>{time}</span>
    </li>
  );
}
