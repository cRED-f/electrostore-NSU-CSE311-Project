import axios from "axios";

//login

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: "LOGIN_REQUEST",
    });
    const { data } = await axios.post(
      `${import.meta.env.VITE_SERVER}/user/login`,
      {
        email,
        password,
      },
      {
        withCredentials: true,
      }
    );

    //store token in local storage
    localStorage.setItem("authToken", data.token);
    localStorage.setItem("userInfo", JSON.stringify(data));

    dispatch({
      type: "LOGIN_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "LOGIN_ERROR",
      payload: error.response.data.message,
    });
  }
};

//register
export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({
      type: "REGISTER_REQUEST",
    });
    const { data } = await axios.post(
      `${import.meta.env.VITE_SERVER}/user/register`,
      {
        name,
        email,
        password,
      },
      {
        headers: {
          "Content-type": "application/json",
        },
        withCredentials: true,
      }
    );
    dispatch({
      type: "REGISTER_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "REGISTER_ERROR",
      payload: error.response.data.message,
    });
  }
};

//forgot password
export const forgotPassword =
  (email, oldPassword, newPassword) => async (dispatch) => {
    try {
      dispatch({
        type: "FORGOT_PASSWORD_REQUEST",
      });
      const { data } = await axios.put(
        `${import.meta.env.VITE_SERVER}/user/forgotPass`,
        {
          email,
          oldPassword,
          newPassword,
        },
        {
          headers: {
            "Content-type": "application/json",
          },
          withCredentials: true,
        }
      );
      dispatch({
        type: "FORGOT_PASSWORD_SUCCESS",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "FORGOT_PASSWORD_ERROR",
        payload: error.response.data.message,
      });
    }
  };
