import { db } from "../../data/database.js";
import { v4 as uuidv4 } from "uuid";

export const addToCart = async (req, res, next) => {
  const { products_id } = req.params;
  const { num_of_booked, storage } = req.body;

  try {
    // Step 1: Check if the buyer exists based on their ID.
    const buyer_id = req.user.userID; // Assuming you have the user's ID from isAuthenticated middleware
    db.query(
      "SELECT ID ,name,email FROM buyer WHERE ID =?",
      [buyer_id],
      (err, result) => {
        if (err) {
          res.status(500).json({
            success: false,
            message: "Internal server error1",
          });
        } else {
          if (!result.length) {
            return res.status(404).json({
              success: false,
              message: "Buyer not found",
            });
          } else {
            const email = result[0].email;
            const name = result[0].name;
            // Step 2: Check if the product exists based on its ID.
            const productExists = db.query(
              "SELECT products_id,name,discount FROM products WHERE products_id =?",
              [products_id],
              (err, result) => {
                if (err) {
                  res.status(500).json({
                    success: false,
                    message: "Internal server error2",
                  });
                } else {
                  if (!result.length) {
                    return res.status(404).json({
                      success: false,
                      message: "Product not found",
                    });
                  } else {
                    const products_name = result[0].name;
                    const discount = result[0].discount;
                    db.query(
                      "SELECT storage_id,storage_size,price FROM storage_options_products WHERE storage_size =?",
                      [storage],
                      (err, result) => {
                        if (err) {
                          res.status(500).json({
                            success: false,
                            message: "Internal server error3",
                          });
                        } else {
                          if (!result.length) {
                            res.status(404).json({
                              success: false,
                              message: "Storage option not found",
                            });
                          } else {
                            // Step 4: Create a new cart_id using uuidv4().
                            const cart_id = uuidv4();
                            const newPrice =
                              result[0].price * num_of_booked - discount;
                            // Step 5: Insert a new record into the buyer_add_to_cart table.
                            db.query(
                              "INSERT INTO buyer_add_to_cart (cart_id, buyer_id,name,email ,products_id,products_name,discount, num_of_booked, storage_id, storage,price) VALUES (?,?,?, ?,?,?, ?, ?,?,?,?)",
                              [
                                cart_id,
                                buyer_id,
                                name,
                                email,
                                products_id,
                                products_name,
                                discount,
                                num_of_booked,
                                result[0].storage_id,
                                storage,
                                newPrice,
                              ],
                              (err, result) => {
                                if (err) {
                                  res.status(500).json({
                                    success: false,
                                    message: "Internal server error4",
                                  });
                                } else {
                                  res.status(201).json({
                                    success: true,
                                    message: "Item added to cart successfully",
                                  });
                                }
                              }
                            );
                          }
                        }
                      }
                    );
                  }
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
      message: "Internal server error3",
    });
  }
};
//delete from cart
export const deleteFromCart = async (req, res, next) => {
  const { cart_id } = req.params;
  try {
    db.query(
      "DELETE FROM buyer_add_to_cart WHERE cart_id = ?",
      [cart_id],
      (err, result) => {
        if (err) {
          res.status(500).json({
            success: false,
            message: "Internal server error",
          });
        } else {
          res.status(200).json({
            success: true,
            message: "Item deleted from cart successfully",
          });
        }
      }
    );
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
