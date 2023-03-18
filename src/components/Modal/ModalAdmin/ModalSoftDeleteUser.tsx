import { useDispatch, useSelector } from 'react-redux';
import ModalBase from '~/components/Base/ModalBase';
import { ButtonPrimary } from '~/components/Button';
import { Heading } from '~/components/Heading';
import { actionDeleteUser } from '~/store/admin/admin.action';
import { handleHideAdminModal } from '~/store/admin/admin.slice';
import { IRootState } from '~/store/rootReducer';

const ModalSoftDeleteUser = () => {
  const dispatch = useDispatch();
  const { showSoftDeleteUserModal, loadingSoftDeleteUser, selectedUserData } =
    useSelector((state: IRootState) => state.admin);

  return (
    <ModalBase
      visible={showSoftDeleteUserModal}
      onClose={() => dispatch(handleHideAdminModal())}
    >
      <div
        className={`relative bg-zinc-800 rounded-2xl z-2 transition-all w-[90vw] max-w-[500px] px-8 py-[30px] text-gray-300`}
      >
        <div className="flex flex-col gap-6 w-full">
          <Heading
            as="h2"
            text="YOU SURE ?"
            className="block w-full pb-1 text-4xl font-bold tracking-wide border-b border-b-gray-300"
          />
          <span className="text-xl w-full text-center">
            Do you wanna delete this user ?
          </span>

          <div className="grid grid-cols-2 gap-3 w-full">
            <ButtonPrimary
              isSubmitting={loadingSoftDeleteUser}
              additionalClass="!bg-gray-300 !text-black"
              onClick={() =>
                dispatch(
                  actionDeleteUser({ id: selectedUserData.id, type: 'soft' })
                )
              }
            >
              Delete
            </ButtonPrimary>
            <ButtonPrimary
              additionalClass="!bg-gray-300 !text-black"
              onClick={() => dispatch(handleHideAdminModal())}
            >
              Cancel
            </ButtonPrimary>
          </div>
        </div>
      </div>
    </ModalBase>
  );
};

export default ModalSoftDeleteUser;
