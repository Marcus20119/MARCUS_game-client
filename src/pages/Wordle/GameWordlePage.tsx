import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { resetWordle } from '~/store/game/wordle.slice';
import { changeGame } from '~/store/player/player.slice';
import Board from './Board/Board';
import KeyBoard from './KeyBoard/KeyBoard';

const GameWordlePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeGame('Wordle'));
    dispatch(resetWordle());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-zinc-800 z-0">
      <Board />
      <KeyBoard />
    </div>
  );
};

export default GameWordlePage;
