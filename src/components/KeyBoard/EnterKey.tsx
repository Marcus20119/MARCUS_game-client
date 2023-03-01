import { keyClass, keyTextClass } from './class';

const EnterKey: React.FC = () => {
  return (
    <button className={`${keyClass} px-[10px]`}>
      <span className={keyTextClass}>Enter</span>
    </button>
  );
};

export default EnterKey;
