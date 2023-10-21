import { createReducer } from "@reduxjs/toolkit";

export const adminReducer = createReducer(
  {
    loading: false,
    products: [],
    categories: [],
    payment_req: [],
    payment_done: [],
    billboard: [],
    sub_categories: [],
    error: null,
    message: null,
  },
  {
    PRODUCT_CREATE_REQUEST: (state) => {
      state.loading = true;
    },
    PRODUCT_CREATE_SUCCESS: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    PRODUCT_CREATE_FAIL: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },

    CATEGORY_CREATE_REQUEST: (state) => {
      state.loading = true;
    },
    CATEGORY_CREATE_SUCCESS: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    CATEGORY_CREATE_FAIL: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    GET_ALL_CATEGORIES_REQUEST: (state) => {
      state.loading = true;
    },
    GET_ALL_CATEGORIES_SUCCESS: (state, action) => {
      state.loading = false;
      state.categories = action.payload.data;
    },
    GET_ALL_CATEGORIES_FAIL: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    DELETE_CATEGORY_REQUEST: (state) => {
      state.loading = true;
    },
    DELETE_CATEGORY_SUCCESS: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    DELETE_CATEGORY_FAIL: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    UPDATE_CATEGORY_REQUEST: (state) => {
      state.loading = true;
    },
    UPDATE_CATEGORY_SUCCESS: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    UPDATE_CATEGORY_FAIL: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    GET_ALL_PRODUCTS_REQUEST: (state) => {
      state.loading = true;
    },
    GET_ALL_PRODUCTS_SUCCESS: (state, action) => {
      state.loading = false;
      state.products = action.payload.products;
    },
    GET_ALL_PRODUCTS_FAIL: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    DELETE_PRODUCT_REQUEST: (state) => {
      state.loading = true;
    },
    DELETE_PRODUCT_SUCCESS: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    DELETE_PRODUCT_FAIL: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    UPDATE_PRODUCT_REQUEST: (state) => {
      state.loading = true;
    },
    UPDATE_PRODUCT_SUCCESS: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    UPDATE_PRODUCT_FAIL: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    GET_ALL_PRODUCTS_PAYMENT_DONE: (state) => {
      state.loading = true;
    },
    GET_ALL_PRODUCTS_PAYMENT_DONE_SUCCESS: (state, action) => {
      state.loading = false;
      state.payment_done = action.payload.products;
    },
    GET_ALL_PRODUCTS_PAYMENT_DONE_FAIL: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    GET_ALL_PRODUCTS_PAYMENT_REQ: (state) => {
      state.loading = true;
    },
    GET_ALL_PRODUCTS_PAYMENT_REQ_SUCCESS: (state, action) => {
      state.loading = false;
      state.payment_req = action.payload.products;
    },
    GET_ALL_PRODUCTS_PAYMENT_REQ_FAIL: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    UPDATE_PAYMENT_STATUS_REQUEST: (state) => {
      state.loading = true;
    },
    UPDATE_PAYMENT_STATUS_SUCCESS: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    UPDATE_PAYMENT_STATUS_FAIL: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    GET_ALL_BILLBOARD_REQUEST: (state) => {
      state.loading = true;
    },
    GET_ALL_BILLBOARD_SUCCESS: (state, action) => {
      state.loading = false;
      state.billboard = action.payload.data;
    },
    GET_ALL_BILLBOARD_FAIL: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    DELETE_BILLBOARD_REQUEST: (state) => {
      state.loading = true;
    },
    DELETE_BILLBOARD_SUCCESS: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    DELETE_BILLBOARD_FAIL: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    BILLBOARD_CREATE_REQUEST: (state) => {
      state.loading = true;
    },
    BILLBOARD_CREATE_SUCCESS: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    BILLBOARD_CREATE_FAIL: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    UPDATE_BILLBOARD_REQUEST: (state) => {
      state.loading = true;
    },
    UPDATE_BILLBOARD_SUCCESS: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    UPDATE_BILLBOARD_FAIL: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    GET_ALL_SUB_CATEGORIES_REQUEST: (state) => {
      state.loading = true;
    },
    GET_ALL_SUB_CATEGORIES_SUCCESS: (state, action) => {
      state.loading = false;
      state.sub_categories = action.payload.data;
    },
    GET_ALL_SUB_CATEGORIES_FAIL: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    DELETE_SUB_CATEGORY_REQUEST: (state) => {
      state.loading = true;
    },
    DELETE_SUB_CATEGORY_SUCCESS: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    DELETE_SUB_CATEGORY_FAIL: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    UPDATE_SUB_CATEGORY_REQUEST: (state) => {
      state.loading = true;
    },
    UPDATE_SUB_CATEGORY_SUCCESS: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    UPDATE_SUB_CATEGORY_FAIL: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    SUB_CATEGORY_CREATE_REQUEST: (state) => {
      state.loading = true;
    },
    SUB_CATEGORY_CREATE_SUCCESS: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    SUB_CATEGORY_CREATE_FAIL: (state, action) => {
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
