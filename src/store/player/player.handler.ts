import { call, put, select } from 'redux-saga/effects';

import {
  requestGetDataByUserId,
  requestSaveWordleResult,
} from './player.request';
import { setPlayerLoading, setWordleResults } from './player.slice';
import {
  GetDataUrlType,
  GetPlayerGameDataType,
  WordleResultDataType,
  WordleResultResponseType,
} from './player.type';

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

export function* handleGetPlayerGameData(action: {
  type: string;
  payload: GetPlayerGameDataType;
}) {
  yield put(setPlayerLoading({ name: 'loadingWordleResult', status: true }));
  try {
    let url: GetDataUrlType;
    switch (action.payload.game) {
      case 'Wordle': {
        url = '/g/wordle';
        const { data } = yield call(requestGetDataByUserId, {
          url,
          userId: action.payload.userId,
        });
        const resData: WordleResultResponseType = data.data;
        const { id, userId, createdAt, updatedAt, ...wordleResultData } =
          resData;
        yield put(setWordleResults(wordleResultData));
        break;
      }
      default:
        return;
    }
  } catch (err) {
    console.log(err);
  } finally {
    yield put(setPlayerLoading({ name: 'loadingWordleResult', status: false }));
  }
}
