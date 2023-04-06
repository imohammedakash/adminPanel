import { createReducer } from "@reduxjs/toolkit";
const initialState = {};

export const subCategoryReducer = createReducer(initialState, {

  getSubCategoryRequest: (state) => {
    state.loading = true;
    state.failure = false;
  },
  getSubCategorySuccess: (state, action) => {
    state.loading = false;
    state.SubCategory = action.payload;
    state.failure = false;
  },
  getSubCategoryFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.failure = true;
  },
  closeError: (state) => {
    state.failure= false
  }
});
