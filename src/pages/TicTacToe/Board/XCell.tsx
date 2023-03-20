type IXCell = {
  index: number;
  isAnimate?: boolean;
  className?: string;
  onClick?: () => void;
};

const XCell: React.FC<IXCell> = ({
  index,
  isAnimate = true,
  className = '',
  onClick = () => {},
}) => {
  return (
    <div
      className={`z-10 relative flex justify-center items-center w-[100px] h-[100px] ${className}`}
      onClick={onClick}
    >
      {['right', 'left'].map(item => (
        <div
          key={`${item}-${index}`}
          className={`z-[11] absolute inset-0 flex justify-center items-center ${
            item === 'right' ? 'rotate-45' : '-rotate-45'
          }`}
        >
          <div className="flex justify-center items-start w-[16px] h-[80px] rounded-md overflow-hidden">
            <div
              className="w-full h-full bg-[#F44336] rounded-md"
              style={{
                animation: isAnimate
                  ? item === 'right'
                    ? 'increaseHeightRight 0.7s ease forwards'
                    : 'increaseHeightLeft 0.7s ease forwards'
                  : '',
              }}
            >
              &nbsp;
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default XCell;
