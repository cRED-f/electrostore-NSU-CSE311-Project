import { Card, Typography, Chip } from "@material-tailwind/react";
import { useSelector } from "react-redux";

const TABLE_HEAD = [
  "Buyer",
  "Product",
  "Category",
  "Amount",
  "Payment",
  "Stock",
  "Status",
];

export default function AdminPayments() {
  const { loading, payment_done } = useSelector((state) => state.admin);

  return (
    <div className="admin-container1 top-6">
      {loading ? (
        <span className="loader"></span>
      ) : (
        <div>
          {" "}
          <h1 className="text-2xl my-4">All Payments:</h1>
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
                {payment_done &&
                  payment_done.map((item) => {
                    const isLast = item === payment_done.length - 1;
                    const classes = isLast
                      ? "p-4"
                      : "p-4 border-b border-blue-gray-50";

                    return (
                      <tr key={item.payment_status_id}>
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
                            {item.products_name}
                          </Typography>
                        </td>

                        <td className={`${classes} bg-blue-gray-50/50`}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {item.types}
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
                            {item.stock}
                          </Typography>
                        </td>
                        <td className={`${classes} bg-blue-gray-50/50`}>
                          <Chip
                            size="sm"
                            variant="ghost"
                            value={item.status}
                            color={
                              item.status === "paid"
                                ? "green"
                                : item.status === "pending"
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
        </div>
      )}
    </div>
  );
}
