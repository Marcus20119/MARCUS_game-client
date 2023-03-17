import { call, put } from 'redux-saga/effects';
import { Cookie } from '~/helpers';
import { requestSignIn, requestSignUp } from './auth.request';
import {
  handleHideAuthModal,
  setErrorMessage,
  setIsSubmitting,
  setUserData,
} from './auth.slice';
import { AuthResponseType, SignInDataType, SignUpDataType } from './auth.type';

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

export function* handleSignIn(action: {
  type: string;
  payload: SignInDataType;
}) {
  try {
    yield put(setIsSubmitting(true));
    const { data } = yield call(requestSignIn, action.payload);
    if (data) {
      setAuthCookie(data);
      yield put(setErrorMessage(''));
      yield put(setUserData(data.userData));
      yield put(handleHideAuthModal());
    }
  } catch (err: any) {
    console.log(err);
    yield put(setErrorMessage(err?.response?.data?.message));
  } finally {
    yield put(setIsSubmitting(false));
  }
}
export function* handleSignUp(action: {
  type: string;
  payload: SignUpDataType;
}) {
  try {
    yield put(setIsSubmitting(true));
    const { data } = yield call(requestSignUp, action.payload);
    if (data) {
      setAuthCookie(data);
      yield put(setErrorMessage(''));
      yield put(setUserData(data.userData));
      yield put(handleHideAuthModal());
    }
  } catch (err: any) {
    console.log(err);
    yield put(setErrorMessage(err?.response?.data?.message));
  } finally {
    yield put(setIsSubmitting(false));
  }
}
