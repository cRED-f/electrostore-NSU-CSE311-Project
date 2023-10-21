import { db } from "../../data/database.js";
import { v4 as uuidv4 } from "uuid";

//upload billboards into database
export const billboardUpload = async (req, res) => {
  const { products_name, destination } = req.body;
  const image = req.file.filename;
  const billboard_id = uuidv4();

  try {
    db.query(
      "SELECT products_id,name FROM products WHERE name = ?",
      [products_name],
      (err, result) => {
        if (err) {
          res.status(500).json({
            success: false,
            message: "Product not found",
          });
        } else {
          if (result.length === 0) {
            return res.status(400).json({
              success: false,
              message: "Product not found",
            });
          }
          db.query(
            "INSERT INTO billboards (billboard_id,products_id,products_name,destination,image) VALUES (?,?,?,?,?)",
            [
              billboard_id,
              result[0].products_id,
              result[0].name,
              destination,
              image,
            ],
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
                  message: `Billboard  added  to ${destination} successfully`,
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
      message: "An error occurred.2",
    });
  }
};

//delete billboards from database
export const deleteBillboard = async (req, res) => {
  const { billboard_id } = req.params;

  if (!billboard_id) {
    return res.status(400).json({
      success: false,
      message: "Missing 'billboard_id' data in the request body",
    });
  }

  try {
    db.query(
      "DELETE FROM billboards WHERE billboard_id = ?",
      [billboard_id],
      (err, result) => {
        if (err) {
          res.status(500).json({
            success: false,
            message: "An error occurred.",
          });
        } else {
          res.status(200).json({
            success: true,
            message: `Billboard  deleted successfully`,
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

//update billboards into database
export const updateBillboard = async (req, res) => {
  const { billboard_id } = req.params;
  const { products_name, destination } = req.body;
  const image = req.file.filename;

  try {
    db.query(
      "SELECT products_id,name FROM products WHERE name = ?",
      [products_name],
      (err, result) => {
        if (err) {
          res.status(500).json({
            success: false,
            message: "Product not found",
          });
        } else {
          db.query(
            "UPDATE billboards SET products_id=?,products_name=?,destination=?,image=? WHERE billboard_id=?",
            [
              result[0].products_id,
              result[0].name,
              destination,
              image,
              billboard_id,
            ],
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
                  message: `Billboard  updated  successfully`,
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
      message: "An error occurred.2",
    });
  }
};

//get all billboards from database
export const getAllBillboards = async (req, res) => {
  try {
    db.query("SELECT * FROM billboards", (err, result) => {
      if (err) {
        res.status(500).json({
          success: false,
          message: "An error occurred.",
        });
      } else {
        res.status(200).json({
          success: true,
          message: "Billboards fetched successfully",
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
