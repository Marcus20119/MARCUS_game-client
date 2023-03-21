import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setUsersTab } from '~/store/admin/admin.slice';
import { UserTabType } from '~/store/admin/admin.type';
import { IRootState } from '~/store/rootReducer';
import DeleteButton from './DeleteButton';
import EditButton from './EditButton';
import RestoreButton from './RestoreButton';

type ITableUsers = {
  page: number;
};

const tableTabs: UserTabType[] = ['Active User', 'Deleted User'];

const TableUsers: React.FC<ITableUsers> = ({ page }) => {
  const dispatch = useDispatch();
  const { usersData, loadingUsersData, usersTab } = useSelector(
    (state: IRootState) => state.admin
  );
  return (
    <div className="relative w-full z-10">
      <div className="absolute left-0 bottom-full">
        {tableTabs.map((tab, index) => (
          <span
            key={tab}
            className={`relative inline-block px-3 py-[6px] text-white rounded-t-md transition-all cursor-pointer border !border-[#373B3E] ${
              tab === usersTab
                ? 'bg-[#0D9488] opacity-100 shadow-xl'
                : 'bg-[#565758] opacity-80 hover:opacity-100'
            }`}
            style={{
              zIndex: `${tab === usersTab ? '10' : '5'}`,
              transform: `translateX(-${index * 8}px)`,
            }}
            onClick={() => dispatch(setUsersTab(tab))}
          >
            {tab}
          </span>
        ))}
      </div>
      <Table striped bordered hover variant="dark" className="h-[1px] w-full">
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
            <th className="">Actions</th>
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
                <td>
                  <div className="flex items-center justify-start pl-3 gap-3 w-full">
                    {usersTab === 'Active User' && (
                      <>
                        <EditButton userData={userData} />
                        <DeleteButton userData={userData} />
                      </>
                    )}
                    {usersTab === 'Deleted User' && (
                      <>
                        <RestoreButton userData={userData} />
                        <DeleteButton userData={userData} />
                      </>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          {!loadingUsersData &&
            !!usersData &&
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
          {(loadingUsersData || !usersData) &&
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
  );
};

export default TableUsers;
