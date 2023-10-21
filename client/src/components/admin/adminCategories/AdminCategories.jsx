import { Card, Typography } from "@material-tailwind/react";

import {
  SpeedDial,
  SpeedDialHandler,
  Button,
  Dialog,
  DialogHeader,
  Input,
  DialogFooter,
} from "@material-tailwind/react";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createCategory,
  createSubCategory,
  deleteCategory,
  deleteSubCategory,
  getAllCategories,
  getAllSubCategories,
  updateCategories,
  updateSubCategory,
} from "../../../redux/actions/admin";
import toast from "react-hot-toast";
const TABLE_HEAD = ["Name", "image", "Edit Category", "Delete Category"];
const SUB_TABLE_HEAD = [
  "Name",
  "Category",
  "Edit Sub Category",
  "Delete Sub Category",
];
export function AdminCategories() {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [types, setTypes] = React.useState("");
  const [image, setImage] = React.useState(null);
  const [types2, setTypes2] = React.useState("");
  const [subCategory, setSubCategory] = React.useState("");
  const [isEditing, setIsEditing] = React.useState(false);
  const [updateID, setUpdateID] = React.useState("");
  const [subIsEditing, setSubIsEditing] = React.useState(false);
  const [subUpdateID, setSubUpdateID] = React.useState("");
  //redux
  const dispatch = useDispatch();
  const { loading, categories, sub_categories } = useSelector(
    (state) => state.admin
  );

  //handle add for category
  const addBtnHandler = async () => {
    try {
      if (types === "" || image === null) {
        toast.error("Please fill all the fields");
      } else {
        const formData = new FormData();

        formData.append("types", types);
        formData.append("image", image);
        dispatch(createCategory(formData));
        dispatch(getAllCategories());
      }
    } catch (err) {
      console.log(err);
    }
  };

  //handle delete for category
  const dltBtnHandler = async (dltID) => {
    try {
      dispatch(deleteCategory(dltID));

      dispatch(getAllCategories());
    } catch (err) {
      console.log(err);
    }
  };

  //handle update for category
  const updatebtnHandler = async (updateID) => {
    try {
      setIsEditing(true);
      setUpdateID(updateID);
    } catch (err) {
      console.log(err);
    }
  };
  //dialog box open and close fucntions
  const handleOpen = () => setOpen(!open);
  const handleOpen2 = () => setOpen2(!open2);

  //handle submit for category
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      const newData = new FormData();
      console.log(newData);
      newData.append("types", types);
      newData.append("image", image);
      dispatch(updateCategories(updateID, newData));
      dispatch(getAllCategories());
    } else {
      addBtnHandler();
    }
    setTypes("");
  };
  //////////////////////////////////////////sub category//////////////////////////////////////////
  //handle delete for sub category
  const subDltBtnHandler = async (dltID) => {
    try {
      dispatch(deleteSubCategory(dltID));

      dispatch(getAllSubCategories());
    } catch (err) {
      console.log(err);
    }
  };

  //handle add sub category
  const addBtnHandlerSubCategory = async () => {
    try {
      const subformData = new FormData();
      subformData.append("types", types2);
      subformData.append("sub_categories_name", subCategory);

      console.log(subformData);
      dispatch(createSubCategory(subformData));
      dispatch(getAllSubCategories());
    } catch (err) {
      console.log(err);
    }
  };
  console.log(types2);
  console.log(subCategory);
  //handle update for sub category
  const updatebtnHandlerSubCategory = async (subUpdateID) => {
    try {
      setSubIsEditing(true);
      setSubUpdateID(subUpdateID);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmitSubCategory = (e) => {
    e.preventDefault();
    if (subIsEditing) {
      const subnewData = new FormData();
      console.log(subnewData);
      subnewData.append("types", types2);
      subnewData.append("sub_categories_name", subCategory);

      dispatch(updateSubCategory(subUpdateID, subnewData));
      dispatch(getAllSubCategories());
    } else {
      addBtnHandlerSubCategory();
    }
    setSubCategory("");
  };

  return (
    <div className="admin-container1 top-6">
      {" "}
      {loading ? (
        <span className="loader"></span>
      ) : (
        <div>
          {" "}
          <h1 className="text-2xl my-4">Categories:</h1>
          <Card className="h-full w-full overflow-scroll rounded-none overflow-y-auto">
            <table className="w-full min-w-max table-auto text-left ">
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
                {categories &&
                  categories.map((item) => {
                    const isLast = item === categories.length - 1;
                    const classes = isLast
                      ? "p-4"
                      : "p-4 border-b border-blue-gray-50";

                    return (
                      <tr key={item.id}>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {item.types}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <img
                            className="w-10 h-10 rounded-lg object-fill"
                            src={`${import.meta.env.VITE_IMG_SERVER}/uploads/${
                              item.image
                            }`}
                            alt=""
                          />
                        </td>
                        <td className={`${classes} bg-blue-gray-50/50`}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            <Button
                              key={item.id}
                              onClick={() => {
                                updatebtnHandler(item.id);
                                handleOpen();
                              }}
                              variant="text"
                            >
                              Edit
                            </Button>
                          </Typography>
                        </td>

                        <td className={`${classes} bg-blue-gray-50/50`}>
                          <Typography
                            as="a"
                            href="#"
                            variant="small"
                            color="blue-gray"
                            className="font-medium"
                          >
                            <Button
                              key={item.id}
                              variant="text"
                              onClick={() => dltBtnHandler(item.id)}
                            >
                              Delete
                            </Button>
                          </Typography>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </Card>
          <div className="relative top-2 bottom-0 left-0   flex items-center">
            <SpeedDial placement="right">
              <SpeedDialHandler onClick={handleOpen}>
                <Button
                  type="submit"
                  className="flex justify-center rounded-md bg-blue-gray-900/10 px-3 py-1.5 text-sm font-semibold leading-6 text-blue-gray-900 hover:bg-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Add Categories
                </Button>
              </SpeedDialHandler>
            </SpeedDial>
            <Dialog
              open={open}
              handler={handleOpen}
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0.9, y: -100 },
              }}
            >
              <form onSubmit={handleSubmit}>
                <DialogHeader>Its a simple dialog.</DialogHeader>
                <div className="ml-4 w-[600px]">
                  {" "}
                  <Input
                    label="Enter Category"
                    value={types}
                    onChange={(e) => setTypes(e.target.value)}
                    className="w-[600px]"
                    success
                  />
                </div>
                <div className="ml-4 mt-7 w-[600px]">
                  {" "}
                  <Input
                    label="Enter Image"
                    type="file"
                    name="image"
                    onChange={(e) => setImage(e.target.files[0])}
                    className="w-[600px]"
                    success
                  />
                </div>

                <DialogFooter>
                  <Button
                    variant="text"
                    color="red"
                    onClick={handleOpen}
                    className="mr-1"
                  >
                    <span>Cancel</span>
                  </Button>
                  <Button
                    variant="gradient"
                    type="submit"
                    color="green"
                    onClick={handleOpen}
                  >
                    <span>Confirm</span>
                  </Button>
                </DialogFooter>
              </form>
            </Dialog>
          </div>
          <div>
            {" "}
            <h1 className="text-2xl mb-4 mt-8">Sub Categories:</h1>
            <Card className="h-full w-full overflow-scroll rounded-none">
              <table className="w-full min-w-max table-auto text-left">
                <thead>
                  <tr>
                    {SUB_TABLE_HEAD.map((head, index) => (
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
                  {sub_categories &&
                    sub_categories.map((sub_item) => {
                      const isLast = sub_item === sub_categories.length - 1;
                      const classes = isLast
                        ? "p-4"
                        : "p-4 border-b border-blue-gray-50";

                      return (
                        <tr key={sub_item.sub_categories_id}>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {sub_item.sub_categories_name}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {sub_item.categories_name}
                            </Typography>
                          </td>
                          <td className={`${classes} bg-blue-gray-50/50`}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              <Button
                                key={sub_item.id}
                                onClick={() => {
                                  updatebtnHandlerSubCategory(
                                    sub_item.sub_categories_id
                                  );
                                  handleOpen2();
                                }}
                                variant="text"
                              >
                                Edit
                              </Button>
                            </Typography>
                          </td>

                          <td className={`${classes} bg-blue-gray-50/50`}>
                            <Typography
                              as="a"
                              href="#"
                              variant="small"
                              color="blue-gray"
                              className="font-medium"
                            >
                              <Button
                                key={sub_item.sub_categories_id}
                                variant="text"
                                onClick={() =>
                                  subDltBtnHandler(sub_item.sub_categories_id)
                                }
                              >
                                Delete
                              </Button>
                            </Typography>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </Card>
            <div className="relative top-2 bottom-0 left-0   flex items-center">
              <SpeedDial placement="right">
                <SpeedDialHandler onClick={handleOpen2}>
                  <Button
                    type="submit"
                    className="flex justify-center rounded-md bg-blue-gray-900/10 px-3 py-1.5 text-sm font-semibold leading-6 text-blue-gray-900 hover:bg-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Add Sub Categories
                  </Button>
                </SpeedDialHandler>
              </SpeedDial>
              <Dialog
                open={open2}
                handler={handleOpen2}
                animate={{
                  mount: { scale: 1, y: 0 },
                  unmount: { scale: 0.9, y: -100 },
                }}
              >
                <form onSubmit={handleSubmitSubCategory}>
                  <DialogHeader>Its a simple dialog.</DialogHeader>
                  <div className="ml-4 w-[600px]">
                    {" "}
                    <Input
                      label="Enter Sub Category"
                      value={subCategory}
                      onChange={(e) => setSubCategory(e.target.value)}
                      className="w-[600px]"
                      success
                    />
                  </div>
                  <div className="ml-4 mt-4 w-[600px]">
                    {" "}
                    <select
                      className="w-full border border-green-400 h-8 rounded-md"
                      value={types2}
                      onChange={(e) => setTypes2(e.target.value)}
                    >
                      <option defaultChecked>Select Category</option>
                      {categories &&
                        categories.map((sub_item) => {
                          return (
                            <option key={sub_item.id} value={sub_item.types}>
                              {sub_item.types}
                            </option>
                          );
                        })}
                    </select>
                  </div>

                  <DialogFooter>
                    <Button
                      variant="text"
                      color="red"
                      onClick={handleOpen2}
                      className="mr-1"
                    >
                      <span>Cancel</span>
                    </Button>
                    <Button
                      variant="gradient"
                      type="submit"
                      color="green"
                      onClick={handleOpen2}
                    >
                      <span>Confirm</span>
                    </Button>
                  </DialogFooter>
                </form>
              </Dialog>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
