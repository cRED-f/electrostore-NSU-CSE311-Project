import React from "react";

import {
  Card,
  CardHeader,
  CardBody,
  Input,
  Button,
  Typography,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import {
  BanknotesIcon,
  CreditCardIcon,
  LockClosedIcon,
} from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";
import { checkout } from "../../redux/actions/userProducts";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

export default function CheckOut() {
  const [type, setType] = React.useState("card");
  const [address, setAddress] = React.useState("");
  const [cardNumber, setCardNumber] = React.useState("");
  const [cvv, setCvv] = React.useState("");
  const [expireDate, setExpireDate] = React.useState("");

  const [phone, setPhone] = React.useState("");
  const [password, setPassword] = React.useState("");
  const dispatch = useDispatch();
  const { cart_id } = useParams();

  const navigate = useNavigate();

  const btnHandler1 = () => {
    const formData = new FormData();
    formData.append("address", address);
    formData.append("card_num", cardNumber);
    formData.append("cvv", cvv);
    formData.append("expire_date", expireDate);
    formData.append("payment_method", type);
    formData.append("phone_num", "");
    formData.append("password", "");
    dispatch(checkout(cart_id, formData));

    toast.success("Payment Successful");
    navigate(`/add-to-cart/${cart_id}`);
  };

  const btnHandler2 = () => {
    const formData = new FormData();
    formData.append("address", address);
    formData.append("card_num", "");
    formData.append("cvv", "");
    formData.append("payment_method", type);
    formData.append("phone_num", phone);
    formData.append("password", password);
    dispatch(checkout(cart_id, formData));
    toast.success("Payment Successful");

    navigate(`/user/add-to-cart/${cart_id}`);
  };

  return (
    <div className="w-full">
      <Card className="w-full mx-auto my-5 max-w-[24rem]">
        <CardHeader
          color="gray"
          floated={false}
          shadow={false}
          className="m-0 grid place-items-center rounded-b-none py-8 px-4 text-center"
        >
          <div className="mb-4 rounded-full border border-white/10 bg-white/10 p-6 text-white">
            <BanknotesIcon className="h-10 w-10" />
          </div>
          <Typography variant="h4" color="white">
            Checkout
          </Typography>
        </CardHeader>
        <CardBody>
          <Tabs value={type} className="overflow-visible">
            <TabsHeader className="relative z-0 ">
              <Tab value="card" onClick={() => setType("card")}>
                Pay with Card
              </Tab>
              <Tab value="paypal" onClick={() => setType("bkash")}>
                Pay with Bkash
              </Tab>
            </TabsHeader>
            <TabsBody>
              <TabPanel value="card" className="p-0">
                <form className="mt-12 flex flex-col gap-4">
                  <div>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="mb-4 font-medium"
                    >
                      Personal Details
                    </Typography>
                    <Input
                      type="address"
                      label="Enter Address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>

                  <div className="my-6">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="mb-4 font-medium"
                    >
                      Card Details
                    </Typography>

                    <Input
                      label="Card Number"
                      maxLength={19}
                      icon={
                        <CreditCardIcon className="h-5 w-5 text-blue-gray-300" />
                      }
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                    />
                    <div className="my-4 flex items-center gap-4">
                      <Input
                        label="Expires"
                        maxLength={5}
                        type="date"
                        containerProps={{ className: "min-w-[72px]" }}
                        value={expireDate}
                        onChange={(e) => setExpireDate(e.target.value)}
                      />
                      <Input
                        label="CVV"
                        maxLength={4}
                        containerProps={{ className: "min-w-[72px]" }}
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value)}
                      />
                    </div>
                  </div>
                  <Button size="lg" color="amber" onClick={btnHandler1}>
                    Pay Now
                  </Button>
                  <Typography
                    variant="small"
                    color="gray"
                    className="mt-2 flex items-center justify-center gap-2 font-normal opacity-60"
                  >
                    <LockClosedIcon className="-mt-0.5 h-4 w-4" /> Payments are
                    secure and encrypted
                  </Typography>
                </form>
              </TabPanel>
              <TabPanel value="paypal" className="p-0">
                <form className="mt-12 flex flex-col gap-4">
                  <div>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="mb-4 font-medium"
                    >
                      Personal Details
                    </Typography>
                    <Input
                      type="number"
                      label="Email Number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>

                  <div className="my-6">
                    <Input
                      type="password"
                      label="Email Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <Button
                    size="lg"
                    color="amber"
                    className="relative h-12"
                    onClick={btnHandler2}
                  >
                    Pay Now
                  </Button>
                  <Typography
                    variant="small"
                    color="gray"
                    className="mt-2 flex items-center justify-center gap-2 font-normal opacity-60"
                  >
                    <LockClosedIcon className="-mt-0.5 h-4 w-4" /> Payments are
                    secure and encrypted
                  </Typography>
                </form>
              </TabPanel>
            </TabsBody>
          </Tabs>
        </CardBody>
      </Card>
    </div>
  );
}
