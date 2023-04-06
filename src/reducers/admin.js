import { createReducer } from "@reduxjs/toolkit";
const initialState = {
  isAuthenticated:false
};

export const adminReducer = createReducer(initialState, {
  LoginRequest: (state) => {
    state.loading = true;
    state.failure = false;
  },
  LoginSuccess: (state, action) => {
    state.loading = false;
    state.admin = action.payload;
    state.failure = false;
   state.isAuthenticated= true
  },
  LoginFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.failure = true;
    state.isAuthenticated = false
  },
  AdminControllRequest: (state) => {
    state.loading = true;
    state.failure = false;
  },
  AdminControllSuccess: (state, action) => {
    state.loading = false;
    state.control = action.payload;
    state.failure = false;
  },
  AdminControllFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.failure = true;
  },
  UpdateAdminControllRequest: (state) => {
    state.loading = true;
    state.failure = false;
  },
  UpdateAdminControllSuccess: (state, action) => {
    state.loading = false;
    state.admin = action.payload;
    state.failure = false;
  },
  UpdateAdminControllFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.failure = true;
  },
  userDataRequest: (state) => {
    state.loading = true;
    state.failure = false;
  },
  userDataSuccess: (state, action) => {
    state.loading = false;
    state.userCount = action.payload;
    state.failure = false;
  },
  userDataFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.failure = true;
  },
  orderDataRequest: (state) => {
    state.loading = true;
    state.failure = false;
  },
  orderDataSuccess: (state, action) => {
    state.loading = false;
    state.orderCount = action.payload;
    state.failure = false;
  },
  orderDataFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.failure = true;
  },
  closeError: (state) => {
    state.failure = false;
  },
});
