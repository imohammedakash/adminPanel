import { createReducer } from "@reduxjs/toolkit";
const initialState = {};

export const OrderReducer = createReducer(initialState, {
  getOrderRequest: (state) => {
    state.loading = true;
    state.failure = false;
  },
  getOrderSuccess: (state, action) => {
    state.loading = false;
    state.Order = action.payload;
    state.failure = false;
  },
  getOrderFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.failure = true;
  },
  closeError: (state) => {
    state.failure= false
  }
});
