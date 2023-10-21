import { db } from "../../data/database.js";

export const getAllProducts = async (req, res, next) => {
  try {
    db.query(
      "SELECT p.products_id, p.name,p.description,p.discount,p.stock,p.date,p.warranty,p.categories_id,p.types,p.sub_categories_id,p.sub_categories_name,p.image,s.storage_size,s.price FROM products p JOIN storage_options_products s ON p.products_id = s.products_id",
      (err, result) => {
        if (err) {
          res.status(500).json({
            success: false,
            message: err.message,
          });
        } else {
          res.status(200).json({
            success: true,
            message: "Successfully fetched all products",
            products: result,
          });
        }
      }
    );
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
