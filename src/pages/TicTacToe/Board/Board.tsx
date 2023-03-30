import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonReplay } from '~/components/Button';
import { useResponsive } from '~/hooks';
import {
  autoSetCell,
  handleShowTictactoeModal,
  resetTictactoe,
} from '~/store/game/tictactoe.slice';
import { IRootState } from '~/store/rootReducer';
import Cell from './Cell';
import GridLines from './GridLines';

const Board = () => {
  const dispatch = useDispatch();
  const { isFinish, playerMark, showChooseTictactoeModal } = useSelector(
    (state: IRootState) => state.tictactoe
  );

  useEffect(() => {
    if (playerMark === 'O' && !showChooseTictactoeModal) {
      dispatch(autoSetCell());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showChooseTictactoeModal, playerMark]);
  const { isLaptop } = useResponsive();

  return (
    <div className={`relative w-[328px] h-[328px] ${isLaptop ? '' : 'mt-5'}`}>
      <GridLines />
      <div className="z-10 absolute inset-0 grid grid-cols-3 grid-rows-3 gap-[14px] bg-transparent">
        {Array(9)
          .fill('')
          .map((item, index) => (
            <Cell key={`cell-${index}`} index={index} />
          ))}
      </div>
      {isFinish && (
        <ButtonReplay
          className="absolute bottom-[108%] left-1/2 -translate-x-1/2 block whitespace-nowrap text-white rounded-md px-3 py-2 text-lg font-bold bg-[#818384] opacity-100 hover:!opacity-80"
          onClick={() => {
            dispatch(resetTictactoe());
            dispatch(handleShowTictactoeModal('choose'));
          }}
        />
      )}
    </div>
  );
};

export default Board;
