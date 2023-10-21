import { Card, Typography, Chip, Button } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";

import { useState } from "react";
import {
  getAllProductsPaymentReq,
  updatePaymentStatus,
} from "../../../redux/actions/admin";

const TABLE_HEAD = [
  "Buyer",
  "Email",
  "Address",
  "Product",
  "Amount",
  "Payment",
  "Phone",
  "Card Number",
  "CVV",
  "Expiry",
  "Stock",
  "Status",
  "Aprroval",
  "Action",
];

export default function AdminOrders() {
  const [rowStatus, setRowStatus] = useState({});

  const dispatch = useDispatch();
  const { loading, payment_req } = useSelector((state) => state.admin);

  const btnHandler = (updateID) => {
    const rowSpecificStatus = rowStatus[updateID];

    if (rowSpecificStatus === "pending") {
      console.log("pending");
    } else if (rowSpecificStatus === "paid" || rowSpecificStatus === "reject") {
      const newData = new FormData();
      newData.append("status", rowSpecificStatus);
      dispatch(updatePaymentStatus(updateID, newData));
      dispatch(getAllProductsPaymentReq());
    }
  };

  return (
    <div className="admin-container1 top-6">
      {loading ? (
        <span className="loader"></span>
      ) : (
        <div>
          {" "}
          <h1 className="text-2xl my-4">All Pending Orders:</h1>
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
                {payment_req &&
                  payment_req.map((item) => {
                    const isLast = item === payment_req.length - 1;
                    const classes = isLast
                      ? "p-4"
                      : "p-4 border-b border-blue-gray-50";

                    return (
                      <tr key={item.payment_req_id}>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {item.name}
                          </Typography>
                        </td>
                        <td className={`${classes} bg-blue-gray-50/50`}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {item.email}
                          </Typography>
                        </td>
                        <td className={`${classes} bg-blue-gray-50/50`}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {item.address}
                          </Typography>
                        </td>
                        <td className={`${classes} bg-blue-gray-50/50`}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {item.products_name}
                          </Typography>
                        </td>
                        <td className={`${classes} bg-blue-gray-50/50`}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {item.total_amount}
                          </Typography>
                        </td>
                        <td className={`${classes} bg-blue-gray-50/50`}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {item.payment_method}
                          </Typography>
                        </td>
                        <td className={`${classes} bg-blue-gray-50/50`}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {item.phone_num ? item.phone_num : "N/A"}
                          </Typography>
                        </td>
                        <td className={`${classes} bg-blue-gray-50/50`}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {item.card_num ? item.card_num : "N/A"}
                          </Typography>
                        </td>
                        <td className={`${classes} bg-blue-gray-50/50`}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {item.cvv ? item.cvv : "N/A"}
                          </Typography>
                        </td>{" "}
                        <td className={`${classes} bg-blue-gray-50/50`}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {item.expire_date ? item.expire_date : "N/A"}
                          </Typography>
                        </td>{" "}
                        <td className={`${classes} bg-blue-gray-50/50`}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {item.stock}
                          </Typography>
                        </td>
                        <td className={`${classes} bg-blue-gray-50/50`}>
                          <Chip
                            size="sm"
                            variant="ghost"
                            value={"PENDING"}
                            color={"amber"}
                          />
                        </td>
                        <td className={`${classes} bg-blue-gray-50/50`}>
                          <select
                            value={rowStatus[item.payment_req_id] || "Select"} // Use row-specific status
                            onChange={(e) => {
                              const newRowStatus = { ...rowStatus };
                              newRowStatus[item.payment_req_id] =
                                e.target.value; // Update row-specific status
                              setRowStatus(newRowStatus);
                            }}
                          >
                            <option>Select</option>
                            <option value="pending">Pending</option>
                            <option value="paid">Paid</option>
                            <option value="reject">Reject</option>
                          </select>
                        </td>{" "}
                        <td className={`${classes} bg-blue-gray-50/50`}>
                          <Typography
                            as="a"
                            href="#"
                            variant="small"
                            color="blue-gray"
                            className="font-medium"
                          >
                            <Button
                              variant="text"
                              key={item.payment_req_id}
                              onClick={() => btnHandler(item.payment_req_id)}
                            >
                              Press
                            </Button>
                          </Typography>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </Card>
        </div>
      )}
    </div>
  );
}
