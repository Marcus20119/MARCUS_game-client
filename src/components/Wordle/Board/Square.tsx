import { motion, Variants } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { IRootState } from '~/store/store';

const variants: Variants | undefined = {
  filled: () => ({
    scale: [1.15, 1],
    transition: {
      duration: 0.2,
    },
  }),
  unfilled: () => ({
    scale: [1.15, 1],
    transition: {
      duration: 0.2,
    },
  }),
};

type ISquare = {
  val: string;
  squareIdx: number;
  forceClass?: string;
};

const Square: React.FC<ISquare> = ({ val, squareIdx, forceClass = '' }) => {
  const { correctWord, currentRow, isAnswerValid } = useSelector(
    (state: IRootState) => state.wordle
  );

  const [status, setStatus] = useState<'correct' | 'almost' | 'wrong' | null>(
    null
  );

  useEffect(() => {
    if (val && Math.floor(squareIdx / 5) + 1 === currentRow) {
      if (correctWord[squareIdx % 5].toUpperCase() === val) {
        setStatus('correct');
      } else if (correctWord.toUpperCase().includes(val)) {
        setStatus('almost');
      } else {
        setStatus('wrong');
      }
    } else if (!val) {
      setStatus(null);
    }
  }, [correctWord, currentRow, squareIdx, val]);

  // Xử lý thay đổi màu sắc cho square
  const squareRef = useRef(null);
  useEffect(() => {
    if (squareRef.current) {
      const squareElement = squareRef.current as HTMLDivElement;
      let newClass: string[] = [];
      switch (status) {
        case 'correct': {
          newClass = ['bg-emerald-600', 'border-emerald-600'];
          break;
        }
        case 'almost': {
          newClass = ['bg-amber-300', 'border-amber-300'];
          break;
        }
        case 'wrong': {
          newClass = ['bg-[#565758]', 'border-[#565758]'];
          break;
        }
        default:
          newClass = [];
      }
      setTimeout(() => {
        squareElement.classList.add(...newClass);
      }, (squareIdx % 5) * 200 + 500);
    }
  }, [squareIdx, status]);

  // Xử lý shaking
  const [isNeededShake, setIsNeededShake] = useState<boolean>(false);
  useEffect(() => {
    setIsNeededShake(
      Math.floor(squareIdx / 5) === currentRow && !isAnswerValid
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAnswerValid]);

  return (
    <motion.div animate={val ? 'filled' : 'unfilled'} variants={variants}>
      <div
        ref={squareRef}
        className={`flex justify-center items-center h-[48px] w-[48px] border-2 rounded-sm ${
          val ? 'border-[#565758]' : 'border-[#3A3A3C]'
        } ${forceClass}`}
        style={{
          animation: status
            ? `2s cubic-bezier(0.4, 0, 0.2, 1) ${(squareIdx % 5) * 200}ms flip`
            : isNeededShake
            ? '1s cubic-bezier(0.4, 0, 0.2, 1) shake'
            : '',
          WebkitAnimation: status
            ? `2s cubic-bezier(0.4, 0, 0.2, 1) ${(squareIdx % 5) * 200}ms flip`
            : isNeededShake
            ? '1s cubic-bezier(0.4, 0, 0.2, 1) shake'
            : '',
        }}
      >
        <div className="text-white font-bold mt-[2px] text-[19px]">{val}</div>
      </div>
    </motion.div>
  );
};

export default Square;
