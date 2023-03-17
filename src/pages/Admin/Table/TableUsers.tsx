import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Paginate from '~/components/Paginate/Paginate';
import { actionGetUsersData } from '~/store/admin/admin.action';
import { UserDataType } from '~/store/rootType';
import { IRootState } from '~/store/rootReducer';
import Filter from './Filter';
import { LoadingCircle } from '~/components/Base/loading/Circle';

const TableUsers = () => {
  const dispatch = useDispatch();
  const { usersData, totalPages, loadingUsersData } = useSelector(
    (state: IRootState) => state.admin
  );

  const [orderField, setOrderField] = useState<keyof UserDataType>('id');
  const [orderType, setOrderType] = useState<'ASC' | 'DESC'>('DESC');
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    dispatch(actionGetUsersData({ page, orderField, orderType }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, orderField, orderType]);
  return (
    <div>
      <div className="flex justify-between items-center w-full mb-4">
        <div>{loadingUsersData && <LoadingCircle />}</div>
        <Filter setOrderField={setOrderField} setOrderType={setOrderType} />
      </div>
      <div className="min-w-full overflow-x-auto">
        <Table striped bordered hover variant="dark" className="h-[1px]">
          <thead>
            <tr>
              <th className="!w-[48px]">#</th>
              <th className="!w-[48px]">id</th>
              <th className="!w-[136px]">First Name</th>
              <th className="!w-[136px]">Last Name</th>
              <th className="!w-[400px]">Email</th>
              <th className="!w-[136px]">Tel.</th>
              <th className="!w-[136px]">Gender</th>
              <th className="!w-[136px]">Role</th>
              <th className="!w-[136px]">Created At</th>
              <th className="!min-w-[148px]">Actions</th>
            </tr>
          </thead>
          <tbody>
            {!loadingUsersData &&
              !!usersData &&
              usersData.length > 0 &&
              usersData.map((userData, index) => (
                <tr key={userData.id}>
                  <td>{10 * (page - 1) + index + 1}</td>
                  <td>{userData.id}</td>
                  <td>{userData.firstName}</td>
                  <td>{userData.lastName}</td>
                  <td title={userData.email}>
                    <span className="line-clamp-1 break-all">
                      {userData.email}
                    </span>
                  </td>
                  <td title={userData.phoneNumber || ''}>
                    {userData.phoneNumber}
                  </td>
                  <td>{userData.gender}</td>
                  <td>{userData.roleId}</td>
                  <td>{userData.createdAt?.toString().split('T')[0] || ''}</td>
                  <td>@mdo</td>
                </tr>
              ))}
            {!loadingUsersData &&
              !!usersData &&
              usersData.length > 0 &&
              usersData.length < 10 &&
              Array(10 - usersData.length)
                .fill('')
                .map((item, index) => (
                  <tr key={`empty-${index}`}>
                    <td>{10 * (page - 1) + usersData.length + index + 1}</td>
                    {Array(9)
                      .fill('')
                      .map((cell, cellIndex) => (
                        <td key={`empty-${index}-${cellIndex}`}></td>
                      ))}
                  </tr>
                ))}
            {loadingUsersData &&
              Array(10)
                .fill('')
                .map((item, index) => (
                  <tr key={`empty-${index}`}>
                    <td>{10 * (page - 1) + index + 1}</td>
                    {Array(9)
                      .fill('')
                      .map((cell, cellIndex) => (
                        <td key={`emptyLoading-${index}-${cellIndex}`}></td>
                      ))}
                  </tr>
                ))}
          </tbody>
        </Table>
      </div>
      <Paginate
        currentPage={page}
        setCurrentPage={setPage}
        totalPage={totalPages}
      />
    </div>
  );
};

export default TableUsers;
