import { useDispatch, useSelector } from 'react-redux';
import ModalBase from '~/components/Base/ModalBase';
import { handleHideUpdatePlayerModal } from '~/store/player/player.slice';
import { IRootState } from '~/store/rootReducer';
import UpdatePlayerForm from './UpdatePlayerForm';

const ModalUpdatePlayer = () => {
  const dispatch = useDispatch();
  const { showUpdatePlayerModal } = useSelector(
    (state: IRootState) => state.player
  );
  return (
    <ModalBase
      visible={showUpdatePlayerModal}
      onClose={() => dispatch(handleHideUpdatePlayerModal())}
    >
      <div
        className={`relative bg-zinc-800 rounded-2xl z-2 transition-all w-[90vw] max-w-[500px] px-8 py-[30px] text-gray-300`}
      >
        <UpdatePlayerForm />
      </div>
    </ModalBase>
  );
};

export default ModalUpdatePlayer;
