import { useDispatch, useSelector } from 'react-redux';
import ModalBase from '~/components/Base/ModalBase';
import { handleHideAuthModal } from '~/store/auth/auth.slice';
import { IRootState } from '~/store/store';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

const ModalAuth = () => {
  const dispatch = useDispatch();
  const { showAuthModal, authModalType } = useSelector(
    (state: IRootState) => state.auth
  );
  return (
    <ModalBase
      visible={showAuthModal}
      onClose={() => dispatch(handleHideAuthModal())}
    >
      <div
        className={`relative bg-zinc-800 rounded-2xl z-2 transition-all w-[90vw] max-w-[500px] px-8 py-[30px] text-gray-300`}
      >
        {authModalType === 'Sign In' && <SignInForm />}
        {authModalType === 'Sign Up' && <SignUpForm />}
      </div>
    </ModalBase>
  );
};

export default ModalAuth;
