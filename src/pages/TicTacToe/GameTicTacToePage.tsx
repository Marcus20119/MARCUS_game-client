import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useChangeTitleWebsite } from '~/hooks';
import {
  handleShowTictactoeModal,
  resetTictactoe,
} from '~/store/game/tictactoe.slice';
import { changeGame } from '~/store/player/player.slice';
import Board from './Board/Board';

const GameTicTacToePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeGame('Tic Tac Toe'));
    dispatch(resetTictactoe());
    dispatch(handleShowTictactoeModal('choose'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useChangeTitleWebsite({
    title: 'Mini Game | Tic-Tac-Toe',
    rerenderCondition: [],
  });
  return (
    <div
      className={`w-screen flex flex-col justify-center items-center bg-zinc-800 z-0 `}
      style={{
        height: '100vh',
        maxHeight: '-webkit-fill-available',
      }}
    >
      <Board />
    </div>
  );
};

export default GameTicTacToePage;
