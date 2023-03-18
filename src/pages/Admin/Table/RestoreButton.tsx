import { useDispatch } from 'react-redux';
import { RestoreIcon } from '~/icons';
import {
  handleShowAdminModal,
  setSelectedUserData,
} from '~/store/admin/admin.slice';
import { UserDataType } from '~/store/rootType';

type IRestoreButton = {
  userData: UserDataType;
};

const RestoreButton: React.FC<IRestoreButton> = ({ userData }) => {
  const dispatch = useDispatch();
  return (
    <button
      title="Restore"
      className="flex justify-center items-center w-7 h-7 p-[5px] bg-[#565758] rounded-md cursor-pointer hover:!bg-[#0D9488]"
      onClick={() => {
        dispatch(handleShowAdminModal('showRestoreUserModal'));
        dispatch(setSelectedUserData(userData));
      }}
    >
      <RestoreIcon />
    </button>
  );
};

export default RestoreButton;
