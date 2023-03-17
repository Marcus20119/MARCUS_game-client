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
  showUpdatePlayerModal: boolean;
  loadingUpdatePlayer: boolean;
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
  showUpdatePlayerModal: false,
  loadingUpdatePlayer: false,
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
      {
        payload,
      }: {
        payload: {
          name: 'loadingWordleResult' | 'loadingUpdatePlayer';
          status: boolean;
        };
      }
    ) => ({
      ...state,
      [payload.name]: payload.status,
    }),
    handleShowUpdatePlayerModal: state => ({
      ...state,
      showUpdatePlayerModal: true,
    }),
    handleHideUpdatePlayerModal: state => ({
      ...state,
      showUpdatePlayerModal: false,
    }),
  },
});

// Action creators are generated for each case reducer function
export const {
  changeGame,
  setWordleResults,
  resetPlayerData,
  setPlayerLoading,
  handleShowUpdatePlayerModal,
  handleHideUpdatePlayerModal,
} = playerSlice.actions;

export default playerSlice.reducer;
