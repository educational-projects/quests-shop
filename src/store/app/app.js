import { createReducer } from '@reduxjs/toolkit';
import { changeFilter, sendOrderError, sendOrderRequest, sendOrderSuccess } from 'store/action';

const DEFAULT_FILTER = 'Все квесты'

const initialState = {
  currentFilter: DEFAULT_FILTER,
  sendOrderLoading: false,
};

const app = createReducer(initialState, (builder) => {
  builder
  .addCase(changeFilter, (state, action) => {
    const {filter} = action.payload;
    state.currentFilter = filter;
  })
  .addCase(sendOrderRequest, (state) => {
    state.sendOrderLoading = true;
  })
  .addCase(sendOrderSuccess, (state) => {
    state.sendOrderLoading = false;
  })
  .addCase(sendOrderError, (state) => {
    state.sendOrderLoading = false;
  })
});

export {app};
