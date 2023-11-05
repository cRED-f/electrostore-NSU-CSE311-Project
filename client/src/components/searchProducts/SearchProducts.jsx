import { Input } from "@material-tailwind/react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function SearchProducts() {
  const [value, setValue] = useState("");
  const { products } = useSelector((state) => state.admin);

  const searchResults = products
    .filter((item) => {
      const searchTerm = value.toLowerCase();
      const fullName = item.name.toLowerCase();

      return (
        searchTerm && fullName.startsWith(searchTerm) && fullName !== searchTerm
      );
    })
    .slice(0, 10);

  return (
    <div className="relative">
      <Input
        type="text"
        label="Search products.."
        onChange={(e) => setValue(e.target.value)}
      />
      {searchResults.length > 0 && (
        <div className="absolute top-full left-0 bg-white z-20 w-[22vh] shadow-md shadow-black">
          {searchResults.map((item) => (
            <Link
              to={`/products/${item.products_id}`}
              key={item.name}
              onClick={() => setValue("")}
            >
              <div className=" cursor-pointer  text-center py-4 border-b border-gray-500 ">
                {" "}
                {item.name}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
