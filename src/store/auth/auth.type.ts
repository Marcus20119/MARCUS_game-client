export type UserDataType = {
  id?: number | null;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  roleId?: number | null;
  phoneNumber?: string | null;
  gender?: boolean | null;
  createdAt?: Date | null;
  updatedAt?: Date | null;
};

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
