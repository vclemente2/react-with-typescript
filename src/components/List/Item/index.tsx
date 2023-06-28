import { ITask } from "../../../Interfaces/ITask";
import style from "./Item.module.scss";

interface ItemProps extends ITask {
  selectTask: (task: ITask) => void;
}

export function Item({ selectTask, ...item }: ItemProps) {
  return (
    <li
      className={`${style.item} ${item.selected ? style.itemSelecionado : ""} ${
        item.completed ? style.itemCompletado : ""
      }`}
      onClick={() => {
        !item.completed && selectTask(item);
      }}
    >
      <h3>{item.task}</h3>
      <span>{item.time}</span>
      {item.completed && (
        <span className={style.concluido} aria-label="Item concluído"></span>
      )}
    </li>
  );
}
