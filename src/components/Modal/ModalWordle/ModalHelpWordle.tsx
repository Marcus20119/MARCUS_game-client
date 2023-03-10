import { useDispatch, useSelector } from 'react-redux';
import ModalBase from '~/components/Base/ModalBase';
import Square from '~/components/Wordle/Board/Square';
import { IRootState } from '~/store/store';
import { hideWordleModal } from '~/store/wordle.slice';

const ModalHelpWordle = () => {
  const dispatch = useDispatch();
  const { showHelpModal } = useSelector((state: IRootState) => state.wordle);

  const exampleList: {
    word: string;
    mainLetter: string;
    letterClassName: string;
    description: string;
  }[] = [
    {
      word: 'WEARY',
      mainLetter: 'W',
      letterClassName: 'bg-emerald-600 border-emerald-600',
      description: 'is in the word and in the correct spot',
    },
    {
      word: 'PILLS',
      mainLetter: 'I',
      letterClassName: 'bg-amber-300 border-amber-300',
      description: 'is in the word but in the wrong spot',
    },
    {
      word: 'VAGUE',
      mainLetter: 'U',
      letterClassName: 'bg-[#565758] border-[#565758]',
      description: 'is not in the word in any spot',
    },
  ];
  return (
    <ModalBase
      visible={showHelpModal}
      onClose={() => dispatch(hideWordleModal())}
    >
      <div
        className={`relative bg-zinc-800 rounded-2xl z-2 transition-all w-[90vw] max-w-[500px] px-8 py-[30px] text-gray-300`}
      >
        <h2 className="text-3xl font-bold mb-2">How To Play</h2>
        <h3 className="text-lg mb-1">Guess the Wordle in 6 tries.</h3>
        <ul className="ml-5">
          <li className="!list-disc">
            Each guess must be a valid 5-letter word.
          </li>
          <li className="!list-disc">
            The color of the tiles will change to show how close your guess was
            to the word.
          </li>
        </ul>
        <h4 className="text-lg mb-1 mt-3">Examples</h4>

        <div className="flex flex-col items-start gap-2">
          {exampleList.map((example, exampleIndex) => (
            <div
              key={example.word}
              className="flex flex-col justify-start items-start gap-2"
            >
              <div className="inline-flex justify-start items-center gap-[0.35rem]">
                {example.word.split('').map((letter, index) => (
                  <Square
                    key={`${letter}-${exampleIndex}-${index}`}
                    val={letter}
                    squareIdx={index}
                    forceClass={
                      letter === example.mainLetter
                        ? example.letterClassName
                        : ''
                    }
                  />
                ))}
              </div>
              <span className="text-sm">
                <strong>{example.mainLetter}</strong> {example.description}
              </span>
            </div>
          ))}
        </div>

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

export default ModalHelpWordle;
