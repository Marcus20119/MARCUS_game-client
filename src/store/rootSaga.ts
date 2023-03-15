import { all, fork } from 'redux-saga/effects';
import adminSaga from './admin/admin.saga';
import authSaga from './auth/auth.saga';
import playerSaga from './player/player.saga';

export default function* allSagas() {
  yield all([fork(authSaga), fork(playerSaga), fork(adminSaga)]);
}
