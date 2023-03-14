export type WordleResultDataType = {
  status: 'win' | 'lose';
  currentRow?: number;
  userId: number;
};

type WordleResultResponseType = {
  id: number;
  userId: number;
  nWinR1: number;
  nWinR2: number;
  nWinR3: number;
  nWinR4: number;
  nWinR5: number;
  nWinR6: number;
  nLose: number;
  createAt: Date;
  updatedAt: Date;
};

type GetDataUrlType = '/g/wordle';
type GetAllDataOrderType = {
  '/g/wordle': {
    page: number;
    field?: keyof WordleResultResponseType;
    order?: 'ASC' | 'DESC';
  };
};
type createAllGetDataType<T extends GetDataUrlType> = {
  url: T;
  params: GetAllDataOrderType[T];
};
export type GetAllDataType = createAllGetDataType<GetDataUrlType>;
export type GetDataByUserIdType = {
  url: GetDataUrlType;
  userId: number;
};
