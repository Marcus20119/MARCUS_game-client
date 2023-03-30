import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useChangeTitleWebsite } from '~/hooks';
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
  useChangeTitleWebsite({
    title: 'Mini Game | Wordle',
    rerenderCondition: [],
  });
  return (
    <div
      className="w-screen flex flex-col justify-center items-center bg-zinc-800 z-0"
      style={{
        height: '100vh',
        maxHeight: '-webkit-fill-available',
      }}
    >
      <Board />
      <KeyBoard />
    </div>
  );
};

export default GameWordlePage;
