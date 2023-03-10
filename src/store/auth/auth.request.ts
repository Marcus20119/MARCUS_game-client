import { privateAxios } from '~/axiosConfig';
import { SignInData, SignUpData } from './auth.type';

export function requestSignIn(payload: SignInData) {
  return privateAxios.request({
    method: 'POST',
    url: '/auth/sign-in',
    data: payload,
  });
}
export function requestSignUp(payload: SignUpData) {
  return privateAxios.request({
    method: 'POST',
    url: '/auth/sign-up',
    data: payload,
  });
}
