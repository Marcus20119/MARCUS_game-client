import { call, put } from 'redux-saga/effects';

import {
  requestGetAllData,
  requestDeleteUser,
  requestUpdateUserData,
  requestRestoreUser,
} from './admin.request';
import {
  handleForceRerenderUsersData,
  handleHideAdminModal,
  setAdminLoading,
  setTotalPages,
  setUsersData,
} from './admin.slice';
import {
  DeleteUserType,
  GetAllDataOrderType,
  UpdateUserType,
} from './admin.type';
import { UserDataType } from '~/store/rootType';

// export function* handleGetAllData(action: {
//   type: string;
//   payload: GetAllDataType;
// }) {
//   try {
//     const { data } = yield call(requestGetAllData, action.payload);
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// }

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

// export function* handleGetSelectedUserData(action: {
//   type: string;
//   payload: number;
// }) {
//   yield put(
//     setAdminLoading({ name: 'loadingGetSelectedUserData', status: true })
//   );
//   try {
//     const { data } = yield call(requestGetSelectedUserData, action.payload);
//     const resData: UserDataType = data.data;
//     yield put(setSelectedUserData(resData));
//   } catch (err) {
//     console.log(err);
//   } finally {
//     yield put(
//       setAdminLoading({ name: 'loadingGetSelectedUserData', status: false })
//     );
//   }
// }

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
