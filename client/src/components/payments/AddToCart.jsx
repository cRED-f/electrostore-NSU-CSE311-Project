/* eslint-disable react-hooks/rules-of-hooks */

import "./AddToCart.css";
import { Button } from "@material-tailwind/react";
import { Checkbox } from "@material-tailwind/react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart, getCartData } from "../../redux/actions/userProducts";
import { toast } from "react-hot-toast";
export default function AddToCart() {
  //   const [open, setOpen] = React.useState(false);

  // const handleOpen = () => setOpen(!open);
  const { id } = useParams();

  const dispatch = useDispatch();

  const { cartData, loading } = useSelector((state) => state.userProducts);
  //function for delete
  const dltBtnHandler = (cart_id) => {
    dispatch(deleteFromCart(cart_id));
    toast.success("Item deleted from cart successfully");
    dispatch(getCartData(id));
  };

  return (
    <div>
      {loading ? (
        <span className="loader"></span>
      ) : (
        <div>
          <div className="container1 h-[50vh] flex-col flex-wrap   top-5  ">
            <h1 className="font-bold text-3xl">Cart</h1>
            <div className="w-full h-2 bg-black "></div>
            <div className="flex flex-wrap justify-between gap-44 mt-4">
              <h1>Name: {cartData[0]?.name}</h1>
              <h1>Email: {cartData[0]?.email}</h1>
              <Link to="/">
                {" "}
                <Button color="amber">Continue Shopping</Button>
              </Link>
            </div>
            <div className="w-full h-1 bg-gray-100 mt-4"></div>

            <div className="flex justify-between">
              {" "}
              <h1 className="font-bold ml-10">Products</h1>
              <h1 className="font-bold ">Quantity</h1>
              <h1 className="font-bold ">Remove</h1>
              <h1 className="font-bold mr-10">Price</h1>
              <h1 className="mr-10">Action</h1>
            </div>

            <div className="w-full  bg-gray-100 mt-4 "></div>
            <div className="overflow-x-auto overflow-y-auto h-[30vh]">
              {cartData?.map((item) => (
                <div className="flex justify-between" key={item.cart_id}>
                  {" "}
                  <h1 className="font-bold ml-10">{item.products_name}</h1>
                  <h1 className="font-bold mr-10">{item.num_of_booked}</h1>
                  <Checkbox
                    color="red"
                    onClick={() => dltBtnHandler(item.cart_id)}
                  />
                  <h1 className="font-bold mr-10">${item.price}</h1>
                  <div>
                    {" "}
                    <div className=" ">
                      <div className="  w-[10vh] mr-10 h-[5vh]">
                        <Link
                          to={`/cart/${item.buyer_id}/checkout/${item.cart_id}`}
                        >
                          <Button color="red" className="h-10">
                            Checkout
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>{" "}
        </div>
      )}
    </div>
  );
}
