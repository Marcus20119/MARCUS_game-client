import { all, fork } from 'redux-saga/effects';
import authSaga from './auth/auth.saga';
import userSaga from './user/user.saga';

export default function* allSagas() {
  yield all([fork(authSaga), fork(userSaga)]);
}
