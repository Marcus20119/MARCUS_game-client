import { createSlice } from '@reduxjs/toolkit';
import { initialUserData, UserDataType } from '../rootType';
import { ChartResponseDataType, UserTabType } from './admin.type';

const initialState: {
  usersTab: UserTabType;
  usersData: UserDataType[] | [];
  totalPages: number;
  loadingUsersData: boolean;
  selectedUserData: UserDataType;
  loadingUpdateUser: boolean;
  loadingSoftDeleteUser: boolean;
  loadingHardDeleteUser: boolean;
  loadingRestoreUser: boolean;

  showUpdateUserModal: boolean;
  showSoftDeleteUserModal: boolean;
  showHardDeleteUserModal: boolean;
  showRestoreUserModal: boolean;

  forceRerenderUsersData: boolean;

  chartPipeData: ChartResponseDataType['Pipe'];
  chartGridData: ChartResponseDataType['Grid'];
  loadingGetChartData: boolean;
} = {
  usersTab: 'Active User',
  usersData: [],
  totalPages: 0,
  loadingUsersData: false,
  selectedUserData: initialUserData,
  loadingUpdateUser: false,
  loadingSoftDeleteUser: false,
  loadingHardDeleteUser: false,
  loadingRestoreUser: false,

  showUpdateUserModal: false,
  showSoftDeleteUserModal: false,
  showHardDeleteUserModal: false,
  showRestoreUserModal: false,

  forceRerenderUsersData: false,

  chartPipeData: [],
  chartGridData: [],
  loadingGetChartData: false,
};

export const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    setAdminLoading: (
      state,
      {
        payload,
      }: {
        payload: {
          name:
            | 'loadingUsersData'
            | 'loadingUpdateUser'
            | 'loadingSoftDeleteUser'
            | 'loadingHardDeleteUser'
            | 'loadingRestoreUser'
            | 'loadingGetChartData';
          status: boolean;
        };
      }
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
    handleShowAdminModal: (
      state,
      {
        payload,
      }: {
        payload:
          | 'showUpdateUserModal'
          | 'showSoftDeleteUserModal'
          | 'showHardDeleteUserModal'
          | 'showRestoreUserModal';
      }
    ) => ({
      ...state,
      [payload]: true,
    }),
    handleHideAdminModal: state => ({
      ...state,
      showUpdateUserModal: false,
      showSoftDeleteUserModal: false,
      showHardDeleteUserModal: false,
      showRestoreUserModal: false,
    }),
    handleForceRerenderUsersData: state => ({
      ...state,
      forceRerenderUsersData: !state.forceRerenderUsersData,
    }),
    setSelectedUserData: (state, { payload }: { payload: UserDataType }) => ({
      ...state,
      selectedUserData: payload,
    }),
    setUsersTab: (state, { payload }: { payload: UserTabType }) => ({
      ...state,
      usersTab: payload,
    }),
    setChartPipeData: (
      state,
      { payload }: { payload: ChartResponseDataType['Pipe'] }
    ) => ({
      ...state,
      chartPipeData: payload,
    }),
    setChartGridData: (
      state,
      { payload }: { payload: ChartResponseDataType['Grid'] }
    ) => ({
      ...state,
      chartGridData: payload,
    }),
  },
});

// Action creators are generated for each case reducer function
export const {
  setAdminLoading,
  setUsersData,
  setTotalPages,
  handleShowAdminModal,
  handleHideAdminModal,
  handleForceRerenderUsersData,
  setSelectedUserData,
  setUsersTab,
  setChartPipeData,
  setChartGridData,
} = adminSlice.actions;

export default adminSlice.reducer;
