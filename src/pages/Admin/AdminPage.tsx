import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Heading } from '~/components/Heading';
import { changeGame } from '~/store/player/player.slice';
import TableUsers from './Table/TableUsers';

const AdminPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeGame(''));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full min-h-screen pt-[64px] px-[24px] bg-zinc-800 z-0">
      <div className="flex flex-col items-start mt-4 w-full">
        <Heading
          as="h2"
          text="User Management"
          className="text-white font-bold text-xl mb-4"
        />
        <TableUsers />
      </div>
    </div>
  );
};

export default AdminPage;
