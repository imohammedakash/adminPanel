import { createReducer } from "@reduxjs/toolkit";
const initialState = {};

export const BannerReducer = createReducer(initialState, {
  createBannerRequest: (state) => {
    state.loading = true;
    state.failure = false;
  },
  createBannerSuccess: (state, action) => {
    state.loading = false;
    state.Banner = action.payload;
    state.failure = false;
  },
  createBannerFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.failure = true;
  },
  getBannerRequest: (state) => {
    state.loading = true;
  },
  getBannerSuccess: (state, action) => {
    state.loading = false;
    state.Banner = action.payload;
    state.failure = false;
  },
  getBannerFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.failure = true;
  },
  updateBannerRequest: (state) => {
    state.loading = true;
    state.failure = false;
  },
  updateBannerSuccess: (state, action) => {
    state.loading = false;
    state.Banner = action.payload;
    state.failure = false;
  },
  updateBannerFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.failure = true;
  },
  closeError: (state) => {
    state.failure= false
  }
});
