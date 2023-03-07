import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForceRerender } from '~/hooks';
import { changeCursorPosition, setBoard } from '~/store/wordleSlice';

import { IRootState } from '~/store/store';
import { keyClass, keyTextClass } from './class';

type ILetterKey = {
  letter: string;
};

const LetterKey: React.FC<ILetterKey> = ({ letter }) => {
  const {
    board,
    cursorPosition,
    currentRow,
    almostLetters,
    correctLetters,
    wrongLetters,
    isFinishGame,
  } = useSelector((state: IRootState) => state.wordle);
  const dispatch = useDispatch();
  let cursorRow = Math.floor(cursorPosition / 5);
  const handleSetLetter = () => {
    // Nếu lớn hơn 30 sẽ bị tràn chữ
    if (cursorPosition >= 30) return;
    // Nếu con trỏ ở dòng lớn hơn dòng đang viết thì không cho nhập nữa
    if (cursorRow > currentRow) return;
    // Nếu xong game thì không cho nhập nữa
    if (isFinishGame) return;

    const newBoard = [...board];
    newBoard[cursorPosition] = letter;
    dispatch(setBoard(newBoard));
    dispatch(changeCursorPosition('increase'));
  };

  useForceRerender([currentRow]);

  const letterRef = useRef(null);
  useEffect(() => {
    if (letterRef.current) {
      const letterElement = letterRef.current as HTMLButtonElement;
      let newClass: string = correctLetters.includes(letter)
        ? '!bg-emerald-600'
        : almostLetters.includes(letter)
        ? '!bg-amber-300'
        : wrongLetters.includes(letter)
        ? '!bg-slate-700'
        : '';

      if (newClass) {
        setTimeout(() => {
          letterElement.classList.add(newClass);
        }, 2200);
      } else {
        letterElement.classList.remove(
          '!bg-emerald-600',
          '!bg-amber-300',
          '!bg-slate-700'
        );
      }
    }
  }, [almostLetters, correctLetters, letter, wrongLetters]);

  return (
    <button
      ref={letterRef}
      className={`${keyClass} w-[32px] transition-colors`}
      onClick={handleSetLetter}
    >
      <span className={keyTextClass}>{letter}</span>
    </button>
  );
};

export default LetterKey;
