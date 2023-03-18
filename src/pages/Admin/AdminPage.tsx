import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LoadingCircle } from '~/components/Base/loading/Circle';

import { Heading } from '~/components/Heading';
import { changeGame } from '~/store/player/player.slice';
import { IRootState } from '~/store/rootReducer';
import TableManageUsers from './Table/TableManageUsers';

const AdminPage = () => {
  const dispatch = useDispatch();
  const { loadingUsersData } = useSelector((state: IRootState) => state.admin);

  useEffect(() => {
    dispatch(changeGame(''));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full min-h-screen pt-[64px] px-[36px] bg-zinc-800 z-0">
      <div className="flex flex-col items-start mt-4 w-full">
        <div className="inline-flex w-full gap-4">
          <Heading
            as="h2"
            text="User Management"
            className="text-white font-bold text-3xl"
          />
          <div>{loadingUsersData && <LoadingCircle />}</div>
        </div>
        <TableManageUsers />
      </div>
    </div>
  );
};

export default AdminPage;
