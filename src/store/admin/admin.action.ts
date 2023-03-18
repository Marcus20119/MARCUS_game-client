import { createAction } from '@reduxjs/toolkit';
import {
  DeleteUserType,
  GetAllDataOrderType,
  UpdateUserType,
} from './admin.type';

// export const actionGetAllData =
//   createAction<GetAllDataType>('USER/GET-ALL-DATA');

export const actionGetUsersData = createAction<{
  params: GetAllDataOrderType['/g/users'];
  type: 'active' | 'deleted';
}>('ADMIN/GET-USERS-DATA');

export const actionUpdateUserData = createAction<UpdateUserType>(
  'ADMIN/UPDATE-USER-DATA'
);

// export const actionGetSelectedUserData = createAction<number>(
//   'ADMIN/GET-SELECTED-USER-DATA'
// );

export const actionDeleteUser =
  createAction<DeleteUserType>('ADMIN/DELETE-USER');

export const actionRestoreUser = createAction<number>('ADMIN/RESTORE-USER');
