import { useSelector } from 'react-redux';
import { Heading } from '~/components/Heading';
import { useResponsive } from '~/hooks';
import { IRootState } from '~/store/rootReducer';
import ButtonChart from './ButtonChart';
import ButtonHelp from './ButtonHelp';
import ButtonMenu from './ButtonMenu';

const Header = () => {
  const { currentGame } = useSelector((state: IRootState) => state.player);
  const { userData } = useSelector((state: IRootState) => state.auth);
  const { isLaptop } = useResponsive();
  return (
    <div
      className={`z-50 fixed top-0 right-0 left-0 h-[64px] bg-zinc-800 px-4 border-b border-b-[#454647] ${
        isLaptop ? 'grid grid-cols-3' : 'flex justify-between'
      }`}
    >
      <div className="inline-flex justify-start items-center">
        <ButtonMenu />
      </div>
      <div className="inline-flex justify-center items-center">
        <Heading
          as="h1"
          text={currentGame || 'Admin Site'}
          className={`text-white font-semibold leading-none mt-1 ${
            isLaptop ? 'text-[2.5rem]' : 'text-[2rem]'
          }`}
        />
      </div>
      {!!currentGame && (
        <div className="inline-flex justify-end items-center gap-3">
          {!!userData?.id && isLaptop && <ButtonChart />}
          <ButtonHelp />
        </div>
      )}
    </div>
  );
};

export default Header;
