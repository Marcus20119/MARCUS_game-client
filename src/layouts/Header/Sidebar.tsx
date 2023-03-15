import { useDispatch, useSelector } from 'react-redux';
import { ButtonPrimary } from '~/components/Button';
import {
  changeAuthModalType,
  handleShowAuthModal,
  signOut,
} from '~/store/auth/auth.slice';
import { resetWordle } from '~/store/game/wordle.slice';
import { IRootState } from '~/store/rootReducer';
import { actionGetPlayerGameData } from '~/store/player/player.action';
import { changeGame, resetPlayerData } from '~/store/player/player.slice';
import { useNavigate } from 'react-router-dom';
import { GameType } from '~/store/player/player.type';

interface ISideBar {
  isMounted: boolean;
  show: boolean;
  setShow: (newState: boolean) => void;
}

const SideBar: React.FC<ISideBar> = ({ isMounted, show, setShow }) => {
  const dispatch = useDispatch();
  const navigateTo = useNavigate();
  const { userData } = useSelector((state: IRootState) => state.auth);

  const gameTabData: {
    name: GameType;
    logoPath: string;
    navigatePath: string;
  }[] = [
    {
      name: 'Wordle',
      logoPath: '/imgs/wordle.png',
      navigatePath: '/wordle',
    },
    {
      name: 'Tic Tac Toe',
      logoPath: '/imgs/tictactoe.png',
      navigatePath: '/tic-tac-toe',
    },
  ];

  return (
    <div
      className={`fixed top-[64px] left-0 bottom-0 w-[250px] gap-[20px] flex flex-col bg-[#323334] py-[40px] px-[20px] text-white border-r border-r-[#454647]`}
      style={{
        animation: !isMounted
          ? '0s ease fade-out-to-right forwards'
          : show
          ? '0.7s ease fade-in-from-right forwards'
          : '0.7s ease fade-out-to-right forwards',
      }}
    >
      {userData?.id && (
        <div
          className="flex flex-col items-center w-full gap-4 border-b border-b-gray-300 pb-4 cursor-pointer opacity-100 hover:opacity-80"
          onClick={() => {}}
        >
          <img
            src={userData?.avatar ? userData.avatar : '/imgs/no-user.jpg'}
            alt={`${userData.id}`}
            className="block w-[112px] h-[112px] rounded-full"
          />
          <span className="font-bold text-xl">{userData.firstName}</span>
        </div>
      )}
      {userData?.id && userData.roleId === 1 && (
        <div
          onClick={() => {
            navigateTo('/admin');
            dispatch(changeGame(''));
            setShow(false);
          }}
          className="flex justify-start items-center w-full gap-4 border-b border-b-gray-300 pb-4 cursor-pointer opacity-100 hover:opacity-80"
        >
          <i className="bx bxs-user text-[48px] "></i>
          <span className="text-xl font-bold">Admin Site</span>
        </div>
      )}
      <div className="flex flex-col items-start w-full gap-5">
        {gameTabData.map(gameTab => (
          <div
            key={gameTab.logoPath}
            onClick={() => {
              navigateTo(gameTab.navigatePath);
              dispatch(changeGame(gameTab.name));
              setShow(false);
            }}
            className="flex justify-start items-center w-full gap-4 cursor-pointer opacity-100 hover:opacity-80"
          >
            <img
              src={gameTab.logoPath}
              alt={gameTab.name}
              className="w-[48px] h-[48px]"
            />
            <span className="text-xl font-bold">{gameTab.name}</span>
          </div>
        ))}
      </div>
      <div className="mt-auto w-full">
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
              dispatch(resetPlayerData());
              setShow(false);
            }}
          >
            Sign Out
          </ButtonPrimary>
        )}
      </div>
    </div>
  );
};

export default SideBar;
