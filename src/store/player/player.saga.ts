import { takeLatest } from 'redux-saga/effects';
import {
  actionGetPlayerGameData,
  actionSaveTictactoeResult,
  actionSaveWordleResult,
  actionUpdatePlayerData,
} from './player.action';
import {
  handleGetPlayerGameData,
  handleSaveTictactoeResult,
  handleSaveWordleResult,
  handleUpdatePlayerData,
} from './player.handler';

export default function* playerSaga() {
  yield takeLatest(actionSaveWordleResult.type, handleSaveWordleResult);
  yield takeLatest(actionSaveTictactoeResult.type, handleSaveTictactoeResult);
  yield takeLatest(actionGetPlayerGameData.type, handleGetPlayerGameData);
  yield takeLatest(actionUpdatePlayerData.type, handleUpdatePlayerData);
}
