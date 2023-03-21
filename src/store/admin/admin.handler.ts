import { call, put } from 'redux-saga/effects';

import {
  requestGetAllData,
  requestDeleteUser,
  requestUpdateUserData,
  requestRestoreUser,
  requestGetChartData,
} from './admin.request';
import {
  handleForceRerenderUsersData,
  handleHideAdminModal,
  setAdminLoading,
  setChartGridData,
  setChartPipeData,
  setTotalPages,
  setUsersData,
} from './admin.slice';
import {
  ChartResponseDataType,
  ChartType,
  DeleteUserType,
  GetAllDataOrderType,
  UpdateUserType,
} from './admin.type';
import { UserDataType } from '~/store/rootType';

export function* handleGetUsersData(action: {
  type: string;
  payload: {
    params: GetAllDataOrderType['/g/users'];
    type: 'active' | 'deleted';
  };
}) {
  yield put(setAdminLoading({ name: 'loadingUsersData', status: true }));
  try {
    const { data } = yield call(requestGetAllData, {
      url: '/g/users',
      params: action.payload.params,
      type: action.payload.type,
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

export function* handleUpdateUserData(action: {
  type: string;
  payload: UpdateUserType;
}) {
  yield put(setAdminLoading({ name: 'loadingUpdateUser', status: true }));
  try {
    yield call(requestUpdateUserData, action.payload);
  } catch (err) {
    console.log(err);
  } finally {
    yield put(setAdminLoading({ name: 'loadingUpdateUser', status: false }));
    yield put(handleHideAdminModal());
  }
}

export function* handleDeleteUser(action: {
  type: string;
  payload: DeleteUserType;
}) {
  yield put(
    setAdminLoading({
      name:
        action.payload.type === 'soft'
          ? 'loadingSoftDeleteUser'
          : 'loadingHardDeleteUser',
      status: true,
    })
  );
  try {
    yield call(requestDeleteUser, action.payload);
  } catch (err) {
    console.log(err);
  } finally {
    yield put(
      setAdminLoading({
        name:
          action.payload.type === 'soft'
            ? 'loadingSoftDeleteUser'
            : 'loadingHardDeleteUser',
        status: false,
      })
    );
    yield put(handleHideAdminModal());
    yield put(handleForceRerenderUsersData());
  }
}

export function* handleRestoreUser(action: { type: string; payload: number }) {
  yield put(setAdminLoading({ name: 'loadingRestoreUser', status: true }));
  try {
    yield call(requestRestoreUser, action.payload);
  } catch (err) {
    console.log(err);
  } finally {
    yield put(setAdminLoading({ name: 'loadingRestoreUser', status: false }));
    yield put(handleHideAdminModal());
    yield put(handleForceRerenderUsersData());
  }
}

export function* handleGetChartData(action: {
  type: string;
  payload: ChartType;
}) {
  yield put(setAdminLoading({ name: 'loadingGetChartData', status: true }));
  try {
    const { data } = yield call(requestGetChartData, action.payload);
    switch (action.payload) {
      case 'Pipe': {
        const resData: ChartResponseDataType['Pipe'] = data.data;
        yield put(setChartPipeData(resData));
        break;
      }
      case 'Grid-Day':
      case 'Grid-Month':
      case 'Grid-Year': {
        const resData: ChartResponseDataType['Grid'] = data.data;
        console.log('resData:', resData);
        yield put(setChartGridData(resData));
        break;
      }
      default:
        break;
    }
  } catch (err) {
    console.log(err);
  } finally {
    yield put(setAdminLoading({ name: 'loadingGetChartData', status: false }));
  }
}
