import { takeLatest } from 'redux-saga/effects';
import { actionGetUsersData } from './admin.action';
import { handleGetUsersData } from './admin.handler';

export default function* adminSaga() {
  yield takeLatest(actionGetUsersData.type, handleGetUsersData);
}
