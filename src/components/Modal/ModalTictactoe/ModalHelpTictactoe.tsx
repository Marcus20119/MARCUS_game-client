import { useDispatch, useSelector } from 'react-redux';
import ModalBase from '~/components/Base/ModalBase';
import { IRootState } from '~/store/rootReducer';
import { handleHideTictactoeModal } from '~/store/game/tictactoe.slice';

const ModalHelpTictactoe = () => {
  const dispatch = useDispatch();
  const { showHelpTictactoeModal } = useSelector(
    (state: IRootState) => state.tictactoe
  );

  return (
    <ModalBase
      visible={showHelpTictactoeModal}
      onClose={() => dispatch(handleHideTictactoeModal())}
    >
      <div
        className={`relative bg-zinc-800 rounded-2xl z-2 transition-all w-[90vw] max-w-[500px] px-8 py-[30px] text-gray-300`}
      >
        <h2 className="text-3xl font-bold mb-3">How To Play</h2>
        <ul className="flex flex-col gap-2 ml-5">
          <li className="!list-decimal">
            Play occurs on a 3 by 3 grid of 9 squares.
          </li>
          <li className="!list-decimal">
            You and the Computer take turns marking empty squares, the first
            marking{' '}
            <strong className="font-bold text-lg text-[#F44336]">X</strong>'s.
            the second{' '}
            <strong className="font-bold text-lg text-[#2196F3]">O</strong>'s
          </li>
          <li className="!list-decimal">
            A row is any three squares on the grid, adjacent diagonally,
            vertically or horizontally.
          </li>
          <li className="!list-decimal">
            If you place three of the same marks in a row, you win. If the
            Computer place three of the same marks in a row, you lose
          </li>
          <li className="!list-decimal">
            If the spaces are all filled and there is no winner, the game ends
            in a draw
          </li>
        </ul>

        <button
          className="close-modal absolute top-5 right-5 text-[1.75rem] hover:!opacity-70"
          onClick={() => dispatch(handleHideTictactoeModal())}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </ModalBase>
  );
};

export default ModalHelpTictactoe;
