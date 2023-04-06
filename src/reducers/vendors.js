import { createReducer } from "@reduxjs/toolkit";
const initialState = {};

export const vendorReducer = createReducer(initialState, {
  RegistervendorRequest: (state) => {
    state.loading = true;
    state.failure = false;
  },
  RegistervendorSuccess: (state) => {
    state.loading = false;
    state.failure = false;
  },
  RegistervendorFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.failure = true;
  },
  getvendorRequest: (state) => {
    state.loading = true;
    state.failure = false;
  },
  getvendorSuccess: (state, action) => {
    state.loading = false;
    state.vendor = action.payload;
    state.failure = false;
  },
  getvendorFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.failure = true;
  },
  closeError: (state) => {
    state.failure= false
  }
});
