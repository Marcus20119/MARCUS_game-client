type IOCell = {
  isAnimate?: boolean;
  className?: string;
  onClick?: () => void;
};

const OCell: React.FC<IOCell> = ({
  isAnimate = true,
  className = '',
  onClick = () => {},
}) => {
  return (
    <div
      className={`z-10 relative flex justify-center items-center w-[100px] h-[100px] ${className}`}
      onClick={onClick}
    >
      <div
        className="z-[11] absolute inset-0 flex justify-center items-center"
        style={{
          animation: isAnimate ? 'zoom 0.7s ease forwards' : '',
        }}
      >
        <div className="z-[12] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[72px] h-[72px] bg-[#2196F3] rounded-full"></div>
        <div className="z-[13] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[42px] h-[42px] bg-[#27272A] rounded-full">
          &nbsp;
        </div>
      </div>
    </div>
  );
};

export default OCell;
