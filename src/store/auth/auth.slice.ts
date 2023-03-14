import { createSlice } from '@reduxjs/toolkit';
import { Cookie } from '~/helpers';
import { UserDataType } from './auth.type';

const initialState: {
  showAuthModal: boolean;
  authModalType: 'Sign In' | 'Sign Up';
  userData: UserDataType;
} = {
  showAuthModal: false,
  authModalType: 'Sign In',
  userData: Cookie.get('userData') || {},
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

    setUserData: (state, { payload }: { payload: UserDataType }) => ({
      ...state,
      userData: { ...state.userData, ...payload },
    }),

    signOut: state => {
      Cookie.remove('accessToken');
      Cookie.remove('refreshToken');
      Cookie.remove('userData');
      return {
        ...state,
        userData: {},
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  handleShowAuthModal,
  handleHideAuthModal,
  changeAuthModalType,
  setUserData,
  signOut,
} = authSlice.actions;

export default authSlice.reducer;
