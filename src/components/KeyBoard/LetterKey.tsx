import { useSelector, useDispatch } from 'react-redux';
import { changeCursorPosition, setBoard } from '~/store/mainSlice';

import { IRootState } from '~/store/store';
import { keyClass, keyTextClass } from './class';

type ILetterKey = {
  letter: string;
};

const LetterKey: React.FC<ILetterKey> = ({ letter }) => {
  const { board, cursorPosition, row } = useSelector(
    (state: IRootState) => state.main
  );
  const dispatch = useDispatch();
  let cursorRow = Math.floor(cursorPosition / 5);
  const handleSetLetter = () => {
    // Nếu lớn hơn 30 sẽ bị tràn chữ
    if (cursorPosition >= 30) return;
    // Nếu con trỏ ở dòng lớn hơn dòng đang viết thì không cho nhập nữa
    if (cursorRow > row) return;

    const newBoard = [...board];
    newBoard[cursorPosition] = letter;
    dispatch(setBoard(newBoard));
    dispatch(changeCursorPosition('increase'));
  };
  return (
    <button className={`${keyClass} w-[32px]`} onClick={handleSetLetter}>
      <span className={keyTextClass}>{letter}</span>
    </button>
  );
};

export default LetterKey;
