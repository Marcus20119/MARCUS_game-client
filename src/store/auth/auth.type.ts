export type UserData = {
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
  userData: UserData;
};

export type SignInData = {
  email: string;
  password: string;
};
export type SignUpData = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};
