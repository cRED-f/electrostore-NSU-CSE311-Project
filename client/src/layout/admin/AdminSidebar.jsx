import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getAllBillboard,
  getAllCategories,
  getAllProducts,
  getAllProductsPaymentDone,
  getAllProductsPaymentReq,
  getAllSubCategories,
} from "../../redux/actions/admin";
import toast from "react-hot-toast";

import axios from "axios";
export default function AdminSidebar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    categories,
    sub_categories,
    products,
    payment_done,
    payment_req,
    billboard,
    error,
    message,
  } = useSelector((state) => state.admin);

  const btnClick = async () => {
    try {
      await axios.get(`${import.meta.env.VITE_SERVER}/user/logout`, {
        withCredentials: true,
      });
      localStorage.removeItem("authToken");
      window.localStorage.removeItem("cartData");
      window.localStorage.removeItem("userInfo");
      toast.success("Logout Successfully");
    } catch (err) {
      console.log(err);
    }
    window.location.href = "/";
  };

  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getAllSubCategories());
    dispatch(getAllProducts());
    dispatch(getAllBillboard());
    dispatch(getAllProductsPaymentDone());
    dispatch(getAllProductsPaymentReq());
    navigate("/admin/categories");
    if (error) {
      toast.error(error);
      dispatch({ type: "CLEAR_ERROR" });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: "CLEAR_MESSAGE" });
    }
  }, [dispatch, error, message]);

  return (
    <Card className="h-screen  rounded-none w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-200">
      <div className="mx-auto p-4">
        <Typography variant="h3" color="blue-gray">
          Admin Panel
        </Typography>
      </div>
      <div className=" w-16 h-16 mx-auto rounded-full  border-4 border-black ">
        <div className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 font-extra-bold text-black text-2xl mx-auto my-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
        </div>
      </div>
      <div className="mx-auto p-4">
        <Typography variant="h6" color="blue-gray">
          Md. Fahim Islam
        </Typography>
      </div>
      <List className="m-4">
        <ListItem>
          <ListItemPrefix>
            <PresentationChartBarIcon className="h-5 w-5" />
          </ListItemPrefix>
          Dashboard
        </ListItem>
        <Link to="/admin/categories">
          <ListItem>
            <ListItemPrefix>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 6h.008v.008H6V6z"
                />
              </svg>
            </ListItemPrefix>
            Categories
            <ListItemSuffix>
              <Chip
                value={categories.length ? categories.length : 0}
                size="sm"
                variant="ghost"
                color="blue-gray"
                className="rounded-full"
              />
            </ListItemSuffix>
            <ListItemSuffix>
              <Chip
                value={sub_categories.length ? sub_categories.length : 0}
                size="sm"
                variant="ghost"
                color="blue-gray"
                className="rounded-full"
              />
            </ListItemSuffix>
          </ListItem>
        </Link>
        <Link to="/admin/products">
          <ListItem>
            <ListItemPrefix>
              <ShoppingBagIcon className="h-5 w-5" />
            </ListItemPrefix>
            Products
            <ListItemSuffix>
              <Chip
                value={products.length ? products.length : 0}
                size="sm"
                variant="ghost"
                color="blue-gray"
                className="rounded-full"
              />
            </ListItemSuffix>
          </ListItem>
        </Link>
        <Link to="/admin/orders">
          <ListItem>
            <ListItemPrefix>
              <InboxIcon className="h-5 w-5" />
            </ListItemPrefix>
            Orders
            <ListItemSuffix>
              <Chip
                value={payment_req.length ? payment_req.length : 0}
                size="sm"
                variant="ghost"
                color="blue-gray"
                className="rounded-full"
              />
            </ListItemSuffix>
          </ListItem>
        </Link>
        <Link to="/admin/payments">
          <ListItem>
            <ListItemPrefix>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                />
              </svg>
            </ListItemPrefix>
            Payments
            <ListItemSuffix>
              <Chip
                value={payment_done.length ? payment_done.length : 0}
                size="sm"
                variant="ghost"
                color="blue-gray"
                className="rounded-full"
              />
            </ListItemSuffix>
          </ListItem>
        </Link>
        <Link to="/admin/billboards">
          <ListItem>
            <ListItemPrefix>
              <Cog6ToothIcon className="h-5 w-5" />
            </ListItemPrefix>
            Billboards
            <ListItemSuffix>
              <Chip
                value={billboard.length ? billboard.length : 0}
                size="sm"
                variant="ghost"
                color="blue-gray"
                className="rounded-full"
              />
            </ListItemSuffix>
          </ListItem>
        </Link>
        <ListItem onClick={btnClick}>
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>{" "}
          Log Out
        </ListItem>
      </List>
    </Card>
  );
}
