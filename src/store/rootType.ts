export type UserDataType = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  roleId: number;
  phoneNumber: string | null;
  avatar: string | null;
  gender: number | null;
  createdAt: Date | null;
  updatedAt: Date | null;
};

export const initialUserData: UserDataType = {
  id: 0,
  firstName: '',
  lastName: '',
  email: '',
  roleId: 0,
  phoneNumber: null,
  avatar: null,
  gender: null,
  createdAt: null,
  updatedAt: null,
};
