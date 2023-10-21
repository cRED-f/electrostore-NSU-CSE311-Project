import { db } from "../../data/database.js";
import { setCookies } from "../../utils/login.js";
import bcrypt from "bcrypt";

//login
export const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const result = await new Promise((resolve, reject) => {
      db.query(
        "SELECT ID,email,password,name,role FROM buyer WHERE email=?",
        [email],
        (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        }
      );
    });

    if (result.length === 0) {
      res.status(400).json({
        success: false,
        message: "User does not exist",
      });
    }

    const storedPassword = result[0].password;
    const passwordMatch = await bcrypt.compare(password, storedPassword);

    if (passwordMatch) {
      const ID = result[0].ID;
      const role = result[0].role;
      const name = result[0].name;
      const email = result[0].email;
      await setCookies(
        ID,
        name,
        email,
        role,
        res,
        `Welcome Back ${result[0].name}`,
        200
      );
    } else {
      res.status(401).json({
        success: false,
        message: "Incorrect password",
      });
    }
  } catch (err) {
    next(err);
  }
};
