import style from "./Button.module.scss";

interface ButtonProps {
  children: string;
  type?: "button" | "submit" | "reset" | undefined;
}

export function Button({ children, type }: ButtonProps): JSX.Element {
  return (
    <button type={type ? type : "button"} className={style.botao}>
      {children}
    </button>
  );
}
