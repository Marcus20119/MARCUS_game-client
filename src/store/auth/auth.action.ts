import { createAction } from '@reduxjs/toolkit';
import { SignInData, SignUpData } from './auth.type';

export const actionSignIn = createAction<SignInData>('AUTH/SIGN-IN');
export const actionSignUp = createAction<SignUpData>('AUTH/SIGN-UP');
