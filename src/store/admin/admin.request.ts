import { privateAxios } from '~/axiosConfig';
import { GetAllDataType } from './admin.type';

export function requestGetAllData(payload: Omit<GetAllDataType, 'game'>) {
  return privateAxios.request({
    method: 'GET',
    url: payload.url,
    params: payload.params,
  });
}
