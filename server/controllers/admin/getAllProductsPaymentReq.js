import { db } from "../../data/database.js";

export const getAllProductsPaymentReq = async (req, res) => {
  try {
    db.query("SELECT * FROM payment_req", (err, result) => {
      if (err) {
        res.status(500).json({
          success: false,
          message: "Internal server error",
        });
      } else {
        if (!result.length) {
          res.status(404).json({
            success: true,
            message: "No products request",
          });
        } else {
          res.status(200).json({
            success: true,
            message: "Successfully fetched all products request",
            products: result,
          });
        }
      }
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
