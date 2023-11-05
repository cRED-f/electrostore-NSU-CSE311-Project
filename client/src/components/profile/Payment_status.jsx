/* eslint-disable react-hooks/rules-of-hooks */
import { Card, Typography, Chip } from "@material-tailwind/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPaymentStatus } from "../../redux/actions/userProducts";
const TABLE_HEAD = ["Product", "Amount", "Status"];
export default function Payment_status() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { loading, payment_status } = useSelector(
    (state) => state.userProducts
  );
  console.log(id);
  useEffect(() => {
    dispatch(getPaymentStatus(id));
  }, []);

  return (
    <div>
      {loading ? (
        <span className="loader"></span>
      ) : (
        <div>
          <div className="container1 h-[50vh] flex-col flex-wrap   top-5  ">
            <h1 className="font-bold text-3xl">All Payment Status</h1>
            <div className="w-full h-2 bg-black "></div>
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
                  {payment_status &&
                    payment_status.map((item) => {
                      const isLast = item === payment_status.length - 1;
                      const classes = isLast
                        ? "p-4"
                        : "p-4 border-b border-blue-gray-50";

                      return (
                        <tr key={item.buyer_payment_id}>
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
                              {item.price}
                            </Typography>
                          </td>

                          <td className={`${classes} bg-blue-gray-50/50`}>
                            <Chip
                              size="sm"
                              variant="ghost"
                              value={item.products_status}
                              color={
                                item.products_status === "paid"
                                  ? "green"
                                  : item.products_status === "pending"
                                  ? "amber"
                                  : "red"
                              }
                            />
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </Card>
          </div>{" "}
        </div>
      )}
    </div>
  );
}
