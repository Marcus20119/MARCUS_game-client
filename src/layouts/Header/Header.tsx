import { useSelector } from 'react-redux';
import { Heading } from '~/components/Heading';
import { IRootState } from '~/store/rootReducer';
import ButtonChart from './ButtonChart';
import ButtonHelp from './ButtonHelp';
import ButtonMenu from './ButtonMenu';

const Header = () => {
  const { currentGame } = useSelector((state: IRootState) => state.player);
  const { userData } = useSelector((state: IRootState) => state.auth);
  return (
    <div className="z-10 fixed top-0 right-0 left-0 h-[64px] grid grid-cols-3 bg-zinc-800 px-4 border-b border-b-[#454647]">
      <div className="inline-flex justify-start items-center">
        <ButtonMenu />
      </div>
      <div className="inline-flex justify-center items-center">
        <Heading
          as="h1"
          text={currentGame || 'Admin Site'}
          className="text-[2.5rem] text-white font-semibold leading-none mt-1"
        />
      </div>
      {currentGame && (
        <div className="inline-flex justify-end items-center gap-3">
          {userData?.id && <ButtonChart />}
          <ButtonHelp />
        </div>
      )}
    </div>
  );
};

export default Header;
