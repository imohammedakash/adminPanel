import { createReducer } from "@reduxjs/toolkit";
const initialState = {};

export const SupportReducer = createReducer(initialState, {
  getSupportRequest: (state) => {
    state.loading = true;
    state.failure = false;
  },
  getSupportSuccess: (state, action) => {
    state.loading = false;
    state.Support = action.payload;
    state.failure = false;
  },
  getSupportFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.failure = true;
  },
  closeError: (state) => {
    state.failure= false
  }
});
