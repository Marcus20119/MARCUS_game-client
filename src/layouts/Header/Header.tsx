import { useSelector } from 'react-redux';
import { Heading } from '~/components/Heading';
import { IRootState } from '~/store/rootReducer';
import ButtonHelp from './ButtonHelp';
import ButtonMenu from './ButtonMenu';

const Header = () => {
  const { currentGame } = useSelector((state: IRootState) => state.main);
  return (
    <div className="z-10 fixed top-0 right-0 left-0 h-[64px] flex justify-between items-center bg-zinc-800 px-4 border-b border-b-[#454647]">
      <ButtonMenu />
      <Heading
        as="h1"
        text={currentGame}
        className="text-[2.5rem] text-white font-semibold leading-none mt-1"
      />
      <ButtonHelp />
    </div>
  );
};

export default Header;
