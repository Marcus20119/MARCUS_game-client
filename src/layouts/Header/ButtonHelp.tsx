import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '~/store/rootReducer';
import { handleShowWordleModal } from '~/store/game/wordle.slice';
import { handleShowTictactoeModal } from '~/store/game/tictactoe.slice';

const ButtonHelp = () => {
  const dispatch = useDispatch();
  const { currentGame } = useSelector((state: IRootState) => state.player);

  const handleClickHelp = () => {
    switch (currentGame) {
      case 'Wordle': {
        dispatch(handleShowWordleModal('help'));
        break;
      }
      case 'Tic Tac Toe': {
        dispatch(handleShowTictactoeModal('help'));
        break;
      }
      default:
        break;
    }
  };

  return (
    <button
      className="text-white flex justify-center items-center opacity-100 hover:!opacity-80"
      onClick={handleClickHelp}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-9 h-9"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
        />
      </svg>
    </button>
  );
};

export default ButtonHelp;
