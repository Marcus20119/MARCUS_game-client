import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { LoadingCircle } from '~/components/Base/loading/Circle';

import { Heading } from '~/components/Heading';
import { useChangeTitleWebsite, useResponsive } from '~/hooks';
import { changeGame } from '~/store/player/player.slice';
import { IRootState } from '~/store/rootReducer';
import Chart from './Chart';
import TableManageUsers from './Table/TableManageUsers';

const AdminPage = () => {
  const dispatch = useDispatch();
  const navigateTo = useNavigate();
  const { loadingUsersData } = useSelector((state: IRootState) => state.admin);
  useEffect(() => {
    dispatch(changeGame(''));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { isLaptop } = useResponsive();
  useEffect(() => {
    if (!isLaptop) {
      navigateTo('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLaptop]);

  useChangeTitleWebsite({ title: 'Mini Game | Admin', rerenderCondition: [] });

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
        <Chart />
      </div>
    </div>
  );
};

export default AdminPage;
