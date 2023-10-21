import { configureStore } from "@reduxjs/toolkit";
import { adminReducer } from "./reducer/adminReducer";
import { userReducer } from "./reducer/userReducer";
import { userProductsReducer } from "./reducer/userProductsReducer";

const store = configureStore({
  reducer: {
    admin: adminReducer,
    user: userReducer,
    userProducts: userProductsReducer,
  },
});

export default store;
