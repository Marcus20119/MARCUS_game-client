import { useDispatch, useSelector } from 'react-redux';
import ModalBase from '~/components/Base/ModalBase';
import { IRootState } from '~/store/rootReducer';
import { handleHideTictactoeModal } from '~/store/game/tictactoe.slice';
import { LoadingCircle } from '~/components/Base/loading/Circle';

const ModalChartTictactoe = () => {
  const dispatch = useDispatch();
  const { showChartTictactoeModal } = useSelector(
    (state: IRootState) => state.tictactoe
  );
  const { loadingGameResult, tictactoeResults } = useSelector(
    (state: IRootState) => state.player
  );

  const topData = [
    {
      name: 'Played',
      value: tictactoeResults.nPlay,
    },
    {
      name: 'Win %',
      value: Math.floor(
        ((tictactoeResults.nWinO + tictactoeResults.nWinX) /
          tictactoeResults.nPlay) *
          100
      ),
    },
    {
      name: 'Lose',
      value: tictactoeResults.nLose,
    },
    {
      name: 'Draw',
      value: tictactoeResults.nDraw,
    },
  ];

  const bottomData = [
    {
      name: 'X',
      value: tictactoeResults.nWinX,
    },
    {
      name: 'O',
      value: tictactoeResults.nWinO,
    },
  ];

  return (
    <ModalBase
      visible={showChartTictactoeModal}
      onClose={() => dispatch(handleHideTictactoeModal())}
    >
      <div
        className={`relative bg-zinc-800 rounded-2xl z-2 transition-all w-[90vw] max-w-[500px] px-8 py-[30px] text-gray-300`}
      >
        <h2 className="text-3xl font-bold mb-4">Statistics</h2>
        {loadingGameResult ? (
          <LoadingCircle />
        ) : (
          <div className="flex flex-col items-center w-full">
            <div className="flex justify-between items-center w-full pb-3 border-b border-b-gray-300">
              {topData.map(item => (
                <div
                  key={item.name}
                  className="flex flex-col justify-center items-center w-1/3"
                >
                  <span className="font-bold text-5xl">{item.value}</span>
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col items-start gap-4 w-full">
              <h3 className="text-2xl font-bold mt-4">Mark Distribution</h3>
              <div className="flex flex-col items-start gap-2 w-full">
                {bottomData.map((item, index) => (
                  <div
                    key={`M${index + 1}`}
                    className="flex items-center gap-2 w-full"
                  >
                    <span className="flex justify-center items-center w-[48px] h-[48px] text-3xl font-bold">
                      {item.name}
                    </span>
                    <div className="flex-1 pr-4">
                      <div
                        className="flex items-center justify-start pl-4 text-lg bg-[#565758] border-[#565758] h-[48px] rounded-md"
                        style={{
                          width: `${Math.floor(
                            (item.value * 100) /
                              Math.max(
                                tictactoeResults.nWinO,
                                tictactoeResults.nWinX
                              )
                          )}%`,
                          minWidth: '48px',
                        }}
                      >
                        {item.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        <button
          className="close-modal absolute top-5 right-5 text-[1.75rem] hover:!opacity-70"
          onClick={() => dispatch(handleHideTictactoeModal())}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </ModalBase>
  );
};

export default ModalChartTictactoe;
