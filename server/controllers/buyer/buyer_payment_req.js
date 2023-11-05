import { db } from "../../data/database.js";

export const buyer_payment_req = (req, res) => {
  const { buyer_id } = req.params;

  db.query(
    "SELECT * FROM buyer_payment_status where buyer_id = ?",
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
          message: "Successfully fetched all payment requests",
          buyer_payment_req: result,
        });
      }
    }
  );
};
