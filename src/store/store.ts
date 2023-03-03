import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import wordleReducer from './wordleSlice';
import mainReducer from './mainSlice';

const reducer = combineReducers({
  wordle: wordleReducer,
  main: mainReducer,
});

export type IRootState = ReturnType<typeof reducer>;

export const store = configureStore({
  reducer,
});
