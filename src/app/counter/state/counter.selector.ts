import { CounterState } from './counter.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const COUNTER_STATE_NAME = 'counter';

const getCounterState = createFeatureSelector<CounterState>('counter');

export const getCounter = createSelector(getCounterState, (state) => {
  return state.counter;
});

export const getChannelName = createSelector(getCounterState, (state) => {
  return state.channelName;
});