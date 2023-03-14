import { takeLatest } from 'redux-saga/effects';
import {
  actionGetAllData,
  actionGetDataByUserId,
  actionSaveWordleResult,
} from './user.action';
import {
  handleGetAllData,
  handleGetDataByUserId,
  handleSaveWordleResult,
} from './user.handler';

export default function* userSaga() {
  yield takeLatest(actionSaveWordleResult.type, handleSaveWordleResult);
  yield takeLatest(actionGetAllData.type, handleGetAllData);
  yield takeLatest(actionGetDataByUserId.type, handleGetDataByUserId);
}
