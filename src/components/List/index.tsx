import { StudyList } from "../../Interfaces/StudyList";
import style from "./List.module.scss";

export function List({ tasks }: { tasks: StudyList[] }) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map((item: StudyList, index: number) => {
          return (
            <li key={index} className={style.item}>
              <h3>{item.task}</h3>
              <span>{item.time}</span>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
