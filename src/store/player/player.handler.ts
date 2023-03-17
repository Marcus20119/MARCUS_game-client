import { call, put, select } from 'redux-saga/effects';
import { Cookie } from '~/helpers';
import { setUserData } from '../auth/auth.slice';
import { IRootState } from '../rootReducer';
import { UserDataType } from '../rootType';

import {
  requestGetDataByUserId,
  requestSaveWordleResult,
  requestUpdatePlayerData,
} from './player.request';
import {
  handleHideUpdatePlayerModal,
  setPlayerLoading,
  setWordleResults,
} from './player.slice';
import {
  GetDataUrlType,
  GetPlayerGameDataType,
  UpdatePlayerType,
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

export function* handleUpdatePlayerData(action: {
  type: string;
  payload: UpdatePlayerType;
}) {
  yield put(setPlayerLoading({ name: 'loadingUpdatePlayer', status: true }));
  try {
    yield call(requestUpdatePlayerData, action.payload);
    yield put(setUserData(action.payload.updateData));
    yield put(handleHideUpdatePlayerModal());
    const newPlayer: UserDataType = yield select(
      (state: IRootState) => state.auth
    );
    Cookie.set({
      cName: 'userData',
      cValue: newPlayer,
      exDays: 7,
    });
  } catch (err) {
    console.log(err);
  } finally {
    yield put(setPlayerLoading({ name: 'loadingUpdatePlayer', status: false }));
  }
}
