import { createReducer } from "@reduxjs/toolkit";
const initialState = {};

export const CouponReducer = createReducer(initialState, {
  createCouponRequest: (state) => {
    state.loading = true;
    state.failure = false;
  },
  createCouponSuccess: (state, action) => {
    state.loading = false;
    state.Coupon = action.payload;
    state.failure = false;
  },
  createCouponFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.failure = true;
  },
  getCouponRequest: (state) => {
    state.loading = true;
    state.failure = false;
  },
  getCouponSuccess: (state, action) => {
    state.loading = false;
    state.Coupon = action.payload;
    state.failure = false;
  },
  getCouponFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.failure = true;
  },
  updateCouponRequest: (state) => {
    state.loading = true;
    state.failure = false;
  },
  updateCouponSuccess: (state, action) => {
    state.loading = false;
    state.Coupon = action.payload;
    state.failure = false;
  },
  updateCouponFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.failure = true;
  },
  closeError: (state) => {
    state.failure = false;
  },
});
