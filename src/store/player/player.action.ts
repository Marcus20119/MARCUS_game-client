import { createAction } from '@reduxjs/toolkit';
import {
  GetPlayerGameDataType,
  UpdatePlayerType,
  WordleResultDataType,
} from './player.type';

export const actionSaveWordleResult = createAction<WordleResultDataType>(
  'PLAYER/SAVE-WORDLE-RESULT'
);

export const actionGetPlayerGameData = createAction<GetPlayerGameDataType>(
  'PLAYER/GET-PLAYER-GAME-DATA'
);

export const actionUpdatePlayerData = createAction<UpdatePlayerType>(
  'PLAYER/UPDATE-PLAYER-DATA'
);
