import jwt from "jsonwebtoken";

export const setCookies = (
  userID,
  name,
  email,
  role,
  res,
  message,
  statusCode = 200
) => {
  return new Promise((resolve, reject) => {
    const token = jwt.sign({ userID }, process.env.JWT_SECRET);

    res
      .status(statusCode)
      .cookie("token", token, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
        sameSite: "none",
        secure: true,
      })
      .json({
        success: true,
        message,
        token,
        data: {
          userID,
          name,
          email,
          role,
        },
      });

    resolve();
  });
};
