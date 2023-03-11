import { privateAxios } from '~/axiosConfig';
import { WordleResultData } from './player.type';

export function requestSaveWordleResult(payload: WordleResultData) {
  return privateAxios.request({
    method: 'POST',
    url: '/p/save-wordle-result',
    data: payload,
  });
}
