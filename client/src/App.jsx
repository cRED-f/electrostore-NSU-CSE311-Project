import Login from "./pages/auth/login/Login";
import { StickyNavbar } from "./layout/nav/Navbar";
import Register from "./pages/auth/register/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ForgotPass from "./pages/auth/forgotPass/ForgotPass";
import HomePage from "./pages/home/HomePage";
import Error from "./layout/error/Error";
import Footer from "./layout/footer/Footer";

import AdminBillboards from "./components/admin/adminBillboards/AdminBillboards";
import ProductsCard from "./components/products/ProductsCard";
import CategoriesProducts from "./components/categoriesProducts/CategoriesProducts";
import AddToCart from "./components/payments/AddToCart";
import AdminSidebar from "./layout/admin/AdminSidebar";
import AdminOrders from "./components/admin/adminOrders/AdminOrders";
import AdminPayments from "./components/admin/adminPayments/AdminPayments";
import { AdminCategories } from "./components/admin/adminCategories/AdminCategories";
import AdminProducts from "./components/admin/adminProducts/AdminProducts";
import AdminAddProducts from "./components/admin/adminAddProducts/AdminAddProducts";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import AdminAddBillboards from "./components/admin/adminBillboards/AdminAddBillboards";
import CheckOut from "./components/payments/CheckOut";
import SubCategoriesProducts from "./components/categoriesProducts/SubCategoriesProducts";
import Payment_status from "./components/profile/payment_status";

function App() {
  const { message, error, userInfo, loading } = useSelector(
    (state) => state.user
  );

  const dispatch = useDispatch();
  const isAuth = window.localStorage.getItem("authToken") ? true : false;

  useEffect(() => {
    if (message) {
      toast.success(`${message}`);
      dispatch({ type: "CLEAR_MESSAGE" });
    }
    if (error) {
      toast.error(error);
      dispatch({ type: "CLEAR_ERROR" });
    }
  }, [dispatch, message, error, userInfo]);
  return (
    <>
      <Router>
        {loading ? (
          <span className="loader"></span>
        ) : (
          <>
            {userInfo !== null ? (
              userInfo.data.role === "admin" ? (
                <AdminSidebar />
              ) : (
                <StickyNavbar />
              )
            ) : (
              <StickyNavbar />
            )}
            <Toaster position="top-center" reverseOrder={false} />
            {/*  */}
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products/:id" element={<ProductsCard />} />
              <Route path="/add-to-cart/:id" element={<AddToCart />} />
              <Route path="/user/profile/:id" element={<Payment_status />} />
              <Route
                path="/categories-products/:id"
                element={<CategoriesProducts />}
              />{" "}
              <Route
                path="/categories-products/:cat_id/:sub_id"
                element={<SubCategoriesProducts />}
              />
              {isAuth ? (
                <>
                  <Route
                    path="/cart/:buyer_id/checkout/:cart_id"
                    element={<CheckOut />}
                  />
                </>
              ) : null}
              {isAuth ? null : (
                <>
                  <Route path="/auth/forgotPass" element={<ForgotPass />} />
                  <Route path="/auth/login" element={<Login />} />
                  <Route path="/auth/register" element={<Register />} />
                </>
              )}
              {/* Admin Routes */}
              {userInfo !== null ? (
                userInfo.data.role === "admin" ? (
                  <>
                    <Route
                      path="/admin/billboards"
                      element={<AdminBillboards />}
                    />
                    <Route path="/admin/orders" element={<AdminOrders />} />
                    <Route path="/admin/payments" element={<AdminPayments />} />
                    <Route
                      path="/admin/categories"
                      element={<AdminCategories />}
                    />
                    <Route path="/admin/products" element={<AdminProducts />} />
                    <Route
                      path="/admin/add-products"
                      element={<AdminAddProducts />}
                    />
                    <Route
                      path="/admin/add-products/:productID"
                      element={<AdminAddProducts />}
                    />
                    <Route
                      path="/admin/add-billboards"
                      element={<AdminAddBillboards />}
                    />
                    <Route
                      path="/admin/add-billboards/:productID"
                      element={<AdminAddBillboards />}
                    />
                  </>
                ) : null
              ) : null}
              {/* // Error Route */}
              <Route path="*" element={<Error />} />
            </Routes>
            {userInfo !== null ? (
              userInfo.data.role === "admin" ? null : (
                <Footer />
              )
            ) : (
              <Footer />
            )}
          </>
        )}
      </Router>
    </>
  );
}

export default App;
