import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
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
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-zinc-800 z-0">
      <Board />
    </div>
  );
};

export default GameTicTacToePage;
