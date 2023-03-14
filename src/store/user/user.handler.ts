import { call, select } from 'redux-saga/effects';
import { IRootState } from '../rootReducer';

import {
  requestGetAllData,
  requestGetDataByUserId,
  requestSaveWordleResult,
} from './user.request';
import {
  GetAllDataType,
  GetDataByUserIdType,
  WordleResultDataType,
} from './user.type';

export function* handleSaveWordleResult(action: {
  type: string;
  payload: WordleResultDataType;
}) {
  try {
    yield call(requestSaveWordleResult, action.payload);
  } catch (err) {
    console.log(err);
  }
}

export function* handleGetAllData(action: {
  type: string;
  payload: GetAllDataType;
}) {
  try {
    const { data } = yield call(requestGetAllData, action.payload);
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

export function* handleGetDataByUserId(action: {
  type: string;
  payload: GetDataByUserIdType;
}) {
  try {
    const { data } = yield call(requestGetDataByUserId, action.payload);
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
