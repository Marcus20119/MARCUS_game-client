import { useDispatch } from 'react-redux';
import { ButtonPrimary } from '~/components/Button';
import { useClickOutSide } from '~/hooks/useClickOutSide';
import { showAuthModal } from '~/store/mainSlice';

const ButtonMenu = () => {
  const dispatch = useDispatch();
  const { nodeRef, setShow, show } = useClickOutSide();
  return (
    <div ref={nodeRef} className="relative">
      <button
        className="text-white flex justify-center items-center"
        onClick={() => setShow(!show)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-9 h-9"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      {/* {show && ( */}
      <div
        className={`fixed top-[64px] left-0 bottom-0 w-[250px] gap-[40px] flex flex-col bg-[#323334] py-[40px] px-[20px] text-white border-r border-r-[#454647]`}
        style={{
          animation: !nodeRef.current
            ? '0s ease fade-out-to-right forwards'
            : show
            ? '0.7s ease fade-in-from-right forwards'
            : '0.7s ease fade-out-to-right forwards',
        }}
      >
        <div className="flex flex-col gap-[24px] mt-auto">lalaland</div>
        <ButtonPrimary
          onClick={() => {
            dispatch(showAuthModal());
            setShow(false);
          }}
        >
          Sign In
        </ButtonPrimary>
      </div>
      {/* )} */}
    </div>
  );
};

export default ButtonMenu;
