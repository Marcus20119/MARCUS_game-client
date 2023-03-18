import { useDispatch, useSelector } from 'react-redux';
import ModalBase from '~/components/Base/ModalBase';
import { handleHideAdminModal } from '~/store/admin/admin.slice';
import { IRootState } from '~/store/rootReducer';
import UpdateUserForm from './UpdateUserForm';

const ModalUpdateUser = () => {
  const dispatch = useDispatch();
  const { showUpdateUserModal } = useSelector(
    (state: IRootState) => state.admin
  );
  return (
    <ModalBase
      visible={showUpdateUserModal}
      onClose={() => dispatch(handleHideAdminModal())}
    >
      <div
        className={`relative bg-zinc-800 rounded-2xl z-2 transition-all w-[90vw] max-w-[500px] px-8 py-[30px] text-gray-300`}
      >
        <UpdateUserForm />
      </div>
    </ModalBase>
  );
};

export default ModalUpdateUser;
