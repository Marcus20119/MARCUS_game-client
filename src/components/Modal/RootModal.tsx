import ModalAuth from './ModalAuth/ModalAuth';
import ModalHelpWordle from './ModalWordle/ModalHelpWordle';
import ModalLoseWordle from './ModalWordle/ModalLoseWordle';
import ModalWinWordle from './ModalWordle/ModalWinWordle';

const RootModal = () => {
  return (
    <>
      <ModalHelpWordle />
      <ModalWinWordle />
      <ModalLoseWordle />
      <ModalAuth />
    </>
  );
};

export default RootModal;
