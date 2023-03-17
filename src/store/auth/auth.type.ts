import { UserDataType } from '../rootType';

export type AuthResponseType = {
  message: string;
  accessToken: string;
  refreshToken: string;
  userData: UserDataType;
};

export type SignInDataType = {
  email: string;
  password: string;
};
export type SignUpDataType = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};
