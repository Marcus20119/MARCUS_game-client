import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Paginate from '~/components/Paginate/Paginate';
import { actionGetUsersData } from '~/store/admin/admin.action';
import { UserDataType } from '~/store/rootType';
import { IRootState } from '~/store/rootReducer';
import Filter from './Filter';
import TableUsers from './TableUsers';

const TableManageUsers = () => {
  const dispatch = useDispatch();
  const { totalPages, forceRerenderUsersData, usersTab } = useSelector(
    (state: IRootState) => state.admin
  );

  const [orderField, setOrderField] = useState<keyof UserDataType>('id');
  const [orderType, setOrderType] = useState<'ASC' | 'DESC'>('DESC');
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    if (usersTab === 'Active User') {
      dispatch(
        actionGetUsersData({
          params: { page, orderField, orderType },
          type: 'active',
        })
      );
    } else if (usersTab === 'Deleted User') {
      dispatch(
        actionGetUsersData({
          params: { page, orderField, orderType },
          type: 'deleted',
        })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, orderField, orderType, forceRerenderUsersData, usersTab]);

  // Chuyển tab thì trả về trang 1
  useEffect(() => {
    setPage(1);
  }, [usersTab]);

  return (
    <div className="w-full mb-4">
      <div className="flex justify-end items-center w-full mb-4">
        <Filter setOrderField={setOrderField} setOrderType={setOrderType} />
      </div>
      <TableUsers page={page} />
      <Paginate
        currentPage={page}
        setCurrentPage={setPage}
        totalPage={totalPages}
      />
    </div>
  );
};

export default TableManageUsers;
