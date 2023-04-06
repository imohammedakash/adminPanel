import { createReducer } from "@reduxjs/toolkit";
const initialState = {};

export const DeliveryProfileReducer = createReducer(initialState, {
  getDeliveryProfileRequest: (state) => {
    state.loading = true;
    state.failure = false;
  },
  getDeliveryProfileSuccess: (state, action) => {
    state.loading = false;
    state.DeliveryProfile = action.payload;
    state.failure = false;
  },
  getDeliveryProfileFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.failure = true;
  },
  closeError: (state) => {
    state.failure= false
  }
});
