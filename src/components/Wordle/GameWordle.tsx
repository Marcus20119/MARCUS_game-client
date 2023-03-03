import Board from './Board/Board';
import KeyBoard from './KeyBoard/KeyBoard';
import ModalHelpWordle from './ModalWordle/ModalHelpWordle';
import ModalLoseWordle from './ModalWordle/ModalLoseWordle';
import ModalWinWordle from './ModalWordle/ModalWinWordle';

const GameWordle = () => {
  return (
    <>
      <div className="w-screen h-screen flex flex-col justify-center items-center bg-zinc-800">
        <Board />
        <KeyBoard />
      </div>
      <ModalHelpWordle />
      <ModalWinWordle />
      <ModalLoseWordle />
    </>
  );
};

export default GameWordle;
