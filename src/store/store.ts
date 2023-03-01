import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import mainReducer from './mainSlice';

const reducer = combineReducers({
  main: mainReducer,
});

export type IRootState = ReturnType<typeof reducer>;

export const store = configureStore({
  reducer,
});
