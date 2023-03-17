import { privateAxios } from '~/axiosConfig';
import {
  GetDataByUserId,
  UpdatePlayerType,
  WordleResultDataType,
} from './player.type';

export function requestSaveWordleResult(payload: WordleResultDataType) {
  return privateAxios.request({
    method: 'POST',
    url: '/p/save-wordle-result',
    data: payload,
  });
}

export function requestGetDataByUserId(payload: GetDataByUserId) {
  return privateAxios.request({
    method: 'GET',
    url: payload.url + '/' + payload.userId,
  });
}

export function requestUpdatePlayerData(payload: UpdatePlayerType) {
  return privateAxios.request({
    method: 'PUT',
    url: '/u/user/' + payload.userId,
    data: payload.updateData,
  });
}
