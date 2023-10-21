import { createReducer } from "@reduxjs/toolkit";

export const userProductsReducer = createReducer(
  {
    loading: false,
    cartData: [],

    error: null,
    message: null,
  },
  {
    ADD_TO_CART_REQUEST: (state) => {
      state.loading = true;
    },
    ADD_TO_CART_SUCCESS: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    ADD_TO_CART_ERROR: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },

    GET_CART_DATA_REQUEST: (state) => {
      state.loading = true;
    },
    GET_CART_DATA_SUCCESS: (state, action) => {
      state.loading = false;
      state.cartData = action.payload.carts;
      state.message = action.payload.message;
    },
    GET_CART_DATA_ERROR: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    DELETE_FROM_CART_REQUEST: (state) => {
      state.loading = true;
    },
    DELETE_FROM_CART_SUCCESS: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    DELETE_FROM_CART_ERROR: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    CHECKOUT_REQUEST: (state) => {
      state.loading = true;
    },
    CHECKOUT_SUCCESS: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    CHECKOUT_ERROR: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    CLEAR_ERROR: (state) => {
      state.error = null;
    },
    CLEAR_MESSAGE: (state) => {
      state.message = null;
    },
  }
);
