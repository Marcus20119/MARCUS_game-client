type ISquare = {
  val: string;
  squareIdx: number;
};

const Square: React.FC<ISquare> = ({ val, squareIdx }) => {
  return (
    <div
      className={`flex justify-center items-center h-[48px] w-[48px] border-2 rounded-sm ${
        val ? 'border-[#565758]' : 'border-[#3A3A3C]'
      }`}
    >
      <span className="text-white font-bold text-xl leading-none mt-[2px]">
        {val.toUpperCase()}
      </span>
    </div>
  );
};

export default Square;
