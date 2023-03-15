import { createSlice } from '@reduxjs/toolkit';
import { UserDataType } from './admin.type';

const initialState: {
  usersData: UserDataType[] | [];
  loadingUsersData: boolean;
} = {
  usersData: [],
  loadingUsersData: false,
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
  },
});

// Action creators are generated for each case reducer function
export const { setAdminLoading, setUsersData } = adminSlice.actions;

export default adminSlice.reducer;
