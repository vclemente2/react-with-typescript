import { ITask } from "../../../Interfaces/ITask";
import style from "./Item.module.scss";

interface ItemProps extends ITask {
  selectTask: (task: ITask) => void;
}

export function Item({ selectTask, ...item }: ItemProps) {
  return (
    <li
      className={`${style.item} ${item.selected ? style.itemSelecionado : ""}`}
      onClick={() => {
        selectTask(item);
      }}
    >
      <h3>{item.task}</h3>
      <span>{item.time}</span>
    </li>
  );
}
