import "./style.scss";

export function List() {
  const tasks = [
    {
      task: "React",
      time: "1:30:00"
    },
    {
      task: "Javascript",
      time: "2:20:00"
    }
  ];

  return (
    <aside className="listaTarefas">
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map((item, index) => {
          return (
            <li key={index} className="item">
              <h3>{item.task}</h3>
              <span>{item.time}</span>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}