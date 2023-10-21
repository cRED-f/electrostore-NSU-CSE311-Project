import { db } from "../../data/database.js";
import bcrypt from "bcrypt";

const saltRounds = 10;

export const forgotPass = (req, res, next) => {
  const { email, oldPassword, newPassword } = req.body;

  try {
    // Run query to check if email exists and retrieve password
    db.query(
      "SELECT email, password FROM buyer WHERE email=?",
      [email],
      (err, queryResult) => {
        if (err) {
          res.status(500).json({
            // 500 Internal Server Error
            success: false,
            message: "An error occurred.",
          });
        } else if (queryResult.length === 0) {
          res.status(400).json({
            success: false,
            message: "User does not exist",
          });
        } else {
          const storedPassword = queryResult[0].password; // Retrieve the stored password

          // Compare oldPassword with the stored password
          bcrypt.compare(oldPassword, storedPassword, (err, passwordMatch) => {
            if (err) {
              res.status(500).json({
                // 500 Internal Server Error
                success: false,
                message: "An error occurred.",
              });
            } else {
              if (passwordMatch) {
                // Hash the new password
                bcrypt.hash(newPassword, saltRounds, (err, hash) => {
                  if (err) {
                    res.status(500).json({
                      // 500 Internal Server Error
                      success: false,
                      message: "An error occurred.",
                    });
                  } else {
                    // Update the password in the database
                    db.query(
                      "UPDATE buyer SET password=? WHERE email=?",
                      [hash, email],
                      (err, updateResult) => {
                        if (err) {
                          return next(
                            new ErrorHandler("An error occurred.", 500)
                          );
                        } else {
                          res.status(200).json({
                            success: true,
                            message: "Password updated successfully",
                          });
                        }
                      }
                    );
                  }
                });
              } else {
                res.status(400).json({
                  success: false,
                  message: "Invalid password",
                });
              }
            }
          });
        }
      }
    );
  } catch (error) {
    next(error);
  }
};
