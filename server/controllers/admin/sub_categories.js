import { db } from "../../data/database.js";
import { v4 as uuidv4 } from "uuid";

//insert sub categories into database
export const addSubCategories = async (req, res) => {
  const id = uuidv4();
  const { types, sub_categories_name } = req.body;
  const sub_categories_id = uuidv4();
  if (!sub_categories_name || !types) {
    return res.status(400).json({
      success: false,
      message: "Missing 'sub_categories_name' data in the request body",
    });
  }
  try {
    db.query(
      "SELECT id ,types from categories WHERE types=?",
      [types],
      (err, result) => {
        if (err) {
          res.status(500).json({
            success: false,
            message: "An error occurred.1",
          });
        } else {
          if (!result.length) {
            res.status(404).json({
              success: false,
              message: "No such category",
            });
          } else {
            db.query(
              "INSERT INTO sub_categories (sub_categories_id,categories_id,categories_name,sub_categories_name) VALUES (?,?,?,?)",
              [sub_categories_id, result[0].id, types, sub_categories_name],
              (err, result) => {
                if (err) {
                  console.log(err);
                  res.status(500).json({
                    success: false,
                    message: "An error occurred1.",
                  });
                } else {
                  res.status(200).json({
                    success: true,
                    message: `Sub Category  added successfully`,
                  });
                }
              }
            );
          }
        }
      }
    );
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "An error occurred.",
    });
  }
};

//get all sub categories
export const getAllSubCategories = async (req, res) => {
  try {
    db.query("SELECT * FROM sub_categories", (err, result) => {
      if (err) {
        res
          .status(500)
          .json({ success: false, message: "Internal server error" });
      } else {
        if (!result.length) {
          res
            .status(404)
            .json({ success: true, message: "No products request" });
        } else {
          res.status(200).json({
            success: true,
            message: "Successfully fetched all products request",
            data: result,
          });
        }
      }
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

//delete sub categories from database
export const deleteSubCategories = async (req, res) => {
  const { sub_categories_id } = req.params;

  if (!sub_categories_id) {
    return res.status(400).json({
      success: false,
      message: "Missing 'sub_categories_id' data in the request body",
    });
  }

  try {
    // Delete from sub_categories table
    db.query(
      "DELETE FROM sub_categories WHERE sub_categories_id = ?",
      [sub_categories_id],
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).json({
            success: false,
            message: "An error occurred.1",
          });
        } else {
          // If deletion from sub_categories is successful, you can delete from products table here
          db.query(
            "DELETE FROM products WHERE sub_categories_id = ?",
            [sub_categories_id],
            (err, result) => {
              if (err) {
                console.log(err);
                res.status(500).json({
                  success: false,
                  message: "An error occurred.2",
                });
              } else {
                res.status(200).json({
                  success: true,
                  message: `Sub Category deleted successfully`,
                });
              }
            }
          );
        }
      }
    );
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "An error occurred.3",
    });
  }
};

//update sub categories
export const updateSubCategories = async (req, res) => {
  const { sub_categories_id } = req.params;
  const { sub_categories_name } = req.body;

  if (!sub_categories_id || !sub_categories_name) {
    return res.status(400).json({
      success: false,
      message: "Missing 'sub_categories_id' data in the request body",
    });
  }

  try {
    db.query(
      "UPDATE sub_categories SET sub_categories_name = ? WHERE sub_categories_id = ?",
      [sub_categories_name, sub_categories_id],
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).json({
            success: false,
            message: "An error occurred.",
          });
        } else {
          db.query(
            "UPDATE products SET sub_categories_name = ? WHERE sub_categories_id = ?",
            [sub_categories_name, sub_categories_id],
            (err, result) => {
              if (err) {
                console.log(err);
                res.status(500).json({
                  success: false,
                  message: "An error occurred.",
                });
              } else {
                res.status(200).json({
                  success: true,
                  message: `Sub Category updated successfully`,
                });
              }
            }
          );
        }
      }
    );
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "An error occurred.",
    });
  }
};
