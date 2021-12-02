import { createReducer } from '@reduxjs/toolkit';
import { changeFilter } from 'store/action';

const initialState = {
  currentFilter: 'Все квесты'
};

const app = createReducer(initialState, (builder) => {
  builder
  .addCase(changeFilter, (state, action) => {
    const {filter} = action.payload;
    state.currentFilter = filter;
  })
});

export {app};
