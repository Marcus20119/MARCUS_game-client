import { createSlice } from '@reduxjs/toolkit';
import { UserDataType } from '../rootType';

const initialState: {
  usersData: UserDataType[] | [];
  totalPages: number;
  loadingUsersData: boolean;
} = {
  usersData: [],
  loadingUsersData: false,
  totalPages: 0,
};

export const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    setAdminLoading: (
      state,
      { payload }: { payload: { name: 'loadingUsersData'; status: boolean } }
    ) => ({
      ...state,
      [payload.name]: payload.status,
    }),
    setUsersData: (state, { payload }: { payload: UserDataType[] }) => ({
      ...state,
      usersData: payload,
    }),
    setTotalPages: (state, { payload }: { payload: number }) => ({
      ...state,
      totalPages: payload,
    }),
  },
});

// Action creators are generated for each case reducer function
export const { setAdminLoading, setUsersData, setTotalPages } =
  adminSlice.actions;

export default adminSlice.reducer;
