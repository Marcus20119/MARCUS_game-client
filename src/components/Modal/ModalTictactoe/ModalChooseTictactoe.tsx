import { useDispatch, useSelector } from 'react-redux';
import ModalBase from '~/components/Base/ModalBase';
import { IRootState } from '~/store/rootReducer';
import {
  handleHideTictactoeModal,
  setTictactoeState,
} from '~/store/game/tictactoe.slice';
import XCell from '~/pages/TicTacToe/Board/XCell';
import OCell from '~/pages/TicTacToe/Board/OCell';
import { useResponsive } from '~/hooks';

const ModalChooseTictactoe = () => {
  const dispatch = useDispatch();
  const { showChooseTictactoeModal, playerMark } = useSelector(
    (state: IRootState) => state.tictactoe
  );
  const { isLaptop } = useResponsive();
  return (
    <ModalBase
      visible={showChooseTictactoeModal}
      onClose={() => dispatch(handleHideTictactoeModal())}
    >
      <div
        className={`relative bg-zinc-800 rounded-2xl z-2 transition-all w-[90vw] max-w-[500px] px-8 py-[30px] text-gray-300`}
      >
        <h2
          className={`text-center font-bold tracking-wide border-b border-b-gray-300 mb-[32px] ${
            isLaptop ? 'text-4xl' : 'text-[1.7rem] pb-2'
          }`}
        >
          CHOOSE YOUR MARK
        </h2>
        <div className="flex justify-evenly items-center w-full">
          <XCell
            index={100}
            className={
              playerMark === 'X'
                ? 'rounded-md border border-gray-500 bg-gray-700 shadow-md cursor-pointer'
                : 'rounded-md hover:bg-gray-700 hover:opacity-70 cursor-pointer transition-all'
            }
            onClick={() => {
              dispatch(setTictactoeState({ state: 'playerMark', value: 'X' }));
              dispatch(handleHideTictactoeModal());
            }}
          />
          <OCell
            className={
              playerMark === 'O'
                ? 'rounded-md border border-gray-500 bg-gray-700 shadow-md cursor-pointer'
                : 'rounded-md hover:bg-gray-700 hover:opacity-70 cursor-pointer transition-all'
            }
            onClick={() => {
              dispatch(setTictactoeState({ state: 'playerMark', value: 'O' }));
              dispatch(handleHideTictactoeModal());
            }}
          />
        </div>
      </div>
    </ModalBase>
  );
};

export default ModalChooseTictactoe;
