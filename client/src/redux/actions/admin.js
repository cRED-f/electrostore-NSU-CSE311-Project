// import { server } from "../../apis/apis";

import axios from "axios";
//Products
export const createProduct = (formData) => async (dispatch) => {
  try {
    dispatch({ type: "PRODUCT_CREATE_REQUEST" });

    const { data } = await axios.post(
      `${import.meta.env.VITE_SERVER}/admin/products`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      }
    );

    dispatch({ type: "PRODUCT_CREATE_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "PRODUCT_CREATE_FAIL",
      payload: error.response.data.message,
    });
  }
};
export const getAllProducts = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_ALL_PRODUCTS" });
    const { data } = await axios.get(
      `${import.meta.env.VITE_SERVER}/user/getAllProducts`,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      }
    );
    dispatch({ type: "GET_ALL_PRODUCTS_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "GET_ALL_PRODUCTS_FAIL",
      payload: error.response.data.message,
    });
  }
};
export const deleteProduct = (dltID) => async (dispatch) => {
  try {
    dispatch({ type: "DELETE_PRODUCT_REQUEST" });
    const { data } = await axios.delete(
      `${import.meta.env.VITE_SERVER}/admin/products/${dltID}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    dispatch({ type: "DELETE_PRODUCT_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "DELETE_PRODUCT_FAIL",
      payload: error.response.data.message,
    });
  }
};

export const updateProduct = (updateID, newData) => async (dispatch) => {
  try {
    dispatch({ type: "UPDATE_PRODUCT_REQUEST" });
    const { data } = await axios.put(
      `${import.meta.env.VITE_SERVER}/admin/products/${updateID}`,
      newData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      }
    );
    dispatch({ type: "UPDATE_PRODUCT_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "UPDATE_PRODUCT_FAIL",
      payload: error.response.data.message,
    });
  }
};
//Categories
export const createCategory = (formData) => async (dispatch) => {
  try {
    dispatch({ type: "CATEGORY_CREATE_REQUEST" });
    const { data } = await axios.post(
      `${import.meta.env.VITE_SERVER}/admin/categories`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      }
    );
    dispatch({ type: "CATEGORY_CREATE_SUCCESS", payload: data });
    console.log(data);
  } catch (error) {
    dispatch({
      type: "CATEGORY_CREATE_FAIL",
      payload: error.response.data.message,
    });
  }
};

export const getAllCategories = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_ALL_CATEGORIES_REQUEST" });
    const { data } = await axios.get(
      `${import.meta.env.VITE_SERVER}/admin/get-all-categories`,

      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    dispatch({ type: "GET_ALL_CATEGORIES_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "GET_ALL_CATEGORIES_FAIL",
      payload: error.response.data.message,
    });
  }
};
export const deleteCategory = (dltID) => async (dispatch) => {
  try {
    dispatch({ type: "DELETE_CATEGORY_REQUEST" });
    const { data } = await axios.delete(
      `${import.meta.env.VITE_SERVER}/admin/categories/${dltID}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    dispatch({ type: "DELETE_CATEGORY_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "DELETE_CATEGORY_FAIL",
      payload: error.response.data.message,
    });
  }
};
export const updateCategories = (updateID, newData) => async (dispatch) => {
  try {
    dispatch({ type: "UPDATE_CATEGORY_REQUEST" });
    const { data } = await axios.put(
      `${import.meta.env.VITE_SERVER}/admin/categories/${updateID}`,
      newData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      }
    );
    dispatch({ type: "UPDATE_CATEGORY_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "UPDATE_CATEGORY_FAIL",
      payload: error.response.data.message,
    });
  }
};
//payment
export const getAllProductsPaymentDone = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_ALL_PRODUCTS_PAYMENT_DONE" });
    const { data } = await axios.get(
      `${import.meta.env.VITE_SERVER}/admin/products/payment`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    dispatch({ type: "GET_ALL_PRODUCTS_PAYMENT_DONE_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "GET_ALL_PRODUCTS_PAYMENT_DONE_FAIL",
      payload: error.response.data.message,
    });
  }
};
export const getAllProductsPaymentReq = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_ALL_PRODUCTS_PAYMENT_REQ" });
    const { data } = await axios.get(
      `${import.meta.env.VITE_SERVER}/admin/products/payment/status`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    dispatch({ type: "GET_ALL_PRODUCTS_PAYMENT_REQ_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "GET_ALL_PRODUCTS_PAYMENT_REQ_FAIL",
      payload: error.response.data.message,
    });
  }
};
export const updatePaymentStatus = (updateID, newData) => async (dispatch) => {
  try {
    dispatch({ type: "UPDATE_PAYMENT_STATUS_REQUEST" });
    const { data } = await axios.put(
      `${
        import.meta.env.VITE_SERVER
      }/admin/products/payment/status/${updateID}`,
      newData,
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    dispatch({ type: "UPDATE_PAYMENT_STATUS_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "UPDATE_PAYMENT_STATUS_FAIL",
      payload: error.response.data.message,
    });
  }
};

//billboard
export const getAllBillboard = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_ALL_BILLBOARD_REQUEST" });
    const { data } = await axios.get(
      `${import.meta.env.VITE_SERVER}/admin/products/billboard`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    dispatch({ type: "GET_ALL_BILLBOARD_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "GET_ALL_BILLBOARD_FAIL",
      payload: error.response.data.message,
    });
  }
};
export const deleteBillboard = (dltID) => async (dispatch) => {
  try {
    dispatch({ type: "DELETE_BILLBOARD_REQUEST" });
    const { data } = await axios.delete(
      `${
        import.meta.env.VITE_SERVER
      }/admin/products/billboard/upload/delete/${dltID}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    dispatch({ type: "DELETE_BILLBOARD_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "DELETE_BILLBOARD_FAIL",
      payload: error.response.data.message,
    });
  }
};
export const createBillboard = (formData) => async (dispatch) => {
  try {
    dispatch({ type: "BILLBOARD_CREATE_REQUEST" });
    const { data } = await axios.post(
      `${import.meta.env.VITE_SERVER}/admin/products/billboard/upload`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      }
    );
    dispatch({ type: "BILLBOARD_CREATE_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "BILLBOARD_CREATE_FAIL",
      payload: error.response.data.message,
    });
  }
};
export const updateBillboard = (updateID, newData) => async (dispatch) => {
  try {
    dispatch({ type: "UPDATE_BILLBOARD_REQUEST" });
    const { data } = await axios.put(
      `${
        import.meta.env.VITE_SERVER
      }/admin/products/billboard/upload/update/${updateID}`,
      newData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      }
    );
    dispatch({ type: "UPDATE_BILLBOARD_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "UPDATE_BILLBOARD_FAIL",
      payload: error.response.data.message,
    });
  }
};

//sub categories
export const getAllSubCategories = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_ALL_SUB_CATEGORIES_REQUEST" });
    const { data } = await axios.get(
      `${import.meta.env.VITE_SERVER}/admin/sub-categories`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    dispatch({ type: "GET_ALL_SUB_CATEGORIES_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "GET_ALL_SUB_CATEGORIES_FAIL",
      payload: error.response.data.message,
    });
  }
};
export const deleteSubCategory = (dltID) => async (dispatch) => {
  try {
    dispatch({ type: "DELETE_SUB_CATEGORY_REQUEST" });
    const { data } = await axios.delete(
      `${import.meta.env.VITE_SERVER}/admin/sub-categories/${dltID}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    dispatch({ type: "DELETE_SUB_CATEGORY_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "DELETE_SUB_CATEGORY_FAIL",
      payload: error.response.data.message,
    });
  }
};

export const createSubCategory = (subformData) => async (dispatch) => {
  try {
    dispatch({ type: "SUB_CATEGORY_CREATE_REQUEST" });
    const { data } = await axios.post(
      `${import.meta.env.VITE_SERVER}/admin/sub-categories`,
      subformData,
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    dispatch({ type: "SUB_CATEGORY_CREATE_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "SUB_CATEGORY_CREATE_FAIL",
      payload: error.response.data.message,
    });
  }
};

export const updateSubCategory =
  (subUpdateID, subnewData) => async (dispatch) => {
    try {
      dispatch({ type: "UPDATE_SUB_CATEGORY_REQUEST" });
      const { data } = await axios.put(
        `${import.meta.env.VITE_SERVER}/admin/sub-categories/${subUpdateID}`,
        subnewData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      dispatch({ type: "UPDATE_SUB_CATEGORY_SUCCESS", payload: data });
    } catch (error) {
      dispatch({
        type: "UPDATE_SUB_CATEGORY_FAIL",
        payload: error.response.data.message,
      });
    }
  };
