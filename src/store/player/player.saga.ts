import { takeLatest } from 'redux-saga/effects';
import { actionSaveWordleResult } from './player.action';
import { handleSaveWordleResult } from './player.handler';

export default function* playerSaga() {
  yield takeLatest(actionSaveWordleResult.type, handleSaveWordleResult);
}
