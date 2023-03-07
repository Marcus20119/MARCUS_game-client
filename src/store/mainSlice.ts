import { createSlice } from '@reduxjs/toolkit';

type Game = 'Wordle' | '';

const initialState: {
  currentGame: Game;
  showAuthModal: boolean;
  authType: 'Sign In' | 'Sign Up';
} = {
  currentGame: 'Wordle',
  showAuthModal: false,
  authType: 'Sign In',
};

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    changeGame: (state, { payload }: { payload: Game }) => ({
      ...state,
      currentGame: payload,
    }),
    showAuthModal: state => ({
      ...state,
      showAuthModal: true,
    }),
    hideAuthModal: state => ({
      ...state,
      showAuthModal: false,
    }),
    changeAuthType: (
      state,
      { payload }: { payload: 'Sign In' | 'Sign Up' }
    ) => ({
      ...state,
      authType: payload,
    }),
  },
});

// Action creators are generated for each case reducer function
export const { changeGame, showAuthModal, hideAuthModal, changeAuthType } =
  mainSlice.actions;

export default mainSlice.reducer;
