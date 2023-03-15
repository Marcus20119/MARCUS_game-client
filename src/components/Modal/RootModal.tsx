import ModalAuth from './ModalAuth/ModalAuth';
import ModalChartWordle from './ModalWordle/ModalChartWordle';
import ModalHelpWordle from './ModalWordle/ModalHelpWordle';
import ModalLoseWordle from './ModalWordle/ModalLoseWordle';
import ModalWinWordle from './ModalWordle/ModalWinWordle';

const RootModal = () => {
  return (
    <>
      <ModalHelpWordle />
      <ModalWinWordle />
      <ModalLoseWordle />
      <ModalChartWordle />
      <ModalAuth />
    </>
  );
};

export default RootModal;
