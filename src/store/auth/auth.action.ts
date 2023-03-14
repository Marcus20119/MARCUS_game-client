import { createAction } from '@reduxjs/toolkit';
import { SignInDataType, SignUpDataType } from './auth.type';

export const actionSignIn = createAction<SignInDataType>('AUTH/SIGN-IN');
export const actionSignUp = createAction<SignUpDataType>('AUTH/SIGN-UP');
