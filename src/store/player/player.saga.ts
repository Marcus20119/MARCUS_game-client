import { takeLatest } from 'redux-saga/effects';
import {
  actionGetPlayerGameData,
  actionSaveWordleResult,
} from './player.action';
import {
  handleGetPlayerGameData,
  handleSaveWordleResult,
} from './player.handler';

export default function* playerSaga() {
  yield takeLatest(actionSaveWordleResult.type, handleSaveWordleResult);
  yield takeLatest(actionGetPlayerGameData.type, handleGetPlayerGameData);
}
