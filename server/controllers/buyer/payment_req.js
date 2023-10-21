import { db } from "../../data/database.js";
import { v4 as uuidv4 } from "uuid";

export const payment_req = async (req, res, next) => {
  const { cart_id } = req.params;
  const {
    address,
    payment_method,
    phone_num,
    password,
    card_num,
    cvv,
    expire_date,
  } = req.body;
  const buyer_id = req.user.userID;
  const payment_req_id = uuidv4();

  try {
    db.query(
      "SELECT b.cart_id, b.products_id,b.num_of_booked,b.storage_id,b.buyer_id,b.name,b.email,b.discount,b.products_name,s.price,s.storage_id, p.stock FROM buyer_add_to_cart b JOIN products p ON b.products_id = p.products_id JOIN storage_options_products s ON b.products_id = s.products_id AND b.storage_id=s.storage_id  WHERE b.cart_id = ? AND b.buyer_id = ?",
      [cart_id, buyer_id],
      (err, result) => {
        if (err) {
          res.status(500).json({
            success: false,
            message: "Internal server error",
          });
        } else {
          if (!result.length) {
            res.status(404).json({
              success: false,
              message: "Cart not found",
            });
          } else {
            const price = result[0].price;
            const num_of_booked = result[0].num_of_booked;
            const discount = result[0].discount;
            const total_price = price * num_of_booked - discount;
            const stock = result[0].stock;
            const products_name = result[0].products_name;

            if (stock == 0) {
              res.status(404).json({
                success: false,
                message: "Product is out of stock",
              });
            } else {
              db.query(
                "INSERT INTO payment_req (payment_req_id, buyer_id, cart_id,name,email,address, payment_method, phone_num, password, card_num, cvv, expire_date,products_name, total_amount ,stock) VALUES (?,?, ?,?,?,?, ?, ?, ?, ?, ?, ?, ?,?, ?)",
                [
                  payment_req_id,
                  buyer_id,
                  cart_id,
                  result[0].name,
                  result[0].email,
                  address,
                  payment_method,
                  phone_num,
                  password,
                  card_num,
                  cvv,
                  expire_date,
                  products_name,
                  total_price,
                  stock,
                ],
                (err, result) => {
                  if (err) {
                    res.status(500).json({
                      success: false,
                      message: "Internal server error",
                    });
                    console.log(err);
                  } else {
                    res.status(200).json({
                      success: true,
                      message: "Successfully added to payment",
                    });
                  }
                }
              );
            }
          }
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
