import style from "./Button.module.scss";

interface props {
  children: string;
}

export function Button({ children }: props): JSX.Element {
  return <button className={style.botao}>{children}</button>;
}
