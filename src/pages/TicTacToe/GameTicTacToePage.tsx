import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeGame } from '~/store/player/player.slice';

const GameTicTacToePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeGame('Tic Tac Toe'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div></div>;
};

export default GameTicTacToePage;
