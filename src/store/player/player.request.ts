import { privateAxios } from '~/axiosConfig';
import { GetDataByUserId, WordleResultDataType } from './player.type';

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
