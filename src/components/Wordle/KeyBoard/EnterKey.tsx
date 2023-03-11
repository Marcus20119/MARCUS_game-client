import { useDispatch, useSelector } from 'react-redux';
import { checkWord, resetValid } from '~/store/wordle.slice';
import { IRootState } from '~/store/rootReducer';
import { keyClass, keyTextClass } from './class';

const EnterKey: React.FC = () => {
  const dispatch = useDispatch();
  const { currentRow, cursorPosition, board, isAnswerValid } = useSelector(
    (state: IRootState) => state.wordle
  );
  const handleClickEnter = () => {
    // Chặn việc chưa nhập xong hàng mà nhấn Enter
    if (
      cursorPosition % 5 === 0 &&
      cursorPosition !== 0 &&
      cursorPosition / 5 === currentRow + 1
    ) {
      const answerWord: string =
        board[cursorPosition - 5] +
        board[cursorPosition - 4] +
        board[cursorPosition - 3] +
        board[cursorPosition - 2] +
        board[cursorPosition - 1];

      dispatch(checkWord(answerWord));
      setTimeout(() => {
        dispatch(resetValid());
      }, 1000);
    }
  };

  return (
    <button
      className={`${keyClass} px-[10px]`}
      onClick={handleClickEnter}
      disabled={!isAnswerValid}
    >
      <span className={keyTextClass}>Enter</span>
    </button>
  );
};

export default EnterKey;
