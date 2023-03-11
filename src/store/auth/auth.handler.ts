import { call, put } from 'redux-saga/effects';
import { Cookie } from '~/helpers';
import { requestSignIn, requestSignUp } from './auth.request';
import { setUserData } from './auth.slice';
import { AuthResponseType, SignInData, SignUpData } from './auth.type';

const setAuthCookie = (data: AuthResponseType) => {
  const { accessToken, refreshToken, userData } = data;

  Cookie.set({
    cName: 'accessToken',
    cValue: accessToken,
    exDays: 7,
  });
  Cookie.set({
    cName: 'refreshToken',
    cValue: refreshToken,
    exDays: 7,
  });
  Cookie.set({
    cName: 'userData',
    cValue: userData,
    exDays: 7,
  });
};

export function* handleSignIn(action: { type: string; payload: SignInData }) {
  try {
    const { data } = yield call(requestSignIn, action.payload);
    if (data) {
      setAuthCookie(data);
      yield put(setUserData(data.userData));
    }
  } catch (err) {
    console.log(err);
  }
}
export function* handleSignUp(action: { type: string; payload: SignUpData }) {
  try {
    const { data } = yield call(requestSignUp, action.payload);
    if (data) {
      setAuthCookie(data);
      yield put(setUserData(data.userData));
    }
  } catch (err) {
    console.log(err);
  }
}
