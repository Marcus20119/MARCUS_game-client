import { createSlice } from '@reduxjs/toolkit';
import { GameType, WordleResultResponseType } from './player.type';

type NeededWordleResultType = Omit<
  WordleResultResponseType,
  'id' | 'updatedAt' | 'createdAt' | 'userId'
>;

const initialState: {
  currentGame: GameType;
  wordleResults: NeededWordleResultType;
  loadingWordleResult: boolean;
} = {
  currentGame: 'Wordle',
  wordleResults: {
    nPlay: 0,
    nLose: 0,
    nWinR1: 0,
    nWinR2: 0,
    nWinR3: 0,
    nWinR4: 0,
    nWinR5: 0,
    nWinR6: 0,
  },
  loadingWordleResult: false,
};

export const playerSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    changeGame: (state, { payload }: { payload: GameType }) => ({
      ...state,
      currentGame: payload,
    }),
    setWordleResults: (
      state,
      { payload }: { payload: Partial<NeededWordleResultType> }
    ) => ({
      ...state,
      wordleResults: { ...state.wordleResults, ...payload },
    }),
    resetPlayerData: state => initialState,
    setPlayerLoading: (
      state,
      { payload }: { payload: { name: 'loadingWordleResult'; status: boolean } }
    ) => ({
      ...state,
      [payload.name]: payload.status,
    }),
  },
});

// Action creators are generated for each case reducer function
export const {
  changeGame,
  setWordleResults,
  resetPlayerData,
  setPlayerLoading,
} = playerSlice.actions;

export default playerSlice.reducer;
