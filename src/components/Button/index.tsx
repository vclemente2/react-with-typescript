interface props {
  children: string;
}

export function Button({ children }: props): JSX.Element {
  return <button>{children}</button>;
}
