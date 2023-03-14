import { createAction } from '@reduxjs/toolkit';
import {
  GetAllDataType,
  GetDataByUserIdType,
  WordleResultDataType,
} from './user.type';

export const actionSaveWordleResult = createAction<WordleResultDataType>(
  'USER/SAVE-WORDLE-RESULT'
);

export const actionGetAllData =
  createAction<GetAllDataType>('USER/GET-ALL-DATA');

export const actionGetDataByUserId = createAction<GetDataByUserIdType>(
  'USER/GET-DATA-BY-ID'
);
