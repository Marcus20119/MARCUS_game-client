import { createSlice } from '@reduxjs/toolkit';
import {
  GameType,
  TictactoeResultResponseType,
  WordleResultResponseType,
} from './player.type';

type NeededWordleResultType = Omit<
  WordleResultResponseType,
  'id' | 'updatedAt' | 'createdAt' | 'userId'
>;

type NeededTictactoeResultType = Omit<
  TictactoeResultResponseType,
  'id' | 'updatedAt' | 'createdAt' | 'userId'
>;

const initialState: {
  currentGame: GameType;
  wordleResults: NeededWordleResultType;
  tictactoeResults: NeededTictactoeResultType;
  loadingGameResult: boolean;
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
  tictactoeResults: {
    nDraw: 0,
    nLose: 0,
    nPlay: 0,
    nWinO: 0,
    nWinX: 0,
  },
  loadingGameResult: false,
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
    setTictactoeResults: (
      state,
      { payload }: { payload: Partial<NeededTictactoeResultType> }
    ) => ({
      ...state,
      tictactoeResults: { ...state.tictactoeResults, ...payload },
    }),
    resetPlayerData: state => initialState,
    setPlayerLoading: (
      state,
      {
        payload,
      }: {
        payload: {
          name: 'loadingGameResult' | 'loadingUpdatePlayer';
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
  setTictactoeResults,
  resetPlayerData,
  setPlayerLoading,
  handleShowUpdatePlayerModal,
  handleHideUpdatePlayerModal,
} = playerSlice.actions;

export default playerSlice.reducer;
