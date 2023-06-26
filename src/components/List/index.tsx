import { ITask } from "../../Interfaces/ITask";
import { Item } from "./Item";
import style from "./List.module.scss";

export function List({ tasks }: { tasks: ITask[] }) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map((item: ITask, index: number) => {
          return <Item key={index} task={item.task} time={item.time} />;
        })}
      </ul>
    </aside>
  );
}
