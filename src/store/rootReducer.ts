import { combineReducers } from 'redux';
import wordleReducer from './wordle.slice';
import mainReducer from './main.slice';
import authReducer from './auth/auth.slice';

export const reducer = combineReducers({
  wordle: wordleReducer,
  main: mainReducer,
  auth: authReducer,
});
export type IRootState = ReturnType<typeof reducer>;
