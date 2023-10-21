import { Tabs, TabsHeader, Tab } from "@material-tailwind/react";
import React from "react";
import { IconButton, Typography } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Button } from "@material-tailwind/react";
import "./ProductsCard.css";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import toast from "react-hot-toast";
import { addToCart } from "../../redux/actions/userProducts";
export default function ProductsCard() {
  const { id } = useParams();
  const [active, setActive] = React.useState(1);
  const { products } = useSelector((state) => state.admin);
  const isAuth = window.localStorage.getItem("authToken") ? true : false;
  const [filter, setFilter] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isClicked, setIsClicked] = useState(false);
  //filter products where products_id === id
  const filterProducts = products.filter((item) => item.products_id === id);

  const allProducts = products.filter(
    (item) => item.name === filterProducts[0].name
  );

  const btnClick = (btn_id) => {
    setFilter([]);
    // setIsClicked(true);
    const filter = allProducts.filter((item) => item.products_id === btn_id);
    setFilter(filter);
  };

  const next = () => {
    if (!filter || filter.length === 0 || active === filter[0].stock) return;

    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;

    setActive(active - 1);
  };

  //add to cart btn handler
  const addToCartBtnHandler = (id) => {
    if (isClicked === false) {
      toast.error("Please Select Storage Size");
    } else if (isAuth === false) {
      toast.error("Please Login First");
      navigate("/auth/login");
    } else {
      const formData = new FormData();
      formData.append("num_of_booked", active);
      formData.append("storage", `${filter[0].storage_size}`);

      dispatch(addToCart(id, formData));

      toast.success("Added To Cart");
    }
  };
  return (
    <div className="container1  ">
      <div className="flex flex-wrap justify-between  mt-7">
        <div className="forImg  w-[80vh]">
          <img
            src={`${import.meta.env.VITE_IMG_SERVER}/uploads/${
              filter.length === 0
                ? filterProducts.length > 0 // Check if filterProducts is not empty
                  ? filterProducts[0].image // Access the image property if it exists
                  : ""
                : filter[0].image // Access the image property if filter is not empty
            }`}
          />
        </div>
        <div className="forCardsDetails h-[100vh] relative  bg-white w-[80vh] ">
          <div className="m-10">
            <div className="flex flex-wrap justify-between">
              <h1 className="font-bold text-3xl ">
                {filter.length === 0 && filterProducts.length > 0
                  ? filterProducts[0].name
                  : filter.length > 0
                  ? filter[0].name
                  : "No Name Available"}
              </h1>
              <h1 className="text-teal-400 font-extrabold text-3xl">
                ${" "}
                {filter.length === 0 && filterProducts.length > 0
                  ? filterProducts[0].price
                  : filter.length > 0
                  ? filter[0].price
                  : "No Price Available"}
              </h1>
            </div>
            <h2 className="mt-8 font-bold">About</h2>
            <h5 className="font-thin">
              {" "}
              {filter.length === 0 && filterProducts.length > 0
                ? filterProducts[0].description
                : filter.length > 0
                ? filter[0].description
                : "No Description Available"}{" "}
            </h5>
            <div className="flex flex-wrap gap-20  mt-10">
              <h2 className="font-bold">
                Discount:{" "}
                <span className="font-normal">
                  ${" "}
                  {filter.length === 0 && filterProducts.length > 0
                    ? filterProducts[0].discount
                    : filter.length > 0
                    ? filter[0].discount
                    : "No discount Available"}
                </span>
              </h2>
              <h2>
                Stock:{" "}
                <span className="text-red-500">
                  {" "}
                  {filter.length === 0 && filterProducts.length > 0
                    ? filterProducts[0].stock
                    : filter.length > 0
                    ? filter[0].stock
                    : "No Stock Available"}
                </span>
              </h2>

              <h2>
                Warranty:{" "}
                {filter.length === 0 && filterProducts.length > 0
                  ? filterProducts[0].Warranty
                  : filter.length > 0
                  ? filter[0].Warranty
                  : "No Warranty Available"}{" "}
                Year Offical Warranty
              </h2>
            </div>
            <div className="mt-10">
              <h1>Storage:</h1>
            </div>
            <div className="mt-5">
              {" "}
              <Tabs value="html">
                <TabsHeader className="bg-teal-400">
                  {allProducts.map((item) => (
                    <Tab
                      key={item.products_id}
                      onClick={() => {
                        btnClick(item.products_id);
                        setIsClicked(true);
                      }}
                      value={item.storage_size}
                    >
                      <span> {item.storage_size}</span>
                    </Tab>
                  ))}
                </TabsHeader>
              </Tabs>
            </div>
            <div className="mt-10 flex justify-center">
              <div className="flex items-center gap-8">
                <IconButton
                  size="sm"
                  variant="outlined"
                  onClick={prev}
                  disabled={active === 1}
                >
                  <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
                </IconButton>
                <Typography color="gray" className="font-normal">
                  Items <strong className="text-gray-900">{active}</strong> of{" "}
                  <strong className="text-gray-900">
                    {filter.length === 0 && filterProducts.length > 0
                      ? filterProducts[0].stock
                      : filter.length > 0
                      ? filter[0].stock
                      : "No Stock Available"}
                  </strong>
                </Typography>
                <IconButton
                  size="sm"
                  variant="outlined"
                  onClick={next}
                  disabled={
                    !filter || filter.length === 0 || active === filter[0].stock
                  }
                >
                  <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
                </IconButton>
              </div>
            </div>

            <div className="mt-10 flex justify-center gap-5">
              <Button
                color="red"
                onClick={() => addToCartBtnHandler(filter[0].products_id)}
              >
                Add To Cart 🛒
              </Button>
              <Button color="amber">Buy 🛍️</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
