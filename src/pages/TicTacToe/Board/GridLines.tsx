const GridLines = () => {
  return (
    <div className="z-[5] absolute inset-0">
      <div className="z-[6] absolute inset-0">
        {Array(2)
          .fill('')
          .map((item, index) => (
            <div
              key={`vertical-line-${index}`}
              className="z-[7] absolute left-0 top-0 h-[328px] w-[14px] rounded-md bg-[#607D8B]"
              style={{
                transform: `translateX(${(index + 1) * 100 + index * 16}px)`,
              }}
            >
              &nbsp;
            </div>
          ))}
      </div>
      <div className="z-[8] absolute inset-0">
        {Array(2)
          .fill('')
          .map((item, index) => (
            <div
              key={`horizontal-line-${index}`}
              className="z-[9] absolute left-0 top-0 w-[328px] h-[14px] rounded-md bg-[#607D8B]"
              style={{
                transform: `translateY(${(index + 1) * 100 + index * 16}px)`,
              }}
            >
              &nbsp;
            </div>
          ))}
      </div>
    </div>
  );
};

export default GridLines;
