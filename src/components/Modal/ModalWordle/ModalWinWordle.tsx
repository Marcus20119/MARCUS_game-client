import { useDispatch, useSelector } from 'react-redux';
import ModalBase from '~/components/Base/ModalBase';
import { IRootState } from '~/store/store';
import { hideWordleModal } from '~/store/wordleSlice';

const ModalWinWordle = () => {
  const dispatch = useDispatch();
  const { showWinModal, correctWord } = useSelector(
    (state: IRootState) => state.wordle
  );

  return (
    <ModalBase
      visible={showWinModal}
      onClose={() => dispatch(hideWordleModal())}
    >
      <div
        className={`relative bg-zinc-800 rounded-2xl z-2 transition-all w-[90vw] max-w-[500px] px-8 py-[30px] text-gray-300`}
      >
        <h2 className="text-3xl font-bold mb-2">🥳 You Win!</h2>
        <h3 className="text-lg mb-1">
          The correct answer is:{' '}
          <strong className="text-emerald-600">
            {correctWord.toUpperCase()}
          </strong>
        </h3>

        <button
          className="close-modal absolute top-5 right-5 text-[1.75rem] hover:opacity-70"
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

export default ModalWinWordle;
