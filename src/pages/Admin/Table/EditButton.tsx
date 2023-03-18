import { useDispatch } from 'react-redux';
import { WriteIcon } from '~/icons';
import {
  handleShowAdminModal,
  setSelectedUserData,
} from '~/store/admin/admin.slice';
import { UserDataType } from '~/store/rootType';

type IEditButton = {
  userData: UserDataType;
};

const EditButton: React.FC<IEditButton> = ({ userData }) => {
  const dispatch = useDispatch();
  return (
    <button
      title="Edit"
      className="flex justify-center items-center w-7 h-7 p-[5px] bg-[#565758] rounded-md cursor-pointer hover:!bg-[#0D9488]"
      onClick={() => {
        dispatch(handleShowAdminModal('showUpdateUserModal'));
        dispatch(setSelectedUserData(userData));
      }}
    >
      <WriteIcon />
    </button>
  );
};

export default EditButton;
