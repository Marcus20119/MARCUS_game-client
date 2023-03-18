import { privateAxios } from '~/axiosConfig';
import { DeleteUserType, GetAllDataType, UpdateUserType } from './admin.type';

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
// export function requestGetSelectedUserData(payload: number) {
//   return privateAxios.request({
//     method: 'GET',
//     url: 'g/user/' + payload,
//   });
// }
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
