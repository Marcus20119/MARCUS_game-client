import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '~/store/rootReducer';
import { handleShowWordleModal } from '~/store/game/wordle.slice';
import { actionGetPlayerGameData } from '~/store/player/player.action';
import { handleShowTictactoeModal } from '~/store/game/tictactoe.slice';

const ButtonChart = () => {
  const dispatch = useDispatch();
  const { currentGame } = useSelector((state: IRootState) => state.player);
  const { userData } = useSelector((state: IRootState) => state.auth);

  const handleClickChart = () => {
    if (userData?.id) {
      switch (currentGame) {
        case 'Wordle': {
          dispatch(handleShowWordleModal('chart'));
          dispatch(
            actionGetPlayerGameData({ game: 'Wordle', userId: userData.id })
          );
          break;
        }
        case 'Tic Tac Toe': {
          dispatch(handleShowTictactoeModal('chart'));
          dispatch(
            actionGetPlayerGameData({
              game: 'Tic Tac Toe',
              userId: userData.id,
            })
          );
          break;
        }
        default:
          break;
      }
    }
  };

  return (
    <button
      className="text-white flex justify-center items-center opacity-100 hover:!opacity-80"
      onClick={handleClickChart}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-9 h-9"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
        />
      </svg>
    </button>
  );
};

export default ButtonChart;
