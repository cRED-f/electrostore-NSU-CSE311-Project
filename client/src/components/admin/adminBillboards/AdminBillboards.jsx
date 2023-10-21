import { Card, Typography, Button, Chip } from "@material-tailwind/react";

import { useDispatch, useSelector } from "react-redux";
import { deleteBillboard, getAllBillboard } from "../../../redux/actions/admin";

import { Link } from "react-router-dom";

const TABLE_HEAD = [
  "Product",
  "Image",
  "Destination",
  "Edit Product",
  "Delete Product",
];

export default function AdminProducts() {
  //redux
  const dispatch = useDispatch();
  const { loading, billboard } = useSelector((state) => state.admin);

  //functions
  const dltbtnHandler = (dltID) => {
    try {
      dispatch(deleteBillboard(dltID));
      dispatch(getAllBillboard());
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
          <h1 className="text-2xl my-4">All Billboard:</h1>
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
                {billboard &&
                  billboard.map((item) => {
                    const isLast = item === billboard.length - 1;
                    const classes = isLast
                      ? "p-4"
                      : "p-4 border-b border-blue-gray-50";

                    return (
                      <tr key={item.billboard_id}>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {item.products_name}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <img
                            className="w-20 h-10  object-fill"
                            src={`${import.meta.env.VITE_IMG_SERVER}/uploads/${
                              item.image
                            }`}
                            alt="dsada"
                          />
                        </td>{" "}
                        <td className={classes}>
                          <div>
                            <Chip
                              text={item.destination}
                              variant="ghost"
                              value={item.destination}
                              className="text-sm w-32"
                              color={
                                item.destination === "carousel"
                                  ? "green"
                                  : item.destination === "billboard-1"
                                  ? "amber"
                                  : item.destination === "billboard-2"
                                  ? "red"
                                  : item.destination === "billboard-3"
                                  ? "blue"
                                  : item.destination === "billboard-4"
                                  ? "indigo"
                                  : null
                              }
                            />
                          </div>
                        </td>
                        <td className={`${classes} bg-blue-gray-50/50`}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            <Link
                              to={`/admin/add-billboards/${item.billboard_id}`}
                            >
                              <Button variant="text">Edit</Button>
                            </Link>
                          </Typography>
                        </td>
                        <td className={`${classes} bg-blue-gray-50/50`}>
                          <Typography
                            as="a"
                            href="#"
                            color="blue-gray"
                            className="font-medium"
                          >
                            <Button
                              onClick={() => dltbtnHandler(item.billboard_id)}
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
            <Link to="/admin/add-billboards">
              <Button
                type="submit"
                className="flex justify-center rounded-md bg-blue-gray-900/10 px-3 py-1.5 text-sm font-semibold leading-6 text-blue-gray-900 hover:bg-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Add New Billboard
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
