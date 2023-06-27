import { ITask } from "../../Interfaces/ITask";
import { Item } from "./Item";
import style from "./List.module.scss";

interface ListProps {
  tasks: ITask[];
  selectTask: (task: ITask) => void;
}

export function List({ tasks, selectTask }: ListProps) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map((item: ITask) => {
          return (
            <Item
              key={item.id}
              id={item.id}
              task={item.task}
              time={item.time}
              selected={item.selected}
              completed={item.completed}
              selectTask={selectTask}
            />
          );
        })}
      </ul>
    </aside>
  );
}
