/* eslint-disable react/prop-types */
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import "./CategoriesProductsCard.css";
import { Link } from "react-router-dom";
export default function NewItemsCard({ id, name, price, image, storage_size }) {
  return (
    <Link to={`/products/${id}`}>
      <Card className="w-[26vh] card-categ">
        <CardHeader shadow={false} floated={false} className="h-[13vh]">
          <div className="w-[30vh] h-[20vh] m-auto ">
            <img
              src={`${import.meta.env.VITE_IMG_SERVER}/uploads/${image}`}
              alt="card-image"
              className="h-full w-full object-scale-down rounded-lg"
            />
          </div>
        </CardHeader>
        <CardBody>
          <div className="mb-2 flex items-center justify-between">
            <Typography
              color="blue-gray"
              className="font-medium hover:font-extrabold hover:text-teal-400 delay-300"
            >
              {name}
            </Typography>
            <Typography
              color="blue-gray"
              className="font-medium hover:font-extrabold hover:text-teal-400 delay-300"
            >
              {price}
            </Typography>
          </div>
          {storage_size && (
            <Typography color="blue-gray" className="text-[12px]">
              {storage_size}
            </Typography>
          )}
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            ripple={false}
            fullWidth={true}
            className="bg-blue-gray-900/10 hover:bg-teal-400 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
          >
            See More
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
