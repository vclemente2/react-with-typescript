import "./style.scss";

interface props {
  children: string;
}

export function Button({ children }: props): JSX.Element {
  return <button className="botao">{children}</button>;
}
