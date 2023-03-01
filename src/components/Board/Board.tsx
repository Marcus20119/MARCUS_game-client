import { useSelector } from 'react-redux';

import { IRootState } from '~/store/store';
import Square from './Square';

type IBoard = {};

const Board: React.FC<IBoard> = () => {
  const { board } = useSelector((state: IRootState) => state.main);
  return (
    <div className="grid grid-cols-5 grid-rows-6 gap-[0.35rem] my-6">
      {board.map((square, index) => (
        <Square key={`square-${index}`} val={square} squareIdx={index} />
      ))}
    </div>
  );
};

export default Board;
