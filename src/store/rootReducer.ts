import { combineReducers } from 'redux';
import wordleReducer from './game/wordle.slice';
import tictactoeReducer from './game/tictactoe.slice';
import authReducer from './auth/auth.slice';
import playerReducer from './player/player.slice';
import adminReducer from './admin/admin.slice';

export const reducer = combineReducers({
  wordle: wordleReducer,
  tictactoe: tictactoeReducer,
  auth: authReducer,
  player: playerReducer,
  admin: adminReducer,
});
export type IRootState = ReturnType<typeof reducer>;
