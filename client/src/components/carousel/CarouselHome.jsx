import { Carousel } from "flowbite-react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function CarouselHome() {
  const { billboard } = useSelector((state) => state.admin);
  const filterBillboard = billboard.filter(
    (item) => item.destination === "carousel"
  );

  return (
    <Carousel>
      {filterBillboard &&
        filterBillboard.map((item) => (
          <Link to={`/products/${item.products_id}`} key={item.billboard_id}>
            <img
              key={item.billboard_id}
              name="image"
              alt="..."
              src={`${import.meta.env.VITE_IMG_SERVER}/uploads/${item.image}`}
            />
          </Link>
        ))}
    </Carousel>
  );
}
