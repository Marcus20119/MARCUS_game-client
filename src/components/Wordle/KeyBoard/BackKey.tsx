import { useSelector, useDispatch } from 'react-redux';
import { changeCursorPosition, setBoard } from '~/store/wordle.slice';
import { IRootState } from '~/store/rootReducer';
import { keyClass } from './class';

const BackKey: React.FC = () => {
  const dispatch = useDispatch();
  const { board, cursorPosition, currentRow } = useSelector(
    (state: IRootState) => state.wordle
  );
  const handleEraseLetter = () => {
    // Chỉ cho phép xóa dòng hiện tại đang viết
    if (Math.floor((cursorPosition - 1) / 5) < currentRow) return;

    const newBoard = [...board];
    newBoard[cursorPosition - 1] = '';
    dispatch(setBoard(newBoard));
    dispatch(changeCursorPosition('decrease'));
  };
  return (
    <button
      className={`${keyClass} pl-[9px] pr-[10px] w-[48px]`}
      onClick={handleEraseLetter}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        className="game-icon"
        data-testid="icon-backspace"
        fill="#fff"
      >
        <path
          fill="var(--color-tone-1)"
          d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"
        ></path>
      </svg>
    </button>
  );
};

export default BackKey;
