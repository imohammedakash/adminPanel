import { createReducer } from "@reduxjs/toolkit";
const initialState = {};

export const CategoryReducer = createReducer(initialState, {
  createCategoryRequest: (state) => {
    state.loading = true;
    state.failure = false;
  },
  createCategorySuccess: (state, action) => {
    state.loading = false;
    state.Category = action.payload;
    state.failure = false;
  },
  createCategoryFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.failure = true;
  },
  getCategoryRequest: (state) => {
    state.loading = true;
    state.failure = false;
  },
  getCategorySuccess: (state, action) => {
    state.loading = false;
    state.Category = action.payload;
    state.failure = false;
  },
  getCategoryFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.failure = true;
  },
  updateCategoryRequest: (state) => {
    state.loading = true;
    state.failure = false;
  },
  updateCategorySuccess: (state, action) => {
    state.loading = false;
    state.Category = action.payload;
    state.failure = false;
  },
  updateCategoryFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.failure = true;
  },
  closeError: (state) => {
    state.failure= false
  }
});
