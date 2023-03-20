import { createAction } from '@reduxjs/toolkit';
import {
  ChartType,
  DeleteUserType,
  GetAllDataOrderType,
  UpdateUserType,
} from './admin.type';

export const actionGetUsersData = createAction<{
  params: GetAllDataOrderType['/g/users'];
  type: 'active' | 'deleted';
}>('ADMIN/GET-USERS-DATA');

export const actionUpdateUserData = createAction<UpdateUserType>(
  'ADMIN/UPDATE-USER-DATA'
);

export const actionDeleteUser =
  createAction<DeleteUserType>('ADMIN/DELETE-USER');

export const actionRestoreUser = createAction<number>('ADMIN/RESTORE-USER');
export const actionGetChartData = createAction<ChartType>(
  'ADMIN/GET-CHART-DATA'
);
