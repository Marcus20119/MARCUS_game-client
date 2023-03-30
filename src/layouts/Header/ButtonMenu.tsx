import { useState } from 'react';
import { useClickOutSide } from '~/hooks/useClickOutSide';
import SideBar from './Sidebar';

const ButtonMenu = () => {
  const [animationClass, setAnimationClass] = useState('');
  const { nodeRef, setShow, show } = useClickOutSide(() =>
    setAnimationClass('0.7s ease fade-out-to-right forwards')
  );
  const handleToggleSideBar = () => {
    setShow(!show);
    if (
      !animationClass ||
      animationClass === '0.7s ease fade-out-to-right forwards'
    ) {
      setAnimationClass('0.7s ease fade-in-from-right forwards');
    } else if (animationClass === '0.7s ease fade-in-from-right forwards') {
      setAnimationClass('0.7s ease fade-out-to-right forwards');
    }
  };
  const handleHideSideBar = () => {
    setShow(false);
    setAnimationClass('0.7s ease fade-out-to-right forwards');
  };
  return (
    <div ref={nodeRef} className="relative">
      <button
        className="text-white flex justify-center items-center opacity-100 hover:!opacity-80"
        onClick={handleToggleSideBar}
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
      <SideBar
        animationClass={animationClass}
        handleHideSideBar={handleHideSideBar}
      />
    </div>
  );
};

export default ButtonMenu;
