import { PhotoIcon } from "@heroicons/react/24/solid";
import { Button, Input, Textarea } from "@material-tailwind/react";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProduct, updateProduct } from "../../../redux/actions/admin";
import toast from "react-hot-toast";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function AdminProducts() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [discount, setDiscount] = useState("");
  const [stock, setStock] = useState("");
  const [date, setDate] = useState("");
  const [warranty, setWarranty] = useState("");
  const [types, setTypes] = useState("");
  const [price, setPrice] = useState("");
  const [storagesize, setStoragesize] = useState("");
  const [model, setModel] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { productID } = useParams();

  const isEditing = !!productID;
  const { categories, sub_categories } = useSelector((state) => state.admin);

  const changeImageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !image ||
      !name ||
      !description ||
      !discount ||
      !stock ||
      !date ||
      !warranty ||
      !types ||
      !price ||
      !storagesize
    ) {
      return toast.error(`Please fill all the fields`);
    } else {
      console.log(isEditing);
      if (isEditing) {
        const newData = new FormData();
        newData.append("name", name);
        newData.append("description", description);
        newData.append("discount", discount);
        newData.append("stock", stock);
        newData.append("date", date);
        newData.append("warranty", warranty);
        newData.append("types", types);
        newData.append("sub_categories_name", model);
        newData.append("image", image);
        newData.append("storage_size", storagesize);
        newData.append("price", price);
        dispatch(updateProduct(productID, newData));
        navigate("/admin/products");
      } else {
        const formData = new FormData();
        formData.append("name", name);
        formData.append("description", description);
        formData.append("discount", discount);
        formData.append("stock", stock);
        formData.append("date", date);
        formData.append("warranty", warranty);
        formData.append("types", types);
        formData.append("sub_categories_name", model);
        formData.append("image", image);
        formData.append("storage_size", storagesize);
        formData.append("price", price);
        dispatch(createProduct(formData));
        setName("");
        setDescription("");
        setDiscount("");
        setStock("");
        setDate("");
        setWarranty("");
        setTypes("");
        setModel("");
        setImage(null);
        setStoragesize("");
        setPrice("");

        navigate("/admin/products");
      }
    }
  };

  return (
    <div className="admin-container1 top-6">
      <div>
        {" "}
        <div className="relative flex-col  w-fit top-2 bottom-0 left-0 flex items-center">
          <h1 className="text-2xl font-extrabold">
            {isEditing ? "Edit" : "Add"} Products
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="flex-col my-3">
              {" "}
              <div className="ml-4 mb-4 w-[600px]">
                {" "}
                <Input
                  label="Enter product name"
                  type="text"
                  className="w-[600px]"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="ml-4 mb-4 w-[600px]">
                {" "}
                <Textarea
                  label="Enter  Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="ml-4 mb-4 w-[600px]">
                {" "}
                <Input
                  label="Enter Storage"
                  type="text"
                  className="w-[600px]"
                  value={storagesize}
                  onChange={(e) => setStoragesize(e.target.value)}
                />
              </div>
              <div className="ml-4 mb-4 w-[600px]">
                {" "}
                <Input
                  label="Enter Price"
                  type="number"
                  className="w-[600px]"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className="ml-4 mb-4 w-[600px]">
                {" "}
                <Input
                  label="Enter Stock"
                  type="number"
                  className="w-[600px]"
                  value={stock}
                  onChange={(e) => setStock(e.target.value)}
                />
              </div>
              <div className="ml-4 mb-4 w-[600px]">
                {" "}
                <Input
                  label="Enter Discount price"
                  type="number"
                  className="w-[600px]"
                  value={discount}
                  onChange={(e) => setDiscount(e.target.value)}
                />
              </div>{" "}
              <div className="ml-4 mb-4 w-[600px]">
                {" "}
                <Input
                  label="Enter Warranty"
                  type="number"
                  className="w-[600px]"
                  value={warranty}
                  onChange={(e) => setWarranty(e.target.value)}
                />
              </div>
              <div className="ml-4 mb-4 w-[600px]">
                {" "}
                <Input
                  label="Enter Warranty"
                  type="date"
                  className="w-[600px]"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <div className="ml-4 mb-4 w-[600px]">
                <div className="flex mb-4 W-full flex-col gap-6">
                  <select
                    className="w-full px-4 py-2 border border-gray-400 rounded-lg bg-white text-gray-800 focus:outline-none focus:border-blue-500"
                    value={types} // Set the selected value on the <select> element
                    onChange={(e) => setTypes(e.target.value)} // Handle the change event to update the state
                    label="Select Category"
                  >
                    <option value="">Select Category</option>
                    {categories.map((item) => (
                      <option key={item.id} value={item.types}>
                        {item.types}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="ml-4 mb-4 w-[600px]">
                <div className="flex mb-4 W-full flex-col gap-6">
                  <select
                    className="w-full px-4 py-2 border border-gray-400 rounded-lg bg-white text-gray-800 focus:outline-none focus:border-blue-500"
                    value={model} // Set the selected value on the <select> element
                    onChange={(e) => setModel(e.target.value)} // Handle the change event to update the state
                    label="Select Category"
                  >
                    <option value="">Select Model</option>
                    {sub_categories.map((item) => (
                      <option
                        key={item.sub_categories_id}
                        value={item.sub_categories_name}
                      >
                        {item.sub_categories_name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="ml-4 mb-4 w-[600px]">
                {" "}
                <div className="w-[50vh]">
                  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                    <div className="text-center">
                      <PhotoIcon
                        className="mx-auto h-12 w-12 text-gray-300"
                        aria-hidden="true"
                      />
                      <div className="mt-4 flex text-sm leading-6 text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input
                            id="file-upload"
                            name="image"
                            type="file"
                            className="sr-only"
                            onChange={changeImageHandler}
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs leading-5 text-gray-600">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link to="/admin/products">
              <Button variant="text" color="red" className="mr-1 mb-8">
                <span>Cancel</span>
              </Button>
            </Link>
            <Button
              className="mb-8"
              variant="gradient"
              type="submit"
              color="green"
            >
              Confirm
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
