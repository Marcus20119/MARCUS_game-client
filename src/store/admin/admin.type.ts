import { IChartGrid } from '~/pages/Admin/Chart/ChartGrid';
import { IChartPipe } from '~/pages/Admin/Chart/ChartPipe';
import { UserDataType } from '../rootType';

export type WordleResultDataType = {
  status: 'win' | 'lose';
  currentRow?: number;
  userId: number;
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
export type UserTabType = 'Active User' | 'Deleted User';
export type GetAllDataType = createAllGetDataType<GetDataUrlType>;

export type UpdateUserType = {
  updateData: Pick<
    UserDataType,
    'firstName' | 'lastName' | 'email' | 'phoneNumber' | 'gender' | 'roleId'
  >;
  userId: number;
};

export type DeleteUserType = {
  id: number;
  type: 'soft' | 'hard';
};

export type ChartType = 'Pipe' | 'Grid-Day' | 'Grid-Month' | 'Grid-Year';

export type ChartResponseDataType = {
  Pipe: IChartPipe['data'];
  Grid: IChartGrid['data'];
};
