import { Card, Typography, Button } from "@material-tailwind/react";

import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, deleteProduct } from "../../../redux/actions/admin";

import { Link } from "react-router-dom";

const TABLE_HEAD = [
  "Name",
  "Image",
  "Price",
  "Stock",
  "Date",
  "Discount",
  "Warranty",
  "Edit Product",
  "Delete Product",
];

export default function AdminProducts() {
  //redux
  const dispatch = useDispatch();
  const { loading, products } = useSelector((state) => state.admin);

  //functions
  const dltbtnHandler = (dltID) => {
    try {
      dispatch(deleteProduct(dltID));
      dispatch(getAllProducts());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="admin-container1 top-6">
      {" "}
      {loading ? (
        <span className="loader"></span>
      ) : (
        <div>
          {" "}
          <h1 className="text-2xl my-4">All Products:</h1>
          <Card className="h-full w-full overflow-scroll rounded-none">
            <table className="w-full min-w-max table-auto text-left">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head, index) => (
                    <th
                      key={index}
                      className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                    >
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal leading-none opacity-70"
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {products.map((item) => {
                  const isLast = item === products.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={item.products_id}>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {item.name}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <img
                          className="w-10 h-10 rounded-lg object-fill"
                          src={`${import.meta.env.VITE_IMG_SERVER}/uploads/${
                            item.image
                          }`}
                          alt="dsada"
                        />
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {item.price}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {item.stock}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {item.date}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {item.discount}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {item.warranty}
                        </Typography>
                      </td>
                      <td className={`${classes} bg-blue-gray-50/50`}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          <Link to={`/admin/add-products/${item.products_id}`}>
                            <Button variant="text">Edit</Button>
                          </Link>
                        </Typography>
                      </td>

                      <td className={`${classes} bg-blue-gray-50/50`}>
                        <Typography
                          as="a"
                          href="#"
                          variant="small"
                          color="blue-gray"
                          className="font-medium"
                        >
                          <Button
                            onClick={() => dltbtnHandler(item.products_id)}
                            variant="text"
                          >
                            Delete
                          </Button>
                        </Typography>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Card>
          <div className="relative top-2 bottom-0 left-0   flex items-center">
            <Link to="/admin/add-products">
              <Button
                type="submit"
                className="flex justify-center rounded-md bg-blue-gray-900/10 px-3 py-1.5 text-sm font-semibold leading-6 text-blue-gray-900 hover:bg-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Add Products
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
