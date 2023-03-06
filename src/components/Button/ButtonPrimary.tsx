type IButtonPrimary = {
  children: React.ReactNode;
  additionalClass?: string;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const ButtonPrimary: React.FC<IButtonPrimary> = ({
  children,
  additionalClass = '',
  ...props
}) => {
  return (
    <button
      {...props}
      className={`flex justify-center items-center gap-2 w-full bg-transparent py-[10px] rounded-[0.25rem] text-white border border-white font-bold opacity-80 transition-colors hover:border-[#999] hover:opacity-100 hover:bg-[#27272A] tracking-wider disabled:!opacity-60 ${additionalClass}`}
    >
      {children}
    </button>
  );
};

export { ButtonPrimary };
