import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';

import { Heading } from '~/components/Heading';
import { actionGetUsersData } from '~/store/admin/admin.action';
import { IRootState } from '~/store/rootReducer';
import Filter from './Filter';
import { UserDataType } from '~/store/admin/admin.type';

const AdminPage = () => {
  const dispatch = useDispatch();
  const { usersData } = useSelector((state: IRootState) => state.admin);

  const [orderField, setOrderField] = useState<keyof UserDataType>('id');
  const [orderType, setOrderType] = useState<'ASC' | 'DESC'>('DESC');

  useEffect(() => {
    dispatch(actionGetUsersData({ page: 1, orderField, orderType }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orderField, orderType]);

  return (
    <div className="w-screen min-h-screen pt-[64px] px-[24px] bg-zinc-800 z-0">
      <div className="flex flex-col items-start gap-4 mt-4">
        <Heading
          as="h2"
          text="User Management"
          className="text-white font-bold text-xl"
        />
        <div>
          <Filter />
        </div>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Tel.</th>
              <th>Gender</th>
              <th>Role</th>
              <th>Created At</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {!!usersData &&
              usersData.length > 0 &&
              usersData.map((userData, index) => (
                <tr key={userData.id}>
                  <td>{index}</td>
                  <td>{userData.id}</td>
                  <td>{userData.firstName}</td>
                  <td>{userData.lastName}</td>
                  <td>{userData.email}</td>
                  <td>{userData.phoneNumber}</td>
                  <td>{userData.gender}</td>
                  <td>{userData.roleId}</td>
                  <td>{userData.createdAt?.toString().split('T')[0] || ''}</td>
                  <td>@mdo</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default AdminPage;
