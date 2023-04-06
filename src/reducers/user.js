import { createReducer } from "@reduxjs/toolkit";
const initialState = {};

export const userReducer = createReducer(initialState, {
  RegisterUserRequest: (state) => {
    state.loading = true;
    state.failure = false;
  },
  RegisterUserSuccess: (state, action) => {
    state.loading = false;
    state.user = action.payload;
    state.failure = false;
  },
  RegisterUserFailure: (state, action) => {
    state.loading = false;
    state.failure = true;
    state.error = action.payload;
  },
  getUserRequest: (state) => {
    state.loading = true;
    state.failure = false;
  },
  getUserSuccess: (state, action) => {
    state.loading = false;
    state.user = action.payload;
    state.failure = false;
  },
  getUserFailure: (state, action) => {
    state.loading = false;
    state.failure = true;
    state.error = action.payload;
  },
  updateUserRequest: (state) => {
    state.loading = true;
    state.failure = false;
  },
  updateUserSuccess: (state, action) => {
    state.loading = false;
    state.user = action.payload;
    state.failure = false;
  },
  updateUserFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.failure = true;
  },
  closeError: (state) => {
    state.failure= false
  }
});
