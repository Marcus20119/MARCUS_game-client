import Board from './Board/Board';
import KeyBoard from './KeyBoard/KeyBoard';

const GameWordle = () => {
  return (
    <>
      <div className="w-screen h-screen flex flex-col justify-center items-center bg-zinc-800 z-0">
        <Board />
        <KeyBoard />
      </div>
    </>
  );
};

export default GameWordle;
