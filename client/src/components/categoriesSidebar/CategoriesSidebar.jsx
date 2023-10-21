/* eslint-disable react/prop-types */
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import { PresentationChartBarIcon } from "@heroicons/react/24/solid";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function CategoriesSidebar({ cat_id }) {
  const { sub_categories } = useSelector((state) => state.admin);

  return (
    <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 rounded-none shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          Brands
        </Typography>
      </div>
      <List>
        {sub_categories
          .filter((item) => item.categories_id === cat_id)
          .map((item) => (
            <ListItem key={item.sub_categories_id}>
              <ListItemPrefix>
                <PresentationChartBarIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Link
                to={`/categories-products/${cat_id}/${item.sub_categories_id}`}
              >
                {item.sub_categories_name}
              </Link>
            </ListItem>
          ))}
      </List>
    </Card>
  );
}
