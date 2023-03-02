import { Fragment } from 'react';
import { keyBoardRows } from '~/utils';
import BackKey from './BackKey';
import EnterKey from './EnterKey';
import LetterKey from './LetterKey';

type IKeyBoard = {};

const KeyBoard: React.FC<IKeyBoard> = () => {
  return (
    <div className="flex flex-col items-center gap-2 mt-2">
      {keyBoardRows.map((row, index) => (
        <div
          key={`row-${index}`}
          className="flex justify-center items-center gap-[0.3rem]"
        >
          {index === 2 && <EnterKey />}
          {row.split(' ').map(letter => (
            <Fragment key={letter}>
              <LetterKey key={letter} letter={letter} />
              {letter === 'M' && <BackKey />}
            </Fragment>
          ))}
        </div>
      ))}
    </div>
  );
};

export default KeyBoard;
