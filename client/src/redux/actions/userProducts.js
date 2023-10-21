import axios from "axios";

//user add to cart action
export const addToCart = (id, formData) => async (dispatch) => {
  try {
    dispatch({
      type: "ADD_TO_CART_REQUEST",
    });
    const { data } = await axios.post(
      `${import.meta.env.VITE_SERVER}/user/cart/${id}`,
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    dispatch({
      type: "ADD_TO_CART_SUCCESS",
      payload: data,
    });
    const existingCartData = JSON.parse(localStorage.getItem("cart")) || [];
    existingCartData.push(id);
    localStorage.setItem("cart", JSON.stringify(existingCartData));
  } catch (error) {
    dispatch({
      type: "ADD_TO_CART_ERROR",
      payload: error.response.data.message,
    });
  }
};

//get user add to cart data
export const getCartData = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "GET_CART_DATA_REQUEST",
    });
    const { data } = await axios.get(
      `${import.meta.env.VITE_SERVER}/user/cart/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    dispatch({
      type: "GET_CART_DATA_SUCCESS",
      payload: data,
    });

    localStorage.setItem("cartData", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: "GET_CART_DATA_ERROR",
      payload: error.response.data.message,
    });
  }
};

//user delete from cart action
export const deleteFromCart = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "DELETE_FROM_CART_REQUEST",
    });
    const { data } = await axios.delete(
      `${import.meta.env.VITE_SERVER}/user/cart/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    dispatch({
      type: "DELETE_FROM_CART_SUCCESS",
      payload: data,
    });
    const existingCartData = JSON.parse(localStorage.getItem("cartData")) || [];
    const updatedCartData = existingCartData.filter((item) => item !== id);
    localStorage.setItem("cartData", JSON.stringify(updatedCartData));
  } catch (error) {
    dispatch({
      type: "DELETE_FROM_CART_ERROR",
      payload: error.response.data.message,
    });
  }
};

//user checkout action
export const checkout = (id, formData) => async (dispatch) => {
  try {
    dispatch({
      type: "CHECKOUT_REQUEST",
    });
    const { data } = await axios.post(
      `${import.meta.env.VITE_SERVER}/user/payment/${id}`,
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    dispatch({
      type: "CHECKOUT_SUCCESS",
      payload: data,
    });
    const existingCartData = JSON.parse(localStorage.getItem("cartData")) || [];
    const updatedCartData = existingCartData.filter((item) => item !== id);
    localStorage.setItem("cartData", JSON.stringify(updatedCartData));
  } catch (error) {
    dispatch({
      type: "CHECKOUT_ERROR",
      payload: error.response.data.message,
    });
  }
};
