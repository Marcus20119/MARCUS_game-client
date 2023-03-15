export type WordleResultDataType = {
  status: 'win' | 'lose';
  currentRow?: number;
  userId: number;
};

export type WordleResultResponseType = {
  id: number;
  userId: number;
  nWinR1: number;
  nWinR2: number;
  nWinR3: number;
  nWinR4: number;
  nWinR5: number;
  nWinR6: number;
  nLose: number;
  nPlay: number;
  createdAt: Date;
  updatedAt: Date;
};

export type GameType = 'Wordle' | 'Tic Tac Toe' | '';
export type GetDataUrlType = '/g/wordle';

export type GetDataByUserId = {
  url: GetDataUrlType;
  userId: number;
};

export type GetPlayerGameDataType = {
  game: GameType;
  userId: GetDataByUserId['userId'];
};