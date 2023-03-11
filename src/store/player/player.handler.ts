import { call, select } from 'redux-saga/effects';
import { IRootState } from '../rootReducer';

import { requestSaveWordleResult } from './player.request';
import { WordleResultData } from './player.type';

export function* handleSaveWordleResult(action: {
  type: string;
  payload: WordleResultData;
}) {
  try {
    yield call(requestSaveWordleResult, action.payload);
  } catch (err) {
    console.log(err);
  }
}
