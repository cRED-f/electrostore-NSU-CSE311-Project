import { db } from "../../data/database.js";
import { v4 as uuidv4 } from "uuid";

export const productsStatus = async (req, res, next) => {
  const { status } = req.body;
  const { payment_req_id } = req.params;

  try {
    db.query(
      "SELECT p.payment_req_id,p.name AS nami,p.products_name,p.total_amount,p.payment_method,s.stock,s.name,s.types  FROM payment_req p , products s  WHERE p.products_name = s.name AND p.payment_req_id =?",
      [payment_req_id],
      (err, result1) => {
        if (err) {
          res.status(500).json({
            success: false,
            message: "Internal server error",
          });
          console.log(err);
        } else {
          console.log(result1);
          if (result1 && result1.length >= 0) {
            db.query(
              "UPDATE payment_status SET status = ? WHERE payment_req_id = ?",
              [status, payment_req_id],
              (err, result) => {
                if (err) {
                  res.status(500).json({
                    success: false,
                    message: "Internal server error",
                  });
                } else {
                  const payment_status_id = uuidv4();
                  db.query(
                    "INSERT INTO payment_status (payment_status_id,payment_req_id,name,products_name,types,total_amount,payment_method,stock,status) VALUES (?,?,?,?,?,?,?,?,?)",
                    [
                      payment_status_id,
                      payment_req_id,
                      result1[0].nami,
                      result1[0].products_name,
                      result1[0].types,
                      result1[0].total_amount,
                      result1[0].payment_method,
                      result1[0].stock,
                      status,
                    ],
                    (err, result) => {
                      if (err) {
                        res.status(500).json({
                          success: false,
                          message: "Internal server error",
                        });
                      } else {
                        db.query(
                          "DELETE  FROM payment_req WHERE payment_req_id = ?",
                          [payment_req_id],
                          (err, result) => {
                            if (err) {
                              res.status(500).json({
                                success: false,
                                message: "Internal server error",
                              });
                            } else {
                              res.status(200).json({
                                success: true,
                                message: "Payment status updated successfully",
                              });
                            }
                          }
                        );
                      }
                    }
                  );
                }
              }
            );
          } else {
            res.status(404).json({
              success: false,
              message:
                "Payment request not found or does not contain enough data",
            });
          }
        }
      }
    );
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal server error4",
    });
  }
};
