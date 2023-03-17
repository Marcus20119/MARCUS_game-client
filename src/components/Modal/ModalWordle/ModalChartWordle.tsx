import { useDispatch, useSelector } from 'react-redux';
import ModalBase from '~/components/Base/ModalBase';
import { IRootState } from '~/store/rootReducer';
import { hideWordleModal } from '~/store/game/wordle.slice';
import { LoadingCircle } from '~/components/Base/loading/Circle';

const ModalChartWordle = () => {
  const dispatch = useDispatch();
  const { showChartModal } = useSelector((state: IRootState) => state.wordle);
  const { loadingWordleResult, wordleResults } = useSelector(
    (state: IRootState) => state.player
  );

  const topData = [
    {
      name: 'Played',
      value: wordleResults.nPlay,
    },
    {
      name: 'Win %',
      value: Math.floor(
        ((wordleResults.nPlay - wordleResults.nLose) / wordleResults.nPlay) *
          100
      ),
    },
    {
      name: 'Lose',
      value: wordleResults.nLose,
    },
  ];

  const { nLose, nPlay, ...bottomData } = wordleResults;

  return (
    <ModalBase
      visible={showChartModal}
      onClose={() => dispatch(hideWordleModal())}
    >
      <div
        className={`relative bg-zinc-800 rounded-2xl z-2 transition-all w-[90vw] max-w-[500px] px-8 py-[30px] text-gray-300`}
      >
        <h2 className="text-3xl font-bold mb-4">Statistics</h2>
        {loadingWordleResult ? (
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
              <h3 className="text-2xl font-bold mt-4">Guess Distribution</h3>
              <div className="flex flex-col items-start gap-2 w-full">
                {Object.values(bottomData).map((item, index) => (
                  <div
                    key={`R${index + 1}`}
                    className="flex items-center gap-2 w-full"
                  >
                    <span className="flex justify-center items-center w-[48px] h-[48px] text-3xl font-bold">
                      {index + 1}
                    </span>
                    <div className="flex-1 pr-4">
                      <div
                        className="flex items-center justify-start pl-4 text-lg bg-[#565758] border-[#565758] h-[48px] rounded-md"
                        style={{
                          width: `${Math.floor(
                            (item * 100) /
                              Math.max(...Object.values(bottomData))
                          )}%`,
                          minWidth: '48px',
                        }}
                      >
                        {item}
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
          onClick={() => dispatch(hideWordleModal())}
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

export default ModalChartWordle;
