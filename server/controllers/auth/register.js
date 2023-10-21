import { db } from "../../data/database.js";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";

const saltRounds = 10;

export const register = async (req, res, next) => {
  const { name, email, password } = req.body;
  console.log(req.body);
  const ID = uuidv4(); // Generate a new UUID for each user
  try {
    db.query(
      "SELECT email FROM buyer WHERE email=?",
      [email],
      (err, result) => {
        if (err) {
          res.status(500).json({
            // 500 Internal Server Error
            success: false,
            message: "An error occurred2.",
          });
        } else {
          if (result.length > 0) {
            res.status(400).json({
              success: false,
              message: "User already exists",
            });
          } else {
            bcrypt.hash(password, saltRounds, (err, hash) => {
              if (err) {
                res.status(500).json({
                  // 500 Internal Server Error
                  success: false,
                  message: "An error occurred1.",
                });
              } else {
                const role = "visitor";
                //insert data into database
                db.query(
                  "INSERT INTO buyer (ID, name, email, password,role) VALUES (?, ?, ?, ?,?)",
                  [ID, name, email, hash, role], // Use the hash value for password
                  (err, result) => {
                    if (err) {
                      res.status(500).json({
                        // 500 Internal Server Error
                        success: false,
                        message: "An error occurred3.",
                      });
                    } else {
                      return next(
                        res.status(200).json({
                          success: true,
                          message: "User registered successfully",
                        })
                      );
                    }
                  }
                );
              }
            });
          }
        }
      }
    );
  } catch (error) {
    next(error);
  }
};
