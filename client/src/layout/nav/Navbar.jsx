/* eslint-disable no-undef */
import React, { useEffect } from "react";

import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { RxPerson } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { Input, Badge } from "@material-tailwind/react";

import {
  getAllBillboard,
  getAllCategories,
  getAllProducts,
  getAllSubCategories,
} from "../../redux/actions/admin";
import "./Navbar.css";
import { getCartData } from "../../redux/actions/userProducts";
import axios from "axios";

export function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);
  const [Login, setLogin] = React.useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //useSelector hooks for select data from store
  const { message, error, userInfo, destination } = useSelector(
    (state) => state.user
  );
  const { cartData } = useSelector((state) => state.userProducts);
  const { categories } = useSelector((state) => state.admin);

  //check if user is logged in or not
  const isAuth = window.localStorage.getItem("authToken") ? true : false;
  //get user info from local storage
  const user = JSON.parse(localStorage.getItem("userInfo"));

  //useEffect hooks for dispatch an action
  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getAllCategories());
    dispatch(getAllSubCategories());
    dispatch(getAllBillboard());
    if (isAuth) {
      dispatch(getCartData(user?.data?.userID));
    }
  }, [dispatch]);

  // useEffect(() => {
  //   if (!isAuth) {
  //     if (userInfo === null || userInfo === 0 || userInfo === undefined) {
  //       dispatch(login(user?.data?.email, user?.data?.password));
  //     }
  //   }
  // }, []);

  React.useEffect(() => {
    if (isAuth) {
      setLogin(true);
      if (userInfo != null && userInfo.data.role === "visitor") {
        navigate("/");
      }
    } else {
      setLogin(false);
    }
    if (userInfo != null && userInfo.data.role === "visitor") {
      if (destination === "/auth/login") {
        navigate("/auth/login");
      }
    }
  }, [message, error]);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  //functions
  const handleLogOutBtn = async () => {
    try {
      await axios.get(`${import.meta.env.VITE_SERVER}/user/logout`, {
        withCredentials: true,
      });
    } catch (err) {
      console.log(err);
    }
    localStorage.removeItem("authToken");
    window.localStorage.removeItem("cartData");
    window.localStorage.removeItem("userInfo");
    toast.success("Logout Successfully");
    window.location.href = "/";

    setLogin(false);
  };
  //handle cart icon
  const handleCartIcon = (id) => {
    if (isAuth === false) {
      toast.error("Please Login First");
    } else {
      dispatch(getCartData(id));
    }
  };

  const navList = categories.map((item) => (
    <Typography
      key={item.id} // add a unique key prop
      as="li"
      variant="small"
      color="blue-gray"
      className="p-1 font-normal"
    >
      <Link
        to={`/categories-products/${item.id}`}
        className="flex items-center hover:text-teal-400 nav-item"
      >
        {item.types}
      </Link>
    </Typography>
  ));

  return (
    <div className=" sticky top-0 z-10  max-h-[768px] ">
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
        <div className=" container mx-auto flex items-center justify-between text-blue-gray-900">
          <Link to="/" className="mr-4 cursor-pointer  font-bold text-[25px]">
            ElectroStore
          </Link>
          <div className="hidden lg:block">
            <ul className="mb-4   mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
              {navList}
            </ul>
          </div>
          <div className="flex justify-between   w-[27rem]">
            <div className="w-0 mx-2">
              <Input label="Search Products" />
            </div>
            <div className="flex  justify-between gap-3">
              <Badge content={`${cartData.length}`}>
                <Link
                  to={`/add-to-cart/${user?.data?.userID}`}
                  onClick={() => handleCartIcon(user?.data?.userID)}
                >
                  <IconButton variant="outlined" className="rounded-full mx-1">
                    <AiOutlineShoppingCart className="font-bold text-2xl" />
                  </IconButton>
                </Link>
              </Badge>
              {Login ? (
                <>
                  {" "}
                  <IconButton variant="outlined" className="rounded-full">
                    {" "}
                    <RxPerson className="font-bold text-2xl" />{" "}
                  </IconButton>{" "}
                  <Button variant="gradient" onClick={handleLogOutBtn}>
                    Log out
                  </Button>
                </>
              ) : (
                <Link to="/auth/login">
                  <Button variant="gradient">Log in</Button>
                </Link>
              )}
            </div>
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
        <MobileNav open={openNav}>
          <div className="container mx-auto">{navList}</div>
        </MobileNav>
      </Navbar>
    </div>
  );
}
