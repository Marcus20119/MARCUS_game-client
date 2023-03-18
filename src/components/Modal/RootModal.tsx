import ModalAuth from './ModalAuth/ModalAuth';
import ModalChartWordle from './ModalWordle/ModalChartWordle';
import ModalHelpWordle from './ModalWordle/ModalHelpWordle';
import ModalLoseWordle from './ModalWordle/ModalLoseWordle';
import ModalWinWordle from './ModalWordle/ModalWinWordle';
import ModalUpdatePlayer from './ModalPlayer/ModalUpdatePlayer';
import ModalUpdateUser from './ModalAdmin/ModalUpdateUser';
import ModalSoftDeleteUser from './ModalAdmin/ModalSoftDeleteUser';
import ModalHardDeleteUser from './ModalAdmin/ModalHardDeleteUser';
import ModalRestoreUser from './ModalAdmin/ModalRestoreUser';
import ModalWinTictactoe from './ModalTictactoe/ModalWinTictactoe';
import ModalLoseTictactoe from './ModalTictactoe/ModalLoseTictactoe';
import ModalDrawTictactoe from './ModalTictactoe/ModalDrawTictactoe';
import ModalHelpTictactoe from './ModalTictactoe/ModalHelpTictactoe';
import ModalChooseTictactoe from './ModalTictactoe/ModalChooseTictactoe';
import ModalChartTictactoe from './ModalTictactoe/ModalChartTictactoe';

const RootModal = () => {
  return (
    <>
      <ModalHelpWordle />
      <ModalChartWordle />
      <ModalWinWordle />
      <ModalLoseWordle />

      <ModalWinTictactoe />
      <ModalLoseTictactoe />
      <ModalDrawTictactoe />
      <ModalHelpTictactoe />
      <ModalChooseTictactoe />
      <ModalChartTictactoe />

      <ModalAuth />

      <ModalUpdatePlayer />

      <ModalUpdateUser />
      <ModalSoftDeleteUser />
      <ModalHardDeleteUser />
      <ModalRestoreUser />
    </>
  );
};

export default RootModal;
