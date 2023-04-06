import { createReducer } from "@reduxjs/toolkit";
const initialState = {};

export const ProductReducer = createReducer(initialState, {
  createProductRequest: (state) => {
    state.loading = true;
    state.failure = false;
  },
  createProductSuccess: (state, action) => {
    state.loading = false;
    state.Product = action.payload;
    state.failure = false;
  },
  createProductFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.failure = true;
  },
  getProductRequest: (state) => {
    state.loading = true;
    state.failure = false;
  },
  getProductSuccess: (state, action) => {
    state.loading = false;
    state.Product = action.payload;
    state.failure = false;
  },
  getProductFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.failure = true;
  },
  updateProductRequest: (state) => {
    state.loading = true;
    state.failure = false;
  },
  updateProductSuccess: (state, action) => {
    state.loading = false;
    state.Product = action.payload;
    state.failure = false;
  },
  updateProductFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.failure = true;
  },
  closeError: (state) => {
    state.failure= false
  }
});
