import { call, put, select } from 'redux-saga/effects';
import { Cookie } from '~/helpers';
import { setUserData } from '../auth/auth.slice';
import { IRootState } from '../rootReducer';
import { UserDataType } from '../rootType';

import {
  requestGetDataByUserId,
  requestSaveTictactoeResult,
  requestSaveWordleResult,
  requestUpdatePlayerData,
} from './player.request';
import {
  handleHideUpdatePlayerModal,
  setPlayerLoading,
  setTictactoeResults,
  setWordleResults,
} from './player.slice';
import {
  GetDataUrlType,
  GetPlayerGameDataType,
  TictactoeResultDataType,
  TictactoeResultResponseType,
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

export function* handleSaveTictactoeResult(action: {
  type: string;
  payload: TictactoeResultDataType;
}) {
  try {
    yield call(requestSaveTictactoeResult, action.payload);
  } catch (err) {
    console.log(err);
  }
}

export function* handleGetPlayerGameData(action: {
  type: string;
  payload: GetPlayerGameDataType;
}) {
  yield put(setPlayerLoading({ name: 'loadingGameResult', status: true }));
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
      case 'Tic Tac Toe': {
        url = '/g/tictactoe';
        const { data } = yield call(requestGetDataByUserId, {
          url,
          userId: action.payload.userId,
        });
        const resData: TictactoeResultResponseType = data.data;
        const { id, userId, createdAt, updatedAt, ...tictactoeResultData } =
          resData;
        yield put(setTictactoeResults(tictactoeResultData));
        break;
      }
      default:
        return;
    }
  } catch (err) {
    console.log(err);
  } finally {
    yield put(setPlayerLoading({ name: 'loadingGameResult', status: false }));
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
    const { userData }: { userData: UserDataType } = yield select(
      (state: IRootState) => state.auth
    );
    Cookie.set({
      cName: 'userData',
      cValue: userData,
      exDays: 7,
    });
  } catch (err) {
    console.log(err);
  } finally {
    yield put(setPlayerLoading({ name: 'loadingUpdatePlayer', status: false }));
  }
}
