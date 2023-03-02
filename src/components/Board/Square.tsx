import { motion, Variants } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '~/store/store';

type ISquare = {
  val: string;
  squareIdx: number;
};

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

const Square: React.FC<ISquare> = ({ val, squareIdx }) => {
  const dispatch = useDispatch();
  const { correctWord, cursorPosition, row } = useSelector(
    (state: IRootState) => state.main
  );

  const [status, setStatus] = useState<'correct' | 'almost' | 'wrong' | null>(
    null
  );

  useEffect(() => {
    if (val && Math.floor(squareIdx / 5) + 1 === row) {
      if (correctWord[squareIdx % 5].toUpperCase() === val) {
        console.log('correct');
        setStatus('correct');
      } else if (correctWord.toUpperCase().includes(val)) {
        setStatus('almost');
      } else {
        setStatus('wrong');
      }
    }
  }, [correctWord, row, squareIdx, val]);

  return (
    <motion.div animate={val ? 'filled' : 'unfilled'} variants={variants}>
      <div
        className={`flex justify-center items-center h-[48px] w-[48px] border-2 rounded-sm 
        ${val ? 'border-[#565758]' : 'border-[#3A3A3C]'} 
        ${status === 'correct' && 'bg-emerald-600 border-emerald-600'} 
        ${status === 'almost' && 'bg-amber-300 border-amber-300'} 
        ${status === 'wrong' && 'bg-[#565758] border-[#565758]'}`}
        style={{
          animation: status ? 'flip 2s cubic-bezier(0.4, 0, 0.2, 1)' : '',
        }}
      >
        <span className="text-white font-bold text-xl leading-none mt-[2px]">
          {val}
        </span>
      </div>
    </motion.div>
  );
};

export default Square;
