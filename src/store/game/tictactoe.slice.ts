import { createSlice } from '@reduxjs/toolkit';

const winCases = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

type StateType = {
  // currentMark: 'X' | 'O';
  playerMark: 'X' | 'O';
  board: ('X' | 'O' | '')[];
  isFinish: boolean;

  showWinTictactoeModal: boolean;
  showLoseTictactoeModal: boolean;
  showDrawTictactoeModal: boolean;
  showChartTictactoeModal: boolean;
  showHelpTictactoeModal: boolean;
  showChooseTictactoeModal: boolean;
};
type CustomStateType<T extends keyof StateType> = {
  state: T;
  value: StateType[T];
};
const initialState: StateType = {
  // currentMark: 'X',
  playerMark: 'X',
  board: ['', '', '', '', '', '', '', '', ''],
  isFinish: false,

  showWinTictactoeModal: false,
  showLoseTictactoeModal: false,
  showDrawTictactoeModal: false,
  showChartTictactoeModal: false,
  showHelpTictactoeModal: false,
  showChooseTictactoeModal: false,
};

export const tictactoeSlice = createSlice({
  name: 'wordle',
  initialState,
  reducers: {
    setTictactoeState: (
      state,
      { payload }: { payload: CustomStateType<keyof StateType> }
    ) => ({
      ...state,
      [payload.state]: payload.value,
    }),
    setCell: (
      state,
      {
        payload,
      }: {
        payload: {
          index: number;
          value: 'X' | 'O' | '';
        };
      }
    ) => {
      const newBoard = [...state.board];
      newBoard[payload.index] = payload.value;
      return { ...state, board: newBoard };
    },
    autoSetCell: state => {
      if (!state.isFinish) {
        const remainCells: number[] = [];
        state.board.forEach((cell, index) => {
          if (!cell) {
            remainCells.push(index);
          }
        });
        let setCellIndex: number;
        // Lấy random 1 cell trong số cell chưa đánh
        setCellIndex =
          remainCells[Math.floor(Math.random() * remainCells.length)];
        // Logic chặn người chơi
        winCases.forEach(item => {
          if (
            state.board[item[0]] === state.playerMark &&
            state.board[item[0]] === state.board[item[1]] &&
            remainCells.includes(item[2])
          ) {
            setCellIndex = item[2];
          } else if (
            state.board[item[0]] === state.playerMark &&
            state.board[item[0]] === state.board[item[2]] &&
            remainCells.includes(item[1])
          ) {
            setCellIndex = item[1];
          } else if (
            state.board[item[1]] === state.playerMark &&
            state.board[item[1]] === state.board[item[2]] &&
            remainCells.includes(item[0])
          )
            setCellIndex = item[0];
        });
        // Logic beat player ass
        const computerMark = state.playerMark === 'O' ? 'X' : 'O';
        winCases.forEach(item => {
          if (
            state.board[item[0]] === computerMark &&
            state.board[item[0]] === state.board[item[1]] &&
            remainCells.includes(item[2])
          ) {
            setCellIndex = item[2];
          } else if (
            state.board[item[0]] === computerMark &&
            state.board[item[0]] === state.board[item[2]] &&
            remainCells.includes(item[1])
          ) {
            setCellIndex = item[1];
          } else if (
            state.board[item[1]] === computerMark &&
            state.board[item[1]] === state.board[item[2]] &&
            remainCells.includes(item[0])
          )
            setCellIndex = item[0];
        });

        const newBoard = [...state.board];
        newBoard[setCellIndex] = state.playerMark === 'O' ? 'X' : 'O';
        return { ...state, board: newBoard };
      }
    },
    checkTictactoeResult: state => {
      let whoWin: 'X' | 'O' | '' = '';
      let isDraw: boolean = !state.board.includes('');
      winCases.forEach(item => {
        if (
          state.board[item[0]] &&
          state.board[item[0]] === state.board[item[1]] &&
          state.board[item[0]] === state.board[item[2]]
        ) {
          whoWin = state.board[item[0]];
        }
      });
      const computerMark = state.playerMark === 'O' ? 'X' : 'O';
      return {
        ...state,
        isFinish: whoWin ? true : isDraw ? true : false,
        showWinTictactoeModal:
          whoWin && whoWin === state.playerMark ? true : false,
        showLoseTictactoeModal:
          whoWin && whoWin === computerMark ? true : false,
        showDrawTictactoeModal: isDraw ? true : false,
      };
    },

    handleShowTictactoeModal: (
      state,
      {
        payload,
      }: { payload: 'help' | 'win' | 'lose' | 'chart' | 'draw' | 'choose' }
    ) => ({
      ...state,
      showHelpTictactoeModal: payload === 'help',
      showChartTictactoeModal: payload === 'chart',
      showWinTictactoeModal: payload === 'win',
      showLoseTictactoeModal: payload === 'lose',
      showDrawTictactoeModal: payload === 'draw',
      showChooseTictactoeModal: payload === 'choose',
    }),
    handleHideTictactoeModal: state => ({
      ...state,
      showHelpTictactoeModal: false,
      showWinTictactoeModal: false,
      showLoseTictactoeModal: false,
      showDrawTictactoeModal: false,
      showChartTictactoeModal: false,
      showChooseTictactoeModal: false,
    }),
    resetTictactoe: state => {
      const { playerMark, ...newState } = initialState;
      return {
        ...state,
        ...newState,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setTictactoeState,
  setCell,
  autoSetCell,
  checkTictactoeResult,
  handleShowTictactoeModal,
  handleHideTictactoeModal,
  resetTictactoe,
} = tictactoeSlice.actions;

export default tictactoeSlice.reducer;
