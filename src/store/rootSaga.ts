import { all, fork } from 'redux-saga/effects';
import authSaga from './auth/auth.saga';

export default function* allSagas() {
  yield all([fork(authSaga)]);
}
