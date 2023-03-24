import { takeEvery, takeLatest } from 'redux-saga/effects';
import {
  actionGetUsersData,
  actionDeleteUser,
  actionUpdateUserData,
  actionRestoreUser,
  actionGetChartData,
} from './admin.action';
import {
  handleGetUsersData,
  handleDeleteUser,
  handleUpdateUserData,
  handleRestoreUser,
  handleGetChartData,
} from './admin.handler';

export default function* adminSaga() {
  yield takeLatest(actionGetUsersData.type, handleGetUsersData);
  yield takeLatest(actionUpdateUserData.type, handleUpdateUserData);
  yield takeLatest(actionDeleteUser.type, handleDeleteUser);
  yield takeLatest(actionRestoreUser.type, handleRestoreUser);
  yield takeEvery(actionGetChartData.type, handleGetChartData);
}
