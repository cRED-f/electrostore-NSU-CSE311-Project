import { createReducer } from "@reduxjs/toolkit";

export const userReducer = createReducer(
  {
    loading: false,
    userInfo: null,

    destination: null,
    error: null,
  },
  {
    LOGIN_REQUEST: (state) => {
      state.loading = true;
    },
    LOGIN_SUCCESS: (state, action) => {
      state.loading = false;
      state.userInfo = action.payload;

      state.message = action.payload.message;
      state.destination = "/";
    },
    LOGIN_ERROR: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    REGISTER_REQUEST: (state) => {
      state.loading = true;
    },
    REGISTER_SUCCESS: (state, action) => {
      state.loading = false;
      state.userInfo = null;
      state.message = action.payload.message;
      state.destination = "/auth/login";
    },
    REGISTER_ERROR: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    FORGOT_PASSWORD_REQUEST: (state) => {
      state.loading = true;
    },
    FORGOT_PASSWORD_SUCCESS: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;

      state.destination = "/auth/login";
    },
    FORGOT_PASSWORD_ERROR: (state, action) => {
      state.loading = false;
      state.error = action.payload;

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
