import { createAction } from '@reduxjs/toolkit';
import { GetAllDataOrderType, GetAllDataType } from './admin.type';

export const actionGetAllData =
  createAction<GetAllDataType>('USER/GET-ALL-DATA');

export const actionGetUsersData = createAction<GetAllDataOrderType['/g/users']>(
  'ADMIN/GET-USERS-DATA'
);
