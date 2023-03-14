import { privateAxios } from '~/axiosConfig';
import {
  GetAllDataType,
  GetDataByUserIdType,
  WordleResultDataType,
} from './user.type';

export function requestSaveWordleResult(payload: WordleResultDataType) {
  return privateAxios.request({
    method: 'POST',
    url: '/p/save-wordle-result',
    data: payload,
  });
}
export function requestGetAllData(payload: GetAllDataType) {
  return privateAxios.request({
    method: 'GET',
    url: payload.url,
    params: payload.params,
  });
}

export function requestGetDataByUserId(payload: GetDataByUserIdType) {
  return privateAxios.request({
    method: 'GET',
    url: payload.url + '/' + payload.userId,
  });
}
