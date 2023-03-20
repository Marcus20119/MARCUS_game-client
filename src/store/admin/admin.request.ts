import { privateAxios } from '~/axiosConfig';
import {
  ChartType,
  DeleteUserType,
  GetAllDataType,
  UpdateUserType,
} from './admin.type';

export function requestGetAllData(
  payload: GetAllDataType & { type: 'active' | 'deleted' }
) {
  return privateAxios.request({
    method: 'GET',
    url: payload.url + '/' + payload.type,
    params: payload.params,
  });
}
export function requestUpdateUserData(payload: UpdateUserType) {
  return privateAxios.request({
    method: 'PUT',
    url: '/u/user/' + payload.userId,
    data: payload.updateData,
  });
}

export function requestDeleteUser(payload: DeleteUserType) {
  return privateAxios.request({
    method: 'DELETE',
    url: `/d/user/${payload.type}-delete/` + payload.id.toString(),
  });
}

export function requestRestoreUser(payload: number) {
  return privateAxios.request({
    method: 'DELETE',
    url: `/d/user/restore/` + payload.toString(),
  });
}

export function requestGetChartData(payload: ChartType) {
  let url: string = '';
  switch (payload) {
    case 'Pipe': {
      url = '/g/chart/pipe';
      break;
    }
    default: {
      break;
    }
  }
  return privateAxios.request({
    method: 'GET',
    url,
  });
}
