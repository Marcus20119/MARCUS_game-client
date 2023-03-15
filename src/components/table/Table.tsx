import './Table.scss';

type ITable = {
  children: React.ReactNode;
} & React.DetailedHTMLProps<
  React.TableHTMLAttributes<HTMLTableElement>,
  HTMLTableElement
>;

const Table: React.FC<ITable> = ({ children, className, ...props }) => {
  return (
    <table className={`my-table ${className}`} {...props}>
      {children}
    </table>
  );
};

export default Table;
