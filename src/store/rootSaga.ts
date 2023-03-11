import { all, fork } from 'redux-saga/effects';
import authSaga from './auth/auth.saga';
import playerSaga from './player/player.saga';

export default function* allSagas() {
  yield all([fork(authSaga), fork(playerSaga)]);
}
