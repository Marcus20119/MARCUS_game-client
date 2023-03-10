import { createSlice } from '@reduxjs/toolkit';

type Game = 'Wordle' | '';

const initialState: {
  currentGame: Game;
} = {
  currentGame: 'Wordle',
};

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    changeGame: (state, { payload }: { payload: Game }) => ({
      ...state,
      currentGame: payload,
    }),
  },
});

// Action creators are generated for each case reducer function
export const { changeGame } = mainSlice.actions;

export default mainSlice.reducer;
