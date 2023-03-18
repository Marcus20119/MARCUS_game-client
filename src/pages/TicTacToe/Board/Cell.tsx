import { useDispatch, useSelector } from 'react-redux';
import {
  autoSetCell,
  checkTictactoeResult,
  setCell,
} from '~/store/game/tictactoe.slice';
import { IRootState } from '~/store/rootReducer';
import OCell from './OCell';
import XCell from './XCell';

type ICell = {
  index: number;
};

const Cell: React.FC<ICell> = ({ index }) => {
  const dispatch = useDispatch();
  const { board, playerMark, isFinish } = useSelector(
    (state: IRootState) => state.tictactoe
  );
  const handleSetCell = () => {
    dispatch(setCell({ index, value: playerMark }));
    dispatch(checkTictactoeResult());

    setTimeout(() => {
      dispatch(autoSetCell());
      dispatch(checkTictactoeResult());
    }, 500);
  };
  return (
    <button
      className={`flex justify-center items-center w-[100px] h-[100px] bg-transparent font-black text-7xl`}
      onClick={handleSetCell}
      disabled={!!board[index] || isFinish}
    >
      {board[index] === 'X' && <XCell index={index} />}
      {board[index] === 'O' && <OCell />}
    </button>
  );
};

export default Cell;
