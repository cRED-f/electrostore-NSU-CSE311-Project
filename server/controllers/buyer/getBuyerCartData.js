import { db } from "../../data/database.js";

//buyer all cart data
export const getBuyerCartData = async (req, res) => {
  const { buyer_id } = req.params;
  try {
    db.query(
      "SELECT * FROM buyer_add_to_cart WHERE buyer_id = ?",
      [buyer_id],
      (err, result) => {
        if (err) {
          res.status(500).json({
            success: false,
            message: "Internal server error",
          });
        } else {
          res.status(200).json({
            success: true,
            message: "Successfully fetched all cart data",
            carts: result,
          });
        }
      }
    );
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal server error3",
    });
  }
};
