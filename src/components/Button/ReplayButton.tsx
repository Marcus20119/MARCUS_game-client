type ButtonProps = {
  children?: React.ReactNode;
} & React.ClassAttributes<HTMLButtonElement> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

const ReplayButton = (props: ButtonProps) => {
  return <button {...props}>New Game</button>;
};

export { ReplayButton };
