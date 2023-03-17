import ModalAuth from './ModalAuth/ModalAuth';
import ModalUpdateUser from './ModalUser/ModalUpdateUser';
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
      <ModalUpdateUser />
    </>
  );
};

export default RootModal;
