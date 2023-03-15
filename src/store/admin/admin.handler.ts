import { call, put } from 'redux-saga/effects';

import { requestGetAllData } from './admin.request';
import { setAdminLoading, setUsersData } from './admin.slice';
import {
  GetAllDataOrderType,
  GetAllDataType,
  UserDataType,
} from './admin.type';

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
    yield put(setUsersData(resData));
  } catch (err) {
    console.log(err);
  } finally {
    yield put(setAdminLoading({ name: 'loadingUsersData', status: false }));
  }
}
