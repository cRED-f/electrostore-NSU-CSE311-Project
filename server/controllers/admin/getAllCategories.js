import { db } from "../../data/database.js";

export const getAllCategories = async (req, res) => {
  try {
    db.query("SELECT * FROM categories", (err, result) => {
      if (err) {
        res.status(500).json({
          success: false,
          message: "An error occurred.",
        });
      } else {
        res.status(200).json({
          success: true,
          message: "Categories fetched successfully",
          data: result,
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
