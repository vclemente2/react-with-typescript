import style from "./Button.module.scss";

interface ButtonProps {
  children: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}

export function Button({ children, type, onClick }: ButtonProps): JSX.Element {
  return (
    <button
      onClick={onClick}
      type={type ? type : "button"}
      className={style.botao}
    >
      {children}
    </button>
  );
}
