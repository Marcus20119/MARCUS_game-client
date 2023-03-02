import { createSlice } from '@reduxjs/toolkit';

const initialState: {
  board: string[];
  cursorPosition: number;
  row: number;
  correctWord: string;
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
  cursorPosition: 0,
  row: 0,
  correctWord: 'DICKS',
};

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setBoard: (state, { payload }: { payload: string[] }) => ({
      ...state,
      board: payload,
    }),
    changeCursorPosition: (
      state,
      { payload }: { payload: 'increase' | 'decrease' }
    ) => {
      const newCursorPosition: number =
        payload === 'increase'
          ? state.cursorPosition + 1
          : state.cursorPosition - 1;
      return {
        ...state,
        cursorPosition: newCursorPosition,
      };
    },
    setNextRow: state => ({
      ...state,
      row: state.row + 1,
    }),
  },
});

// Action creators are generated for each case reducer function
export const { setBoard, changeCursorPosition, setNextRow } = mainSlice.actions;

export default mainSlice.reducer;
