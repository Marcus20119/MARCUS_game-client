import { useSelector, useDispatch } from 'react-redux';
import { changePosition, setBoard } from '~/store/mainSlice';

import { IRootState } from '~/store/store';
import { keyClass, keyTextClass } from './class';

type ILetterKey = {
  letter: string;
};

const LetterKey: React.FC<ILetterKey> = ({ letter }) => {
  const { board, position } = useSelector((state: IRootState) => state.main);
  const dispatch = useDispatch();
  const handleSetLetter = () => {
    // Nếu lớn hơn 30 sẽ bị tràn chữ
    if (position < 30) {
      const newBoard = [...board];
      newBoard[position] = letter;
      dispatch(setBoard(newBoard));
      dispatch(changePosition('increase'));
    }
  };
  return (
    <button className={`${keyClass} w-[32px]`} onClick={handleSetLetter}>
      <span className={keyTextClass}>{letter.toUpperCase()}</span>
    </button>
  );
};

export default LetterKey;
