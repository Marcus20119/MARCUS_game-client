import { useDispatch, useSelector } from 'react-redux';
import ModalBase from '~/components/Base/ModalBase';
import { hideAuthModal } from '~/store/mainSlice';
import { IRootState } from '~/store/store';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

const ModalAuth = () => {
  const dispatch = useDispatch();
  const { showAuthModal, authType } = useSelector(
    (state: IRootState) => state.main
  );
  return (
    <ModalBase
      visible={showAuthModal}
      onClose={() => dispatch(hideAuthModal())}
    >
      <div
        className={`relative bg-zinc-800 rounded-2xl z-2 transition-all w-[90vw] max-w-[500px] px-8 py-[30px] text-gray-300`}
      >
        {authType === 'Sign In' && <SignInForm />}
        {authType === 'Sign Up' && <SignUpForm />}
      </div>
    </ModalBase>
  );
};

export default ModalAuth;
