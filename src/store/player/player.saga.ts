import { takeLatest } from 'redux-saga/effects';
import {
  actionGetPlayerGameData,
  actionSaveWordleResult,
  actionUpdatePlayerData,
} from './player.action';
import {
  handleGetPlayerGameData,
  handleSaveWordleResult,
  handleUpdatePlayerData,
} from './player.handler';

export default function* playerSaga() {
  yield takeLatest(actionSaveWordleResult.type, handleSaveWordleResult);
  yield takeLatest(actionGetPlayerGameData.type, handleGetPlayerGameData);
  yield takeLatest(actionUpdatePlayerData.type, handleUpdatePlayerData);
}
