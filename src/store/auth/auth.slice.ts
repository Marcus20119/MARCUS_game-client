import { createSlice } from '@reduxjs/toolkit';
import { Cookie } from '~/helpers';
import { UserDataType } from '../rootType';

const initialUserData: UserDataType = {
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

const initialState: {
  showAuthModal: boolean;
  authModalType: 'Sign In' | 'Sign Up';
  userData: UserDataType;
  errorMessage: string;
  isSubmitting: boolean;
} = {
  showAuthModal: false,
  authModalType: 'Sign In',
  userData: Cookie.get('userData') || initialUserData,
  errorMessage: '',
  isSubmitting: false,
};

export const authSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    handleShowAuthModal: state => ({
      ...state,
      showAuthModal: true,
    }),
    handleHideAuthModal: state => ({
      ...state,
      showAuthModal: false,
    }),
    changeAuthModalType: (
      state,
      { payload }: { payload: 'Sign In' | 'Sign Up' }
    ) => ({
      ...state,
      authModalType: payload,
    }),

    setUserData: (state, { payload }: { payload: Partial<UserDataType> }) => ({
      ...state,
      userData: { ...state.userData, ...payload },
    }),

    signOut: state => {
      Cookie.remove('accessToken');
      Cookie.remove('refreshToken');
      Cookie.remove('userData');
      return {
        ...state,
        userData: initialUserData,
      };
    },
    setErrorMessage: (state, { payload }: { payload: string }) => ({
      ...state,
      errorMessage: payload,
    }),
    setIsSubmitting: (state, { payload }: { payload: boolean }) => ({
      ...state,
      isSubmitting: payload,
    }),
  },
});

// Action creators are generated for each case reducer function
export const {
  handleShowAuthModal,
  handleHideAuthModal,
  changeAuthModalType,
  setUserData,
  signOut,
  setErrorMessage,
  setIsSubmitting,
} = authSlice.actions;

export default authSlice.reducer;
