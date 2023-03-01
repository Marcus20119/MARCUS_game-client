import { createSlice } from '@reduxjs/toolkit';

const initialState: {
  board: string[];
  position: number;
} = {
  board: [
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
  ],
  position: 0,
};

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setBoard: (state, { payload }: { payload: string[] }) => ({
      ...state,
      board: payload,
    }),
    changePosition: (
      state,
      { payload }: { payload: 'increase' | 'decrease' }
    ) => {
      if (payload === 'increase') {
        return { ...state, position: state.position + 1 };
      } else if (payload === 'decrease') {
        return { ...state, position: state.position - 1 };
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { setBoard, changePosition } = mainSlice.actions;

export default mainSlice.reducer;
