import "./CategoriesProducts.css";
import CategoriesSidebar from "../categoriesSidebar/CategoriesSidebar";
import NewItemsCard from "../card/NewItemsCard"; // Import the appropriate component
import { useState } from "react";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function CategoriesProducts() {
  const [active, setActive] = useState(1);
  const cardsPerPage = 8;
  const { id } = useParams();
  const { products } = useSelector((state) => state.admin);
  const filteredProducts = products
    .filter((item) => item.categories_id === id)
    .map((item) => (
      <NewItemsCard
        key={item.products_id}
        id={item.products_id}
        name={item.name}
        price={item.price}
        image={item.image}
        storage_size={item.storage_size}
      />
    ));

  const totalCards = filteredProducts.length; // Total number of cards

  const getItemProps = (index) => ({
    variant: active === index ? "filled" : "text",
    color: "gray",
    onClick: () => setActive(index),
  });

  const next = () => {
    if (active === Math.ceil(totalCards / cardsPerPage)) return;
    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;
    setActive(active - 1);
  };

  // Calculate the cards to display based on the active page
  const startIndex = (active - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const cardsToDisplay = filteredProducts.slice(startIndex, endIndex);

  return (
    <div className="container1  flex flex-wrap justify-between h-[100vh]">
      <div className="sidebar">
        <CategoriesSidebar cat_id={id} />
      </div>
      <div className="h-[100vh] w-[78rem] mt-12">
        <div className=" flex-wrap justify-start gap-6">
          <div className="flex flex-wrap justify-center mt-2 gap-6">
            {cardsToDisplay}
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <div className="flex items-center gap-4">
            <Button
              variant="text"
              className="flex items-center gap-2"
              onClick={prev}
              disabled={active === 1}
            >
              <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
            </Button>
            <div className="flex items-center gap-2">
              {Array.from(
                { length: Math.ceil(totalCards / cardsPerPage) },
                (_, index) => (
                  <IconButton key={index} {...getItemProps(index + 1)}>
                    {index + 1}
                  </IconButton>
                )
              )}
            </div>
            <Button
              variant="text"
              className="flex items-center gap-2"
              onClick={next}
              disabled={active === Math.ceil(totalCards / cardsPerPage)}
            >
              Next <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
