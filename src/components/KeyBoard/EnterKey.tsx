import { useDispatch, useSelector } from 'react-redux';
import { setNextRow } from '~/store/mainSlice';
import { IRootState } from '~/store/store';
import { keyClass, keyTextClass } from './class';

const EnterKey: React.FC = () => {
  const dispatch = useDispatch();
  const { row, cursorPosition } = useSelector(
    (state: IRootState) => state.main
  );
  const handleClickEnter = () => {
    // Chặn việc chưa nhập xong hàng mà nhấn Enter
    if (
      cursorPosition % 5 === 0 &&
      cursorPosition !== 0 &&
      cursorPosition / 5 === row + 1
    ) {
      dispatch(setNextRow());
    }
  };

  return (
    <button className={`${keyClass} px-[10px]`} onClick={handleClickEnter}>
      <span className={keyTextClass}>Enter</span>
    </button>
  );
};

export default EnterKey;
