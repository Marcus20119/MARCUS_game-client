import { combineReducers } from 'redux';
import wordleReducer from './game/wordle.slice';
import authReducer from './auth/auth.slice';
import playerReducer from './player/player.slice';
import adminReducer from './admin/admin.slice';

export const reducer = combineReducers({
  wordle: wordleReducer,
  auth: authReducer,
  player: playerReducer,
  admin: adminReducer,
});
export type IRootState = ReturnType<typeof reducer>;
