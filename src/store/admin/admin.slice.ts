import { createSlice } from '@reduxjs/toolkit';
import { initialUserData, UserDataType } from '../rootType';
import { UserTabType } from './admin.type';

const initialState: {
  usersTab: UserTabType;
  usersData: UserDataType[] | [];
  totalPages: number;
  loadingUsersData: boolean;
  // selectedUserId: number;
  selectedUserData: UserDataType;
  // loadingGetSelectedUserData: boolean;
  loadingUpdateUser: boolean;
  loadingSoftDeleteUser: boolean;
  loadingHardDeleteUser: boolean;
  loadingRestoreUser: boolean;

  showUpdateUserModal: boolean;
  showSoftDeleteUserModal: boolean;
  showHardDeleteUserModal: boolean;
  showRestoreUserModal: boolean;

  forceRerenderUsersData: boolean;
} = {
  usersTab: 'Active User',
  usersData: [],
  totalPages: 0,
  loadingUsersData: false,
  // selectedUserId: -1,
  selectedUserData: initialUserData,
  // loadingGetSelectedUserData: false,
  loadingUpdateUser: false,
  loadingSoftDeleteUser: false,
  loadingHardDeleteUser: false,
  loadingRestoreUser: false,

  showUpdateUserModal: false,
  showSoftDeleteUserModal: false,
  showHardDeleteUserModal: false,
  showRestoreUserModal: false,

  forceRerenderUsersData: false,
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
            | 'loadingGetSelectedUserData';
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
    setSelectedUserId: (state, { payload }: { payload: number }) => ({
      ...state,
      selectedUserId: payload,
    }),
    setSelectedUserData: (state, { payload }: { payload: UserDataType }) => ({
      ...state,
      selectedUserData: payload,
    }),
    setUsersTab: (state, { payload }: { payload: UserTabType }) => ({
      ...state,
      usersTab: payload,
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
  setSelectedUserId,
  setSelectedUserData,
  setUsersTab,
} = adminSlice.actions;

export default adminSlice.reducer;
