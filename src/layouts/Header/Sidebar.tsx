import { useDispatch, useSelector } from 'react-redux';
import { ButtonPrimary } from '~/components/Button';
import {
  changeAuthModalType,
  handleShowAuthModal,
  signOut,
} from '~/store/auth/auth.slice';
import { IRootState } from '~/store/rootReducer';
import {
  actionGetAllData,
  actionGetDataByUserId,
} from '~/store/user/user.action';
import { resetWordle } from '~/store/wordle.slice';

interface ISideBar {
  isMounted: boolean;
  show: boolean;
  setShow: (newState: boolean) => void;
}

const SideBar: React.FC<ISideBar> = ({ isMounted, show, setShow }) => {
  const dispatch = useDispatch();
  const { userData } = useSelector((state: IRootState) => state.auth);

  return (
    <div
      className={`fixed top-[64px] left-0 bottom-0 w-[250px] gap-[40px] flex flex-col bg-[#323334] py-[40px] px-[20px] text-white border-r border-r-[#454647]`}
      style={{
        animation: !isMounted
          ? '0s ease fade-out-to-right forwards'
          : show
          ? '0.7s ease fade-in-from-right forwards'
          : '0.7s ease fade-out-to-right forwards',
      }}
    >
      <div className="flex flex-col gap-[24px] mt-auto">lalaland</div>

      <ButtonPrimary
        onClick={() => {
          if (userData?.id) {
            dispatch(
              actionGetDataByUserId({ url: '/g/wordle', userId: userData.id })
            );
          }
        }}
      >
        Get Data
      </ButtonPrimary>

      {!userData?.email ? (
        <ButtonPrimary
          onClick={() => {
            dispatch(changeAuthModalType('Sign In'));
            dispatch(handleShowAuthModal());
            setShow(false);
          }}
        >
          Sign In
        </ButtonPrimary>
      ) : (
        <ButtonPrimary
          onClick={() => {
            dispatch(signOut());
            dispatch(resetWordle());
            setShow(false);
          }}
        >
          Sign Out
        </ButtonPrimary>
      )}
    </div>
  );
};

export default SideBar;
