export type WordleResultDataType = {
  status: 'win' | 'lose';
  currentRow?: number;
  userId: number;
};

export type UserDataType = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  roleId: number;
  phoneNumber: string | null;
  avatar: string | null;
  gender: boolean | null;
  createdAt: Date | null;
  updatedAt: Date | null;
};

export type WordleResultType = {
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
export type GetDataUrlType = '/g/wordle' | '/g/users';
export type GetAllDataOrderType = {
  '/g/wordle': {
    page: number;
    orderField?: keyof WordleResultType;
    orderType?: 'ASC' | 'DESC';
  };
  '/g/users': {
    page: number;
    orderField?: keyof UserDataType;
    orderType?: 'ASC' | 'DESC';
  };
};
type createAllGetDataType<T extends GetDataUrlType> = {
  url: T;
  params: GetAllDataOrderType[T];
};
export type GetAllDataType = createAllGetDataType<GetDataUrlType>;
