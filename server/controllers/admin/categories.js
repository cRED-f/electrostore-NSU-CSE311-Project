import { db } from "../../data/database.js";
import { v4 as uuidv4 } from "uuid";
//insert categories into database
export const categories = async (req, res) => {
  const id = uuidv4();
  const { types } = req.body;
  const image = req.file.filename;
  // console.log(types);
  if (!types) {
    return res.status(400).json({
      success: false,
      message: "Missing 'types' data in the request body",
    });
  }
  try {
    db.query(
      "INSERT INTO categories (types,id,image) VALUES (?,?,?)",
      [types, id, image],
      (err, result) => {
        if (err) {
          res.status(500).json({
            success: false,
            message: "An error occurred.",
          });
        } else {
          res.status(200).json({
            success: true,
            message: `Category ${id}  added successfully`,
          });
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
//delete categories from database
export const deleteCategories = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      success: false,
      message: "Missing 'id' data in the request body",
    });
  }

  try {
    db.query("DELETE FROM categories WHERE id = ?", [id], (err, result) => {
      if (err) {
        res.status(500).json({
          success: false,
          message: "An error occurred.",
        });
      } else {
        res.status(200).json({
          success: true,
          message: `Category types deleted successfully`,
        });
      }
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "An error occurred.",
    });
  }
};
// Update categories in the database
export const updateCategories = async (req, res) => {
  const { id } = req.params;
  const { types } = req.body;
  const image = req.file.filename;
  try {
    db.query(
      "UPDATE categories SET types=?, image=? WHERE id=?",
      [types, image, id],
      (err, result) => {
        if (err) {
          console.error(err);
          res.status(500).json({
            success: false,
            message: "An error occurred",
          });
        } else {
          if (result.affectedRows > 0) {
            res.status(200).json({
              success: true,
              message: "Categories updated successfully",
            });
          } else {
            res.status(400).json({
              success: false,
              message: "This category does not exist",
            });
          }
        }
      }
    );
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "An error occurred",
    });
  }
};
