import { useDispatch, useSelector } from 'react-redux';
import { ButtonReplay } from '~/components/Button';

import { IRootState } from '~/store/store';
import { replay } from '~/store/wordleSlice';
import Square from './Square';

type IBoard = {};

const Board: React.FC<IBoard> = () => {
  const dispatch = useDispatch();
  const { board, isAnswerValid, isFinishGame } = useSelector(
    (state: IRootState) => state.wordle
  );
  return (
    <div className="relative grid grid-cols-5 grid-rows-6 gap-[0.35rem] my-6">
      {!isAnswerValid && (
        <span
          className="absolute bottom-[105%] left-1/2 -translate-x-1/2 inline-block px-3 py-2 rounded-md bg-gray-50 text-sm font-bold text-slate-900 whitespace-nowrap opacity-0"
          style={{
            animation: 'fade-in 1s linear',
            WebkitAnimation: 'fade-in 1s linear',
          }}
        >
          Not in Word list
        </span>
      )}
      {board.map((square, index) => (
        <Square key={`square-${index}`} val={square} squareIdx={index} />
      ))}
      {isFinishGame && (
        <ButtonReplay
          className="absolute bottom-[108%] left-1/2 -translate-x-1/2 block whitespace-nowrap text-white rounded-md px-3 py-2 text-lg font-bold bg-[#818384] opacity-100 hover:opacity-80"
          onClick={() => dispatch(replay())}
        />
      )}
    </div>
  );
};

export default Board;
