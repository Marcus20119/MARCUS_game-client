import { useDispatch, useSelector } from 'react-redux';
import { TrashIcon } from '~/icons';
import {
  handleShowAdminModal,
  setSelectedUserData,
} from '~/store/admin/admin.slice';
import { IRootState } from '~/store/rootReducer';
import { UserDataType } from '~/store/rootType';

type IDeleteButton = {
  userData: UserDataType;
};

const DeleteButton: React.FC<IDeleteButton> = ({ userData }) => {
  const dispatch = useDispatch();
  const { userData: yourData } = useSelector((state: IRootState) => state.auth);
  const { usersTab } = useSelector((state: IRootState) => state.admin);
  return (
    <button
      title="Edit"
      className="flex justify-center items-center w-7 h-7 p-[5px] bg-[#565758] rounded-md cursor-pointer hover:!bg-[#0D9488] disabled:hover:!bg-[#565758] disabled:cursor-default"
      onClick={() => {
        dispatch(
          handleShowAdminModal(
            usersTab === 'Active User'
              ? 'showSoftDeleteUserModal'
              : 'showHardDeleteUserModal'
          )
        );
        dispatch(setSelectedUserData(userData));
      }}
      disabled={userData.id === yourData.id}
    >
      <TrashIcon />
    </button>
  );
};

export default DeleteButton;
