import { PhotoIcon } from "@heroicons/react/24/solid";
import { Button, Input } from "@material-tailwind/react";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { createBillboard, updateBillboard } from "../../../redux/actions/admin";
import toast from "react-hot-toast";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function AdminAddBillboards() {
  const [name, setName] = useState("");
  const [destination, setDestination] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { productID } = useParams();

  const isEditing = !!productID;

  const changeImageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!image || !name || !destination) {
      return toast.error(`Please fill all the fields`);
    } else {
      console.log(isEditing);
      if (isEditing) {
        const newData = new FormData();
        newData.append("products_name", name);
        newData.append("destination", destination);
        newData.append("image", image);
        dispatch(updateBillboard(productID, newData));
        navigate("/admin/billboards");
      } else {
        const formData = new FormData();
        formData.append("products_name", name);
        formData.append("destination", destination);
        formData.append("image", image);
        dispatch(createBillboard(formData));
        setName("");
        setDestination("");
        setImage(null);

        navigate("/admin/billboards");
      }
    }
  };

  return (
    <div className="admin-container1 top-6">
      <div>
        {" "}
        <div className="relative flex-col  w-fit top-2 bottom-0 left-0 flex items-center">
          <h1 className="text-2xl font-extrabold">
            {isEditing ? "Edit" : "Add"} Billboard
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
                <div className="flex mb-4 W-full flex-col gap-6">
                  <select
                    className="w-full px-4 py-2 border border-gray-400 rounded-lg bg-white text-gray-800 focus:outline-none focus:border-blue-500"
                    value={destination} // Set the selected value on the <select> element
                    onChange={(e) => setDestination(e.target.value)} // Handle the change event to update the state
                    label="Select Category"
                  >
                    <option value="">Select Category</option>
                    <option value="carousel">carousel</option>
                    <option value="billboard-1">billboard-1</option>
                    <option value="billboard-2">billboard-2</option>
                    <option value="billboard-3">billboard-3</option>
                    <option value="billboard-4">billboard-4</option>
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

            <Link to="/admin/billboards">
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
