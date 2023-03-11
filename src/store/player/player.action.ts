import { createAction } from '@reduxjs/toolkit';
import { WordleResultData } from './player.type';

export const actionSaveWordleResult = createAction<WordleResultData>(
  'PLAYER/SAVE-WORDLE-RESULT'
);
