import { call, put } from 'redux-saga/effects';

import { requestGetAllData } from './admin.request';
import { setAdminLoading, setTotalPages, setUsersData } from './admin.slice';
import { GetAllDataOrderType, GetAllDataType } from './admin.type';
import { UserDataType } from '~/store/rootType';

export function* handleGetAllData(action: {
  type: string;
  payload: GetAllDataType;
}) {
  try {
    const { data } = yield call(requestGetAllData, action.payload);
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

export function* handleGetUsersData(action: {
  type: string;
  payload: GetAllDataOrderType['/g/users'];
}) {
  yield put(setAdminLoading({ name: 'loadingUsersData', status: true }));
  try {
    const { data } = yield call(requestGetAllData, {
      url: '/g/users',
      params: action.payload,
    });
    const resData: UserDataType[] = data.data;
    const totalPages: number = data.totalPages;
    yield put(setUsersData(resData));
    yield put(setTotalPages(totalPages));
  } catch (err) {
    console.log(err);
  } finally {
    yield put(setAdminLoading({ name: 'loadingUsersData', status: false }));
  }
}
